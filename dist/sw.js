if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>i(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.a5f1d9d1.js",revision:null},{url:"assets/agreement.5c7257bd.css",revision:null},{url:"assets/agreement.fd59d856.js",revision:null},{url:"assets/challenge.f573f764.js",revision:null},{url:"assets/challenge.f5bbd37a.css",revision:null},{url:"assets/CheckBox.e29085bf.js",revision:null},{url:"assets/CustomElements.2d742e2b.js",revision:null},{url:"assets/FlexContainer.bd502b48.js",revision:null},{url:"assets/home.8acd0615.js",revision:null},{url:"assets/index.1b8e8d25.css",revision:null},{url:"assets/index.7d913f48.js",revision:null},{url:"assets/login.6f681aac.js",revision:null},{url:"assets/new.e3b0c442.css",revision:null},{url:"assets/new.ee695226.js",revision:null},{url:"assets/Notice.ec895466.js",revision:null},{url:"assets/password.0ce32050.js",revision:null},{url:"assets/password.4625e7c7.js",revision:null},{url:"assets/personal.a740d2d3.js",revision:null},{url:"assets/quick-settings.33d828ec.css",revision:null},{url:"assets/quick-settings.cb295507.js",revision:null},{url:"assets/register.774f2f98.css",revision:null},{url:"assets/register.c09b45c5.js",revision:null},{url:"assets/review.ca6edc5a.js",revision:null},{url:"assets/review.e3f871fe.css",revision:null},{url:"assets/security-questions.a7a7a46a.js",revision:null},{url:"assets/securityQuestions.ddbd3dfd.js",revision:null},{url:"assets/Select.c7665ddf.js",revision:null},{url:"assets/Title.a581f7e6.js",revision:null},{url:"assets/username.eb0e562d.js",revision:null},{url:"index.html",revision:"d8e297cbac38cbe32b5a709dd4f632ea"},{url:"libraries/aes.js",revision:"4ff108e4584780dce15d610c142c3e62"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon-192.png",revision:"4104946a7f751ac60c0304d123063543"},{url:"images/icon-512.png",revision:"092f201c00b035dd97ff5a2c00d95c22"},{url:"manifest.webmanifest",revision:"d86b82704be066635a39f3dffc6757f9"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
