(function(t){function e(e){for(var r,i,a=e[0],u=e[1],c=e[2],f=0,p=[];f<a.length;f++)i=a[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Hosts")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"form"},[n("p",[n("label",{attrs:{for:"sff"}},[t._v("hosts文件路径")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.hostsPath,expression:"hostsPath"}],attrs:{type:"text",id:"sff"},domProps:{value:t.hostsPath},on:{input:function(e){e.target.composing||(t.hostsPath=e.target.value)}}})]),n("p",[n("label",{attrs:{for:"sff1"}},[t._v("ip")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ip,expression:"ip"}],attrs:{type:"text",id:"sff1"},domProps:{value:t.ip},on:{input:function(e){e.target.composing||(t.ip=e.target.value)}}})]),n("p",[n("label",{attrs:{for:"sff2"}},[t._v("host")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.host,expression:"host"}],attrs:{type:"text",id:"sff2"},domProps:{value:t.host},on:{input:function(e){e.target.composing||(t.host=e.target.value)}}})]),n("p",[n("button",{on:{click:function(e){return t.save("set")}}},[t._v("设置")]),n("button",{on:{click:function(e){return t.save("remove")}}},[t._v("删除")])])]),n("ul",t._l(t.hosts,function(e,r){return n("li",{key:r},[t._v(t._s(e))])}),0),t.error?n("div",{staticClass:"error",on:{click:function(e){t.error=""}}},[n("p",[t._v(t._s(t.error))]),n("p",[t._v(t._s(t.msg))])]):t._e()])},a=[],u={data:function(){return{hostsPath:localStorage.getItem("hostsPath")||"/etc/hosts",ip:"127.0.0.1",host:"localhost",hosts:[],msg:"",error:""}},mounted:function(){this.list()},methods:{save:function(t){var e=this;this.request(t,["hostsPath","ip","host"]).then(function(){e.list()})},getParams:function(t){var e=this;return t.map(function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))}).join("&")},list:function(){var t=this;return this.request("list",["hostsPath"]).then(function(e){t.hosts=e})},request:function(t,e){var n=this;return fetch("/hosts/".concat(t,"?").concat(this.getParams(e)),{mode:"cors"}).then(function(t){return t.json()}).then(function(t){return t.code?Promise.reject(t):t.data}).catch(function(t){t instanceof Error?n.error=t:(n.error=t.msg,n.msg=t.error)})}}},c=u,l=(n("7546"),n("2877")),f=Object(l["a"])(c,i,a,!1,null,"9954806a",null),p=f.exports,h={name:"app",components:{Hosts:p}},d=h,v=Object(l["a"])(d,o,s,!1,null,null,null),m=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(m)}}).$mount("#app")},7546:function(t,e,n){"use strict";var r=n("865d"),o=n.n(r);o.a},"865d":function(t,e,n){}});
//# sourceMappingURL=app.8791c6fa.js.map