_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"7ljp":function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r("q1tI"),c=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var a=c.a.createContext({}),j=function(e){var t=c.a.useContext(a),r=t;return e&&(r="function"===typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=j(e.components);return c.a.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),b=j(r),f=n,O=b["".concat(s,".").concat(f)]||b[f]||u[f]||i;return r?c.a.createElement(O,o(o({ref:t},a),{},{components:r})):c.a.createElement(O,o({ref:t},a))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"===typeof e?e:n,s[1]=o;for(var a=2;a<i;a++)s[a]=r[a];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},Ff2n:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}r.d(t,"a",(function(){return n}))},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("IlR1")}])},IlR1:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),c=r("rePB"),i=r("q1tI"),s=r.n(i),o=r("g4pe"),l=r.n(o),a=r("7ljp");function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var c=O(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return f(this,r)}}var h=function(e){return"#".concat(e.toLowerCase().replaceAll(" ","-"))},p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(s,e);var t,r,c,i=d(s);function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(e=i.call(this)).state={toc:[]},e}return t=s,(r=[{key:"componentDidMount",value:function(){var e=Array.from(document.querySelectorAll("main > h2")).map((function(e){return e.innerText}));this.setState({toc:e})}},{key:"render",value:function(){return this.state.toc.length&&Object(n.jsxs)("nav",{className:"toc",children:[Object(n.jsx)("h2",{children:"Table Of Contents"}),Object(n.jsx)("ul",{children:this.state.toc.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:h(e),children:e})},e)}))})]})}}])&&j(t.prototype,r),c&&j(t,c),s}(s.a.Component),m=r("uOCT"),x=r.n(m);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){return Object(n.jsx)("section",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({className:"".concat(x.a.bad," relative border-solid border-0 border-l-4 border-red-500 bg-gray-100 p-5 rounded-r flex align-middle justify-center")},e))}var v=r("Ts5t"),w=r.n(v);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){return Object(n.jsx)("section",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({className:"".concat(w.a.good," relative border-solid border-0 border-l-4 border-green-500 bg-gray-100 p-5 rounded-r flex align-middle justify-center")},e))}var _=r("QuGJ"),D=r("Ff2n"),S=r("YFqc"),E=r.n(S);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){var t=e.src,r=Object(D.a)(e,["src"]);return t&&t.startsWith("/")&&(t="/fabric-design"+t),Object(n.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({src:t},r))}var C=r("kmpA"),F=r.n(C);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(){return Object(n.jsxs)("nav",{className:F.a.sidenav,children:[Object(n.jsxs)("h1",{className:"grid gap-8 grid-flow-col justify-start items-center my-24",children:[Object(n.jsx)(T,{src:"/FINN-logo-icon.svg",height:"40",width:"80",alt:"FINN logo"}),Object(n.jsx)("span",{className:"text-22",children:"Fabric"})]}),Object(n.jsx)("h2",{className:"h4 pt-24",children:"Foundations"}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:F.a.multilevel,children:[Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/typography",children:"Typography"})}),Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/color",children:"Color"})}),Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/iconography",children:"Iconography"})}),Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/screenreaders",children:"Accessibility"})})]})}),Object(n.jsx)("h2",{className:"h4 pt-24",children:"Components"}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)(H,{href:"/",children:"Actions"}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:F.a.multilevel,children:[Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/button",children:"Button"})}),Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/utility-button",children:"Button utility"})})]})})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(H,{href:"/",children:"Forms"}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:F.a.multilevel,children:[Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/checkbox",children:"Checkbox"})}),Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/input",children:"Input"})}),Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/radio",children:"Radio"})}),Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/search",children:"Search"})}),Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/select",children:"Select"})}),Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/slider",children:"Slider"})}),Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/text-area",children:"Text area"})})]})})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(H,{href:"/",children:"Images and icons"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:F.a.multilevel,children:Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/icons",children:"Icon"})})})})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(H,{href:"/",children:"Feedback indicators"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:F.a.multilevel,children:Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/status-ribbon",children:"Status ribbon"})})})})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(H,{href:"/",children:"Lists and tables"}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:F.a.multilevel,children:[Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/data-table",children:"Data table"})}),Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/description-list",children:"Description list"})}),Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/list",children:"List"})})]})})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(H,{href:"/",children:"Navigation"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:F.a.multilevel,children:Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/breadcrumbs",children:"Breadcrumbs"})})})})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(H,{href:"/",children:"Overlays"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:F.a.multilevel,children:Object(n.jsx)("li",{children:Object(n.jsx)(H,{href:"/modal",children:"modal"})})})})]})]})]})}var H=function(e){var t=e.href,r=Object(D.a)(e,["href"]);return Object(n.jsx)(E.a,{href:t,children:Object(n.jsx)("a",I({className:"py-4 px-12 rounded-8 relative inline-flex items-center box-border w-full border border-solid border-transparent no-underline break-words cursor-pointer bg-transparent text-gray-700 hover:bg-gray-100 hover:border-gray-200"},r))})};var M=r("QdHu");function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G="grid gap-6 grid-flow-col justify-start items-center  link link--block";function V(e){return Object(n.jsxs)("footer",B(B({className:"mt-32 text-12 text-gray-600"},e),{},{children:[Object(n.jsx)("hr",{className:"mb-40"}),Object(n.jsxs)("div",{className:"grid grid-flow-col justify-end gap-24",children:[Object(n.jsxs)("a",{className:G,href:"https://sch-chat.slack.com/archives/C01GYKPJVFT",title:"Slack channel",style:{color:"inherit"},children:[Object(n.jsx)("svg",{"aria-hidden":!0,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"w-20 h-20",children:Object(n.jsx)("path",{fill:"currentColor",d:"M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"})}),"#finn-fabric"]}),Object(n.jsxs)("a",{className:G,href:"https://opensource.finn.no/fabric-design",title:"Github repository",style:{color:"inherit"},children:[Object(n.jsx)("svg",{"aria-hidden":!0,role:"img",className:"w-20 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(n.jsx)("path",{fill:"currentColor",d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"})}),"Github"]})]})]}))}function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L={TableOfContents:p,AssetLink:M.a,AssetLinks:M.b,Bad:g,Good:N,Guideline:function(e){var t=e.title,r=e.children,c=e.image,i=e.good,s=e.bad,o=function(){return Object(n.jsx)("div",{})};return c&&i?o=N:c&&s?o=g:c&&(o=_.a),Object(n.jsxs)("div",{className:"grid md:grid-cols-2 mb-16 ".concat(t?"mt-48":""),children:[Object(n.jsxs)("div",{className:"col-span1 pr-48",children:[Object(n.jsx)("h3",{children:t}),Object(n.jsx)("p",{children:r})]}),Object(n.jsx)("div",{className:"col-span1",children:Object(n.jsx)(o,{children:Object(n.jsx)("img",{src:"./figma/".concat(c),alt:""})})})]})},Fig:_.a,h1:function(e){return Object(n.jsx)("h1",J({className:"mt-32"},e))},h2:function(e){return Object(n.jsx)("h2",J({className:"mt-32"},e))},h3:function(e){return Object(n.jsx)("h3",J({className:"mt-32"},e))},h4:function(e){return Object(n.jsx)("h4",J({className:"mt-32"},e))},h5:function(e){return Object(n.jsx)("h5",J({className:"mt-32"},e))},h6:function(e){return Object(n.jsx)("h6",J({className:"mt-32"},e))},p:function(e){return Object(n.jsx)("p",J({className:"pb-16"},e))},ul:function(e){return Object(n.jsx)("ul",J({className:"pb-16 list-disc list-inside"},e))},ol:function(e){return Object(n.jsx)("ol",J({className:"pb-16 list-decimal list-inside"},e))},dl:function(e){return Object(n.jsx)("dl",J({className:"pb-16"},e))},li:function(e){return Object(n.jsx)("li",J({className:"pb-4"},e))},table:function(e){return Object(n.jsx)("table",J({className:"mb-16 p-0 w-full"},e))},tr:function(e){return Object(n.jsx)("tr",J({className:"border-t border-gray-300 bg-white m-0 p-0"},e))},th:function(e){return Object(n.jsx)("th",J({className:"border border-gray-300 bg-white m-0 py-6 px-14 text-left"},e))},td:function(e){return Object(n.jsx)("td",J({className:"border border-gray-300 bg-white m-0 py-6 px-14 text-left"},e))},pre:function(e){return Object(n.jsx)("pre",J({className:"pb-16"},e))},main:function(e){return Object(n.jsx)("main",J({className:"break-words"},e))},strong:function(e){return Object(n.jsx)("strong",J({className:"strong"},e))},hr:function(e){return Object(n.jsx)("hr",J({className:"border-none text-gray-300 h-4 p-0"},e))}};t.default=function(e){var t=e.Component,r=e.pageProps;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.a,{children:Object(n.jsx)("title",{children:"FINN Fabric"})}),Object(n.jsx)(a.a,{components:L,children:Object(n.jsxs)("div",{className:"grid h-screen",style:{gridTemplateColumns:"256px 1fr"},children:[Object(n.jsx)(A,{}),Object(n.jsxs)("div",{className:"grid justify-center p-40",style:{gridTemplateColumns:"minmax(auto, 900px)",gridTemplateRows:"1fr auto"},children:[Object(n.jsx)("main",{children:Object(n.jsx)(t,J({},r))}),Object(n.jsx)(V,{})]})]})})]})}},QdHu:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return l}));var n=r("nKUr"),c=r("rePB");r("q1tI");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return Object(n.jsx)("div",s(s({},e),{},{className:"my-16 max-w-max"}))}function l(e){var t,r,c=e.href;return c.includes("figma.com")&&(t="View in Figma",r=a),Object(n.jsxs)("a",{href:c,className:"border rounded-4 inline-flex items-center align-middle no-underline hover:no-underline text-gray-800",children:[Object(n.jsx)("div",{className:"w-48 h-48 p-8 border-r flex",children:Object(n.jsx)(r,{})}),Object(n.jsx)("div",{className:"px-16",children:t})]})}var a=function(){return Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 300",width:"32",height:"32",children:[Object(n.jsx)("path",{d:"M50 300a50 50 0 0050-50v-50H50a50 50 0 000 100z",fill:"#0acf83"}),Object(n.jsx)("path",{d:"M0 150a50 50 0 0150-50h50v100H50a50 50 0 01-50-50z",fill:"#a259ff"}),Object(n.jsx)("path",{d:"M0 50A50 50 0 0150 0h50v100H50A50 50 0 010 50z",fill:"#f24e1e"}),Object(n.jsx)("path",{d:"M100 0h50a50 50 0 010 100h-50V0z",fill:"#ff7262"}),Object(n.jsx)("path",{d:"M200 150a50 50 0 11-100 0 50 50 0 01100 0z",fill:"#1abcfe"})]})}},Ts5t:function(e,t,r){e.exports={good:"Good_good__3ZzUS"}},kmpA:function(e,t,r){e.exports={sidenav:"Nav_sidenav__8hPrr","is-selected":"Nav_is-selected__9M4EE",multilevel:"Nav_multilevel__zXIZe",sidenav__heading:"Nav_sidenav__heading__1HPjU"}},uOCT:function(e,t,r){e.exports={bad:"Bad_bad__2lzJF"}}},[[0,0,1,2,3]]]);