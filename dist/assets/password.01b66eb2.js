import{o as d,c as t,i as p,t as o}from"./index.95aa3f5c.js";import{T as u}from"./Title.a581f7e6.js";import{M as c,F as l,B as a}from"./FlexContainer.a1c5d69a.js";import{I as m}from"./Notice.b6f5087f.js";import{C as h}from"./CheckBox.b94e5b73.js";import{InputFieldsContainer as w}from"./login.8a7fbfd8.js";import"./Link.e3a50400.js";const y=o("<h1>Welcome back, [FirstName]!</h1>"),f=o("<br>"),g=o("<h3>Please enter <!> to verify your identity!</h3>"),x=o('<input id="username-hidden" type="username" style="display: none;" value="TestUsername">');function C(i){let n;return d(()=>{let e=document.getElementById("password"),r=()=>{e.value.length<8||e.value.length>96?n.setAttribute("disabled",""):n.removeAttribute("disabled")};r(),e.oninput=r}),i.report(),[t(u,{children:"Sign In"}),y.cloneNode(!0),f.cloneNode(!0),(()=>{const e=g.cloneNode(!0),r=e.firstChild,s=r.nextSibling;return s.nextSibling,p(e,t(c,{children:"your password"}),s),e})(),t(l,{space:"around",style:{width:"400px"},get children(){return[x.cloneNode(!0),t(w,{get children(){return t(m,{id:"password",type:"password",label:"Password",autocomplete:"current-password",get hint(){return t(h,{id:"showPassword",label:"Show password",style:{margin:"12px 0px 0px 0px"},checked:!1,onActive:function(){document.getElementById("password").type="text"},onInactive:function(){document.getElementById("password").type="password"}})},style:{width:"calc(100% - 8px)"}})}}),t(l,{space:"between",horozontal:!0,"no-grow":!0,get children(){return[t(a,{type:"link",href:"/user/recovery/password",children:"Forgot password?"}),t(a,{ref(e){const r=n;typeof r=="function"?r(e):n=e},type:"link",href:"/user/challenge",primary:!0,children:"Next"})]}})]}})]}export{C as default};
