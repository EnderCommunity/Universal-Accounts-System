import{p,a as d,f as v,b as f,i as u,s as _,t as c,c as o}from"./index.39844bcf.js";import{T as x}from"./Title.a581f7e6.js";import{g as m,M as g,F as y,B as w}from"./FlexContainer.3666a6b6.js";import{I as k}from"./Input.b354f066.js";const b=c('<input type="checkbox">'),B=c("<div><label></label></div>");function I(e){let s=p(e,m.checkBoxContainer),a=(()=>{const t=b.cloneNode(!0);return d(r=>{const n=e.id,i=m.checkBox;return n!==r._v$&&v(t,"id",r._v$=n),i!==r._v$2&&f(t,r._v$2=i),r},{_v$:void 0,_v$2:void 0}),d(()=>t.checked=e.checked),t})();if(typeof e.id!="string")throw new Error("<CheckBox> must always have an ID!");if(typeof e.onInactive!="function"||typeof e.onActive!="function")throw new Error("<CheckBox> must have 'active' and 'inactive' functions!");let l=(()=>{const t=B.cloneNode(!0),r=t.firstChild;return u(t,a,r),u(r,()=>e.label),d(n=>{const i=s.class,$=s.style,h=e.id;return i!==n._v$3&&f(t,n._v$3=i),n._v$4=_(t,$,n._v$4),h!==n._v$5&&v(r,"for",n._v$5=h),n},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),t})();return a.checked,a.addEventListener("change",function(){a.checked?e.onActive():e.onInactive()}),l}const N=c("<h1>Welcome back, [FirstName]!</h1>"),C=c("<br>"),E=c("<h3>Please enter <!> to verify your identity!</h3>"),P=c('<input type="username" style="display: none;" value="TestUsername">');function M(e){return e.report(),[o(x,{children:"Sign In"}),N.cloneNode(!0),C.cloneNode(!0),(()=>{const s=E.cloneNode(!0),a=s.firstChild,l=a.nextSibling;return l.nextSibling,u(s,o(g,{children:"your password"}),l),s})(),o(y,{space:"around",style:{width:"400px"},get children(){return[P.cloneNode(!0),o(k,{id:"password",type:"password",label:"Password",autocomplete:"current-password",get hint(){return o(I,{id:"showPassword",label:"Show password",style:{margin:"12px 0px 0px 0px"},checked:!1,onActive:function(){document.getElementById("password").type="text"},onInactive:function(){document.getElementById("password").type="password"}})},style:{width:"100%"}}),o(y,{space:"between",horozontal:!0,"no-grow":!0,get children(){return[o(w,{type:"link",href:"/user/recovery/password",children:"Forgot password?"}),o(w,{type:"link",href:"/user/challenge",primary:!0,children:"Next"})]}})]}})]}export{M as default};