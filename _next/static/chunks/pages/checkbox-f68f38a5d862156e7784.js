_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n("q1tI"),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=o,h=u["".concat(i,".").concat(p)]||u[p]||d[p]||a;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"===typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return o}))},Qetd:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},RmeJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkbox",function(){return n("yMkS")}])},rePB:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},yMkS:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var o=n("Ff2n"),r=n("rePB"),a=(n("q1tI"),n("7ljp"));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",c({},t))}},l=s("TableOfContents"),b=s("Guideline"),u={};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",c(c(c({},u),n),{},{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",c({},{id:"checkbox"}),"Checkbox"),Object(a.b)("p",null,"Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected."),Object(a.b)(l,{mdxType:"TableOfContents"}),Object(a.b)("h2",c({},{id:"anatomy"}),"Anatomy"),Object(a.b)("p",null,"(Image coming soon)"),Object(a.b)("h2",c({},{id:"options"}),"Options"),Object(a.b)(b,{title:"Label",mdxType:"Guideline"},"Checkboxes should always have a label. When the label is not defined, a checkbox becomes standalone. Standalone checkboxes are only used when their connection to other components is clear and they give sufficient context \u2014 for example, in application panels."),Object(a.b)(b,{title:"Disabled",mdxType:"Guideline"},"A checkbox in a disabled state shows that a selection exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that an action may become available later."),Object(a.b)(b,{title:"Error",mdxType:"Guideline"},"Checkboxes can be marked as having an error to show that a selection needs to be made in order to move forward, or that a selection that was made is invalid. For example, in a form that requires a user to acknowledge legal terms before proceeding, the checkbox would show an unchecked error to communicate that it needs to be selected."),Object(a.b)(b,{title:"Read only",mdxType:"Guideline"},"Checkboxes have a read-only option for when they\u2019re in the disabled state but still need their labels to be shown. This allows for content to be copied, but not interacted with or changed."),Object(a.b)("h2",c({},{id:"behaviors"}),"Behaviors"),Object(a.b)(b,{title:"Keyboard focus",mdxType:"Guideline"},"A checkbox can be navigated using a keyboard. The keyboard focus state takes the checkbox\u2019s visual hover state and adds a blue ring to the checkbox in focus."),Object(a.b)(b,{title:"Text overflow",mdxType:"Guideline"},"When the label is too long for the horizontal space available, it wraps to form another line."),Object(a.b)(b,{title:"Mixed value",mdxType:"Guideline"},"When a checkbox presents multiple values that are not identical, the checkbox should appear as indeterminate. Any subsequent click or tap should select the checkbox, and update all values."),Object(a.b)("h2",c({},{id:"usage-guidelines"}),"Usage guidelines"),Object(a.b)(b,{title:"When to use a standalone checkbox",mdxType:"Guideline"},"Standalone checkboxes should be used in situations where the context is clear without an associated text label. For example, a checkbox connected to other controls inside a panel."),Object(a.b)(b,{title:"Checkbox or radio button?",mdxType:"Guideline"},"Checkboxes and radio buttons are not interchangeable. A set of checkboxes should be used to select as many options as desired (or none). A set of radio buttons should be used to select only a single option from a list of mutually exclusive options."),Object(a.b)(b,{title:"Checkbox or switch?",mdxType:"Guideline"},"Checkboxes are best used for communicating selection (e.g., multiple table rows) while switches are best used for communicating activation (e.g., on/off states). Checkboxes, unlike switches, can have an error state."),Object(a.b)(b,{title:"Label groups of related checkboxes",mdxType:"Guideline"},"Sets of checkboxes should always have a clear label that describes what the list of options represents and guides users what to do. This is important for accessibility, since a screen reader will read the label before each option."))}d.isMDXComponent=!0}},[["RmeJ",0,1]]]);