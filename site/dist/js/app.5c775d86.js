(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),s=r.n(n);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),s=r("ce5b"),a=r.n(s),o=(r("bf40"),r("b20f"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-toolbar",{attrs:{color:"primary",dark:"",extended:"",flat:""}}),r("v-layout",{attrs:{row:"","pb-2":""}},[r("v-flex",{attrs:{xs8:"","offset-xs2":""}},[r("v-card",{staticClass:"card--flex-toolbar"},[r("v-toolbar",{attrs:{card:"",prominent:""}},[r("v-toolbar-title",{staticClass:"body-2 grey--text"},[t._v("Shadowsocks Setting Editor")]),r("v-spacer"),r("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",{attrs:{icon:""},on:{click:t.restart}},[r("v-icon",[t._v("autorenew")])],1),r("v-btn",t._g({attrs:{icon:""}},n),[r("v-icon",[t._v("add")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),r("v-card-text",[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{attrs:{label:"Port"},model:{value:t.editedUser.port,callback:function(e){t.$set(t.editedUser,"port",e)},expression:"editedUser.port"}})],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{attrs:{label:"Password"},model:{value:t.editedUser.password,callback:function(e){t.$set(t.editedUser,"password",e)},expression:"editedUser.password"}})],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v("Cancel")]),r("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1),r("v-divider"),r("v-card-text",[r("v-data-table",{attrs:{headers:t.headers,items:t.users,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.port))]),r("td",[t._v(t._s(e.item.password))]),r("td",{staticClass:"layout justify-end align-center"},[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(r){return t.editUser(e.item)}}},[t._v("edit")]),r("v-icon",{attrs:{small:""},on:{click:function(r){return t.deleteUser(e.item)}}},[t._v("delete")])],1)]}}])})],1)],1)],1),r("v-snackbar",{attrs:{timeout:3e3,color:t.snackColor},model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n        "+t._s(t.snackText)+"\n        "),r("v-btn",{attrs:{flat:""},on:{click:function(e){t.snack=!1}}},[t._v("Close")])],1)],1)],1)}),i=[],c=r("cebc"),l=r("795b"),u=r.n(l),d=r("bc3a"),f=r.n(d);f.a.defaults.timeout=15e3,f.a.defaults.baseURL="http://localhost:7070",f.a.interceptors.response.use(function(t){return t},function(t){return console.log(t.response),u.a.reject(t.response)});var p=function(){return f.a.get("/api/users")},v=function(t){return f.a.post("/api/users",t)},h=function(t,e){return f.a.put("/api/users/".concat(t),e)},b=function(t){return f.a.delete("/api/users/".concat(t))},x=function(t){return f.a.post("/api/call/".concat(t))},k={name:"app",data:function(){return{dialog:!1,snack:!1,snackColor:"",snackText:"",editedIndex:-1,editedUser:{port:"",password:""},defaultUser:{port:"",password:""},headers:[{text:"Port",value:"port"},{text:"Password",value:"password",sortable:!1},{text:"Actions",value:"port",align:"right",sortable:!1}],users:[]}},created:function(){this.fetchData()},computed:{formTitle:function(){return-1===this.editedIndex?"New User":"Edit User"}},watch:{dialog:function(t){t||this.close()}},methods:{fetchData:function(){var t=this;p().then(function(e){var r=e.data;t.users=r})},editUser:function(t){this.editedIndex=this.users.indexOf(t),this.editedUser=Object(c["a"])({},t),this.dialog=!0},deleteUser:function(t){var e=this,r=this.users.indexOf(t);confirm("Are you sure you want to delete this user?")&&b(this.users[r].port).then(function(){e.snack=!0,e.snackColor="success",e.snackText="User deleted",e.fetchData()})},save:function(){var t=this,e=this.editedIndex,r=e>-1?h(this.users[e].port,this.editedUser):v(this.editedUser);r.then(function(){t.fetchData(),t.close(),t.snack=!0,t.snackColor="success",t.snackText="User saved"})},close:function(){this.dialog=!1,this.editedUser=Object(c["a"])({},this.defaultUser),this.editedIndex=-1},restart:function(){var t=this;x("restart-ssr").then(function(){t.snack=!0,t.snackColor="success",t.snackText="Restarted"}).catch(function(e){t.snack=!0,t.snackColor="error",t.snackText=e.data.msg})}}},m=k,g=(r("034f"),r("2877")),w=Object(g["a"])(m,o,i,!1,null,null,null),_=w.exports;n["default"].use(a.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(_)}}).$mount("#app")},"64a9":function(t,e,r){},b20f:function(t,e,r){}});
//# sourceMappingURL=app.5c775d86.js.map