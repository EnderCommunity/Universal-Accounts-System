import{c as e,i as l,t as r}from"./index.d8ac6cc3.js";import{T as c}from"./Title.a581f7e6.js";import{M as u,F as o,B as i}from"./FlexContainer.fd3ad648.js";import{I as p}from"./Input.d79f79ca.js";import{N as m}from"./Notice.77fcd435.js";const h=r("<h1>Choose a username!</h1>"),d=r("<br>"),f=r("<h3>Choose your own <!>!</h3>");function N(a){return a.report(),[e(c,{children:"Sign Up"}),h.cloneNode(!0),d.cloneNode(!0),(()=>{const t=f.cloneNode(!0),s=t.firstChild,n=s.nextSibling;return n.nextSibling,l(t,e(u,{children:"username"}),n),t})(),e(o,{space:"around",style:{width:"400px"},get children(){return[e(p,{id:"username",type:"text",label:"Username",autocomplete:"off",style:{width:"calc(100% - 8px)"}}),e(m,{children:"Your username is public, make sure it does not contain any sensitive or personal information!"}),e(o,{space:"between",horozontal:!0,"no-grow":!0,get children(){return[e(i,{type:"action",function:function(){history.back()},children:"Go back"}),e(i,{type:"link",href:"/user/register/password",primary:!0,children:"Next"})]}})]}})]}export{N as default};
