(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3454:function(e,t,n){"use strict";var r,s;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(s=n.g.process)?void 0:s.env)?n.g.process:n(7663)},8367:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(9083)}])},5100:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),s=n(9008),a=n.n(s);function i(){return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Daniel Won | Portfolio"}),(0,r.jsx)("link",{rel:"icon",href:"/DWLOGO.svg"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]})}},8019:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),s=n(9202),a=n.n(s),i=n(1163);n(7294);function o(e){var t=function(){var e=document.getElementById(a().sidebar),t=document.getElementById(a().menuicon),n=t.children[0],r=t.children[1],s=t.children[2];o?(e.style.transform="translateX(100vw)",e.style.opacity="1",n.style.transform="rotate(0deg)",s.style.transform="rotate(0deg)",r.style.opacity="1",o=!1):(e.style.transform="translateX(0vw)",e.style.opacity="1",n.style.transform="rotate(-45deg)",s.style.transform="rotate(45deg)",r.style.opacity="0",o=!0)},n=(0,i.useRouter)(),s=function(){return(0,r.jsx)("div",{className:a().menuiconbar})},o=!1,c=function(){return(0,r.jsxs)("a",{id:a().menuicon,onClick:t,children:[(0,r.jsx)(s,{id:a().bar1}),(0,r.jsx)(s,{id:a().bar1}),(0,r.jsx)(s,{id:a().bar1})]})},l=function(e){switch(e.tabNum){case 0:return(0,r.jsx)("a",{className:e.style,onClick:function(){return n.push("/")},children:" HOME "});case 1:return(0,r.jsx)("a",{className:e.style,onClick:function(){return n.push("/projects")},children:" PORTFOLIO "});case 2:return(0,r.jsx)("div",{className:e.style,onClick:function(){return n.push("/about")},children:" ABOUT "});default:return(0,r.jsx)("div",{className:e.style,onClick:function(){return n.push("/contact")},children:" CONTACT "})}},u=function(){return(0,r.jsxs)("div",{id:a().sidebar,children:[(0,r.jsx)(l,{tabNum:0,style:a().menuitemmobile}),(0,r.jsx)(l,{tabNum:1,style:a().menuitemmobile}),(0,r.jsx)(l,{tabNum:2,style:a().menuitemmobile}),(0,r.jsx)(l,{tabNum:3,style:a().menuitemmobile})]})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:1==e.isHome?a().navbarstart:a().navbar,children:[(0,r.jsx)("div",{className:a().navMask}),(0,r.jsx)(l,{tabNum:0,style:a().menuitem}),(0,r.jsx)(l,{tabNum:1,style:a().menuitem}),(0,r.jsx)("div",{className:a().logo,onClick:function(){return n.push("/")}}),(0,r.jsx)(l,{tabNum:2,style:a().menuitem}),(0,r.jsx)(l,{tabNum:3,style:a().menuitem}),(0,r.jsx)(c,{})]}),(0,r.jsx)(u,{})]})}},9083:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),s=n(8019),a=n(5100),i=n(4924),o=n(6042);function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}const l={_origin:"https://api.emailjs.com"},u=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class m{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const d=(e,t,n={})=>new Promise(((r,s)=>{const a=new XMLHttpRequest;a.addEventListener("load",(({target:e})=>{const t=new m(e);200===t.status||"OK"===t.text?r(t):s(t)})),a.addEventListener("error",(({target:e})=>{s(new m(e))})),a.open("POST",l._origin+e,!0),Object.keys(n).forEach((e=>{a.setRequestHeader(e,n[e])})),a.send(t)}));var f=(e,t,n,r)=>{const s=r||l._userID;u(s,e,t);const a={lib_version:"3.11.0",user_id:s,service_id:e,template_id:t,template_params:n};return d("/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})},h=n(7294),p=n(3854),v=n(3454);function b(e){var t=(0,h.useRef)(),n=(0,h.useState)({name:"",email:"",subject:"",message:""}),s=n[0],a=n[1],l=function(e){a(c((0,o.Z)({},s),(0,i.Z)({},e.target.name,e.target.value)))},u=function(e){e.preventDefault();var t=!0,n=""!==s.email&&s.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);if(0!==s.name.length&&n&&0!==s.subject.length&&0!==s.message.length||(t=!1),console.log(n),t){var r=document.querySelector("button");r.classList.remove("enabled"),r.textContent="SENDING";var a=document.createElement("div");a.classList.add("loading-dot"),a.textContent=".",a.style.animationDelay="0s";var i=document.createElement("div");i.classList.add("loading-dot"),i.textContent=".",i.style.animationDelay="0.25s";var o=document.createElement("div");o.classList.add("loading-dot"),o.textContent=".",o.style.animationDelay="0.5s",r.appendChild(a),r.appendChild(i),r.appendChild(o),m()}else{var c="Failed to send message. Here's why:\n";c+=0===s.name.length?"\u2022 Name is invalid.\n":"",c+=n?"":"\u2022 Email is invalid.\n",c+=0===s.subject.length?"\u2022 Subject is empty.\n":"",c+=0===s.message.length?"\u2022 Message is empty.\n":"",alert(c)}},m=function(){var e=v.env.NEXT_PUBLIC_SERVICE_ID,t=v.env.NEXT_PUBLIC_TEMPLATE_ID,n=v.env.NEXT_PUBLIC_PUBLIC_ID,r={from_name:s.name+" - "+s.email,to_name:"You",message:"Subject: "+s.subject+" - \n"+s.message};f(e,t,r,n).then((function(e){for(var t=document.querySelector("form").elements,n=0;n<t.length;n++)t[n].readOnly=!0,t[n].style="cursor:default";var r=document.querySelector("button");r.style="background-color: #D45168",r.textContent="SENT",document.querySelectorAll("loading-dot").forEach((function(e){return r.removeChild(e)}))}),(function(e){alert("Failed to send message. Here's why: ",e);var t=document.querySelector("button");t.classList.add("enabled"),t.textContent=" SEND"}))};return(0,r.jsxs)("form",{ref:t,style:{display:"flex",flexDirection:"column"},onSubmit:u,children:[(0,r.jsx)("input",{onChange:l,type:"text",placeholder:"Name",name:"name",required:!0}),(0,r.jsx)("input",{onChange:l,type:"text",placeholder:"Email",name:"email",required:!0}),(0,r.jsx)("input",{onChange:l,type:"text",placeholder:"Subject",name:"subject",required:!0}),(0,r.jsx)("textarea",{onChange:l,placeholder:"Message",name:"message",required:!0}),(0,r.jsxs)("button",{onClick:u,className:"submit enabled",type:"submit",children:[(0,r.jsx)(p.hBs,{size:30}),"\xa0SEND"]})]})}var y=n(3750);function x(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(s.Z,{}),(0,r.jsx)("div",{id:"contactpage",className:"page",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h1",{children:"CONTACT"}),(0,r.jsx)("p",{children:"Feel free to message me if you want to chat!"}),(0,r.jsx)(b,{}),(0,r.jsxs)("p",{style:{transform:"translateY(30px)"},children:["...or connect with me on ",(0,r.jsx)("strong",{children:"LinkedIn"}),"!"]}),(0,r.jsx)("div",{className:"boxcontainer",children:(0,r.jsxs)("a",{href:"https://www.linkedin.com/in/danielw23/",target:"_blank",className:"contactbox",id:"linkedin",children:[(0,r.jsx)(y.NQh,{size:40}),"LINKEDIN"]})})]})})]})}},9202:function(e){e.exports={navbar:"navbar_navbar__jP4A8",navbarstart:"navbar_navbarstart__hxZf6",start:"navbar_start__XL3sh",navMask:"navbar_navMask__k4IU3",menuitem:"navbar_menuitem__bNiit",logo:"navbar_logo__rxU3h",menuiconbar:"navbar_menuiconbar__tbTQN",menuicon:"navbar_menuicon___z3ka",sidebar:"navbar_sidebar__wXcUw",menuitemmobile:"navbar_menuitemmobile__5hYF2"}},7663:function(e){!function(){var t={229:function(e){var t,n,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var o,c=[],l=!1,u=-1;function m(){l&&o&&(l=!1,o.length?c=o.concat(c):u=-1,c.length&&d())}function d(){if(!l){var e=i(m);l=!0;for(var t=c.length;t;){for(o=c,c=[];++u<t;)o&&o[u].run();u=-1,t=c.length}o=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||l||i(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var s=n[e];if(void 0!==s)return s.exports;var a=n[e]={exports:{}},i=!0;try{t[e](a,a.exports,r),i=!1}finally{i&&delete n[e]}return a.exports}r.ab="//";var s=r(229);e.exports=s}()},9008:function(e,t,n){e.exports=n(5443)},1163:function(e,t,n){e.exports=n(387)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var r=n(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(s),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},i.apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return r.createElement(u,i({attr:i({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,s=e.attr,a=e.size,c=e.title,l=o(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,l,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(s)}}},function(e){e.O(0,[13,556,774,888,179],(function(){return t=8367,e(e.s=t);var t}));var t=e.O();_N_E=t}]);