import{i as a,e as h,b as l,s as F,f as v,t as b}from"./index.3110842e.js";import{g as d}from"./FlexContainer.a0f7bced.js";const x=b("<div></div>"),C=b('<div><div><input placeholder=" "><label></label></div></div>');function D(t){let w=t.style!=null?t.style:{},I=t.hint!=null?(()=>{const n=x.cloneNode(!0);return a(n,()=>t.hint),h(()=>l(n,`${d.inputFieldHint} text`)),n})():"";if(typeof t.id!="string")throw new Error("Input must always have an ID!");if(typeof t.label!="string")throw new Error("Input must always have a label!");if(t.type=="text"||t.type=="url"||t.type=="tel"||t.type=="password"||t.type=="number")return(()=>{const n=C.cloneNode(!0),r=n.firstChild,i=r.firstChild,u=i.nextSibling;return a(u,()=>t.label),a(n,I,null),h(e=>{const f=d.inputFieldContainer,g=w,$=d.inputFieldDataContainer,_=t.id,s=t.type,o=t.autocomplete?t.autocomplete:"off",y=d.inputField,c=d.inputFieldLabel,m=t.id;return f!==e._v$&&l(n,e._v$=f),e._v$2=F(n,g,e._v$2),$!==e._v$3&&l(r,e._v$3=$),_!==e._v$4&&v(i,"id",e._v$4=_),s!==e._v$5&&v(i,"type",e._v$5=s),o!==e._v$6&&v(i,"autocomplete",e._v$6=o),y!==e._v$7&&l(i,e._v$7=y),c!==e._v$8&&l(u,e._v$8=c),m!==e._v$9&&v(u,"for",e._v$9=m),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),n})();throw new Error("Unsupported <Input> type!")}export{D as I};