(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c3f5f06"],{"5c9c":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sign-in vh-100"},[e("Title",{attrs:{title:t.title}}),e("div",{staticClass:"container bg-white h-100"},[e("div",{staticClass:"d-flex h-100 justify-content-center align-items-center"},[e("div",{staticClass:"row rounded shadow"},[t._m(0),e("div",{staticClass:"col-12 col-md-6 p-3 d-flex flex-column justify-content-center align-items-center"},[e("img",{attrs:{src:a("cf55"),width:"100px",height:"90.28px",alt:""}}),e("h1",{staticClass:"text-success font-weight-bold tx-50"},[t._v("Sign Up")]),t.show?e("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[e("label",{staticClass:"pt-3 mb-0",attrs:{for:"email"}},[t._v("Email")]),e("div",{staticClass:"input-group input-group-sm border-bottom border-success"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control no-border",attrs:{id:"email",type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm",placeholder:"myemail@example.com"},domProps:{value:t.form.email},on:{input:function(s){s.target.composing||t.$set(t.form,"email",s.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text no-border bg-transparent",attrs:{id:"inputGroup-sizing-sm"}},[e("b-icon",{attrs:{icon:"envelope"}})],1)])]),e("label",{staticClass:"pt-3 mb-0",attrs:{for:"password"}},[t._v("Password")]),e("div",{staticClass:"input-group input-group-sm border-bottom border-success"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control no-border",attrs:{id:"password",type:"password","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm"},domProps:{value:t.form.password},on:{input:function(s){s.target.composing||t.$set(t.form,"password",s.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text no-border bg-transparent",attrs:{id:"inputGroup-sizing-sm"}},[e("b-icon",{attrs:{icon:"eye-slash"}})],1)])]),e("label",{staticClass:"pt-3 mb-0",attrs:{for:"nama"}},[t._v("Full Name")]),e("div",{staticClass:"input-group input-group-sm border-bottom border-success"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nama,expression:"form.nama"}],staticClass:"form-control no-border",attrs:{id:"nama",type:"text","aria-describedby":"inputGroup-sizing-sm"},domProps:{value:t.form.nama},on:{input:function(s){s.target.composing||t.$set(t.form,"nama",s.target.value)}}})]),e("b-button",{staticClass:"btn-block rounded-pill mt-2",attrs:{type:"submit",variant:"success"}},[t._v("Register")]),e("hr")],1):t._e(),e("p",{staticClass:"text-muted mb-0"},[t._v("Sudah punya akun? "),e("router-link",{staticClass:"text-muted",attrs:{to:"/sign-in"}},[t._v("login")])],1)],1),t._m(1)])])])],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-block d-md-none col-12 col-md-6 p-0"},[e("img",{staticClass:"img-fluid h-100 rounded-right",attrs:{src:a("987d"),alt:""}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-none d-md-block col-12 col-md-6 p-0"},[e("img",{staticClass:"img-fluid h-100 rounded-right",attrs:{src:a("987d"),alt:""}})])}],r=a("43b3"),o={name:"SignUp",components:{Title:r["a"]},data:function(){return{title:"Sign Up",form:{email:"",password:"",nama:""},show:!0}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(t){var s=this;t.preventDefault(),this.form.email="",this.form.pass="",this.form.nama="",this.show=!1,this.$nextTick((function(){s.show=!0}))}}},n=o,l=a("2877"),m=Object(l["a"])(n,e,i,!1,null,null,null);s["default"]=m.exports},"987d":function(t,s,a){t.exports=a.p+"img/batik2.39139441.png"}}]);