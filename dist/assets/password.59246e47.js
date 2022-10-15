import{h as x,o as _,c as n,i as b,u as C,B as m,t as d}from"./index.0d72f7fd.js";import{T as I}from"./Title.a581f7e6.js";import{I as h,N as B,s as l}from"./Notice.ddb6fb07.js";import{M as T,F as N}from"./FlexContainer.0351bcf7.js";import{C as $}from"./CheckBox.064fa3e2.js";import{b as k,r as w,c as y,I as M,B as S,n as A,a as g,l as D,h as P}from"./register.d3b59c50.js";const F=d("<h1>Choose a password!</h1>"),z=d("<br>"),H=d("<h3>Choose a <!> for your account!</h3>"),R=d('<input id="username-hidden" type="username" style="display: none;" value="TestUsername">');function q(v){let p=x(),r,u,a,i,c,f=()=>{a.children[0].children[0].value="",i.children[0].children[0].value="",c.value=""};return _(()=>{r=k(u,"password","password_confirm"),c.value=w.username,y(2,function(e){e&&g(p)})}),v.report(),[n(I,{children:"Sign Up"}),F.cloneNode(!0),z.cloneNode(!0),(()=>{const e=H.cloneNode(!0),t=e.firstChild,s=t.nextSibling;return s.nextSibling,b(e,n(T,{children:"secure password"}),s),e})(),n(N,{space:"around",style:{width:"400px"},get children(){return[(()=>{const e=R.cloneNode(!0),t=c;return typeof t=="function"?C(t,e):c=e,e})(),n(M,{get children(){return[n(h,{ref(e){const t=a;typeof t=="function"?t(e):a=e},id:"password",type:"password",label:"Password",autocomplete:"new-password",style:{width:"calc(100% - 8px)"}}),n(h,{ref(e){const t=i;typeof t=="function"?t(e):i=e},id:"password_confirm",type:"password",label:"Confirmation",autocomplete:"new-password",style:{width:"calc(100% - 8px)"}}),n($,{id:"showPassword",label:"Show password",style:{margin:"8px","margin-right":"auto"},checked:!1,onActive:function(){document.getElementById("password").type="text",document.getElementById("password_confirm").type="text"},onInactive:function(){document.getElementById("password").type="password",document.getElementById("password_confirm").type="password"}})]}}),n(B,{children:"The password must be at least 10 characters long, with a mix of letters and numbers! (Note that it's recommended to mix in a few special characters)"}),n(S,{get children(){return[n(m,{type:"action",function:function(){f(),setTimeout(function(){history.back()},1)},children:"Go back"}),n(m,{ref(e){const t=u;typeof t=="function"?t(e):u=e},type:"action",function:function(){A(u,function(e,t){let s=a.children[0].children[0],o=i.children[0].children[0];s.value.length<10||s.value.length>128?(l(a,!1,"Must be from 10 up to 128 characters long!"),o.value="",setTimeout(r,1),e()):!/[a-zA-Z]/.test(s.value)&&!/[0-9]/.test(s.value)?(l(a,!1,"Must contain letters and numbers!"),o.value="",setTimeout(r,1),e()):/[a-zA-Z]/.test(s.value)?/[0-9]/.test(s.value)?o.value!=s.value&&(l(i,!1,"Does not match the password!"),o.value="",setTimeout(r,1),o.focus(),e()):(l(a,!1,"Must contain at least one number!"),o.value="",setTimeout(r,1),e()):(l(a,!1,"Must contain at least one letter!"),o.value="",setTimeout(r,1),e()),D(function(){t()})},function(){w.passwordHash=P(a.children[0].children[0].value),y(3,function(e){e?(f(),setTimeout(function(){g(p)},1)):p("/user/register/personal")})})},primary:!0,children:"Next"})]}})]}})]}export{q as default};
