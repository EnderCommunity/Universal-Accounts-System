import{o as u,c as t,i as c,t as o}from"./index.95aa3f5c.js";import{T as m}from"./Title.a581f7e6.js";import{M as p,F as a,B as s}from"./FlexContainer.a1c5d69a.js";import{I as d,N as h}from"./Notice.b6f5087f.js";import{InputFieldsContainer as f}from"./register.1faac0c6.js";const g=o("<h1>Choose a username!</h1>"),b=o("<br>"),y=o("<h3>Choose your own <!>!</h3>");function N(l){let r;return u(()=>{let e=document.getElementById("username"),n=()=>{e.value.length<3||e.value.length>32?r.setAttribute("disabled",""):r.removeAttribute("disabled")};n(),e.oninput=n}),l.report(),[t(m,{children:"Sign Up"}),g.cloneNode(!0),b.cloneNode(!0),(()=>{const e=y.cloneNode(!0),n=e.firstChild,i=n.nextSibling;return i.nextSibling,c(e,t(p,{children:"username"}),i),e})(),t(a,{space:"around",style:{width:"400px"},get children(){return[t(f,{get children(){return t(d,{id:"username",type:"text",label:"Username",autocomplete:"off",style:{width:"calc(100% - 8px)"},maxlength:32})}}),t(h,{children:"Your username is public, make sure it does not contain any sensitive or personal information!"}),t(a,{space:"between",horozontal:!0,"no-grow":!0,get children(){return[t(s,{type:"action",function:function(){history.back()},children:"Go back"}),t(s,{ref(e){const n=r;typeof n=="function"?n(e):r=e},type:"link",href:"/user/register/password",primary:!0,children:"Next"})]}})]}})]}export{N as default};
