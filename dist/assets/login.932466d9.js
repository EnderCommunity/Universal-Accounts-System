import{i as u,e as m,b as h,s as g,t as l,c as e}from"./index.d221a296.js";import{T as f}from"./Title.a581f7e6.js";import{L as p}from"./Link.dd3d01d5.js";import{g as y,M as $,F as a,B as c}from"./FlexContainer.45c9dc51.js";import{I as v}from"./Input.90acf271.js";const _=l("<div><text></text></div>");function x(r){let n=r.style?r.style:{};return(()=>{const t=_.cloneNode(!0),i=t.firstChild;return u(i,()=>r.children),m(o=>{const s=y.notice,d=n;return s!==o._v$&&h(t,o._v$=s),o._v$2=g(t,d,o._v$2),o},{_v$:void 0,_v$2:void 0}),t})()}const N=l("<h1>Sign in</h1>"),b=l("<br>"),w=l("<h3>Use your <!> securely!</h3>");function L(r){return r.report(),[e(f,{children:"Sign In"}),N.cloneNode(!0),b.cloneNode(!0),(()=>{const n=w.cloneNode(!0),t=n.firstChild,i=t.nextSibling;return i.nextSibling,u(n,e($,{children:"Ciel account"}),i),n})(),e(a,{space:"around",style:{width:"460px"},get children(){return[e(v,{id:"username",type:"text",label:"Username",autocomplete:"username",get hint(){return e(p,{href:"/login/recovery/username",children:"Forgot username?"})},style:{width:"100%"}}),e(x,{children:"Not using your own device? Use Guest mode or Incognito mode to sign in privately."}),e(a,{space:"between",horozontal:!0,"no-grow":!0,get children(){return[e(c,{type:"link",href:"/user/register",children:"Create account"}),e(c,{type:"link",href:"/user/login/password",primary:!0,children:"Next"})]}})]}})]}export{L as default};
