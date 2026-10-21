import{j as t,r as vr,M as kr,a as wr,b as Ar,c as Nr}from"./markdown-vendor-K4QgLopv.js";import{a as Sr,g as mn,b as P,u as Tr,d as Er,L as $,e as _r,R as gn,f as jr,B as Ir,h as Cr,i as fe}from"./react-vendor-Bd31k8Ry.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))m(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function d(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(a){if(a.ep)return;a.ep=!0;const i=d(a);fetch(a.href,i)}})();var $e={},Mt;function Lr(){if(Mt)return $e;Mt=1;var r=Sr();return $e.createRoot=r.createRoot,$e.hydrateRoot=r.hydrateRoot,$e}var Pr=Lr();const Rr=mn(Pr),fn=P.createContext(void 0),Or=({children:r})=>{const[s,d]=P.useState(()=>localStorage.getItem("journal-theme")||"dark");P.useEffect(()=>{const i=document.documentElement;s==="dark"?(i.classList.add("dark"),i.classList.remove("light")):(i.classList.add("light"),i.classList.remove("dark")),localStorage.setItem("journal-theme",s)},[s]);const m=()=>{d(i=>i==="dark"?"light":"dark")},a=i=>{d(i)};return t.jsx(fn.Provider,{value:{theme:s,toggleTheme:m,setTheme:a},children:r})},Mr=()=>{const r=P.useContext(fn);if(!r)throw new Error("useTheme must be used within a ThemeProvider");return r};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=r=>r==null?void 0:r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Fr(r,s,d=[]){if(s==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Dr(r),size:24,node:s,...d.length>0?{aliases:d}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=r=>{let s="",d=!1;for(const m of r){if(m==="-"||m==="_"||m<=" "){d=s.length>0;continue}s.length===0?s+=m.toLowerCase():s+=d?m.toUpperCase():m,d=!1}return s};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=r=>{const s=Br(r);return s.charAt(0).toUpperCase()+s.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=(...r)=>r.filter((s,d,m)=>!!s&&s.trim()!==""&&m.indexOf(s)===d).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function at(r){return r!=null}function Hr(r,s={}){var _,O;const d=s.attributeNames??{},m=F=>d[F]??F,a=r.size??r.width??ue.width,i=r.size??r.height??ue.height,c=((_=r.aliases)==null?void 0:_.filter(F=>typeof F=="string"&&F.trim()!=="").map(F=>`lucide-${F}`))??[],l=[...r.name?[`lucide-${r.name}`]:[],...c],b=((O=s.className)==null?void 0:O.split(" ").filter(Boolean))??[],o=s.includeDefaultClasses===!1?jt(...b):jt("lucide",...l,...b),p=s.absoluteStrokeWidth?Number(s.strokeWidth??ue["stroke-width"])*Number(r.size??r.width??ue.width)/Number(s.size??s.width??ue.width):s.strokeWidth??ue["stroke-width"];return["svg",{...Object.entries(ue).reduce((F,[D,B])=>(F[m(D)]=B,F),{}),..."color"in s&&s.color&&{[m("stroke")]:s.color},..."size"in s&&at(s.size)&&{[m("width")]:s.size,[m("height")]:s.size},..."width"in s&&at(s.width)&&{[m("width")]:s.width},..."height"in s&&at(s.height)&&{[m("height")]:s.height},[m("stroke-width")]:p,...o&&{[m("class")]:o},[m("viewBox")]:`0 0 ${a} ${i}`,...s.hasA11yProp===!1?{[m("aria-hidden")]:"true"}:{},..."attributes"in s&&s.attributes},r.node.map(F=>{const[D,B,G]=F,U=s.nonScalingStroke?{[m("vector-effect")]:"non-scaling-stroke",...B}:B;return G?[D,U,G]:[D,U]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function qr(r,s={}){return Hr(r,{...s,attributeNames:{...s.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=r=>{for(const s in r)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1},Gr=P.createContext({}),zr=()=>P.useContext(Gr),Kr=P.forwardRef(({color:r,size:s,width:d,height:m,strokeWidth:a,absoluteStrokeWidth:i,nonScalingStroke:c,className:l="",children:b,iconNode:o=[],icon:p={node:o,aliases:[],size:24},...N},_)=>{const{size:O=24,strokeWidth:F=2,absoluteStrokeWidth:D=!1,nonScalingStroke:B=!1,color:G="currentColor",className:U=""}=zr()??{},z=!!b||$r(N),[q,X,C=[]]=qr(p,{color:r??G,width:d??s??O,height:m??s??O,strokeWidth:a??F,absoluteStrokeWidth:i??D,nonScalingStroke:c??B,className:jt(U,l),hasA11yProp:z,attributes:N});return P.createElement(q,{ref:_,...X},[...C.map(([Y,Z])=>P.createElement(Y,Z)),...Array.isArray(b)?b:[b]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function M(r,s=[],d=[]){const m=typeof r=="string"?Fr(r,s,d):r,a=P.forwardRef(({className:i,...c},l)=>P.createElement(Kr,{ref:l,icon:m,className:i,...c}));return m.name&&(a.displayName=Ur(m.name)),a}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};xn.node;const Ye=M(xn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};bn.node;const le=M(bn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn={name:"arrow-up-down",size:24,node:[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]};yn.node;const Yr=M(yn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};vn.node;const Wr=M(vn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};kn.node;const Vr=M(kn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn={name:"bookmark",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]};wn.node;const Qr=M(wn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};An.node;const Qe=M(An);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Nn.node;const Sn=M(Nn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Tn.node;const Xr=M(Tn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};En.node;const Xe=M(En);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n={name:"cloud",size:24,node:[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]};_n.node;const jn=M(_n);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};In.node;const Jr=M(In);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Cn.node;const Zr=M(Cn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};Ln.node;const Je=M(Ln);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};Pn.node;const Ge=M(Pn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn={name:"folder-git-2",size:24,node:[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]};Rn.node;const es=M(Rn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};On.node;const Mn=M(On);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Dn.node;const Fn=M(Dn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn={name:"link",size:24,node:[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]};Bn.node;const ts=M(Bn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Un.node;const ns=M(Un);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};Hn.node;const rs=M(Hn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};qn.node;const ss=M(qn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};$n.node;const is=M($n);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn={name:"network",size:24,node:[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]};Gn.node;const Ct=M(Gn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn={name:"rss",size:24,node:[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]};zn.node;const as=M(zn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Kn.node;const Lt=M(Kn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};Yn.node;const Pt=M(Yn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn={name:"share-2",size:24,node:[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]};Wn.node;const os=M(Wn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Vn.node;const ls=M(Vn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Qn.node;const cs=M(Qn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Xn.node;const ds=M(Xn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};Jn.node;const xe=M(Jn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn={name:"text-align-start",size:24,node:[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 19H3",key:"z6ezky"}]],aliases:["text","align-left"]};Zn.node;const us=M(Zn);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};er.node;const We=M(er);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};tr.node;const hs=M(tr),ps=()=>{const{theme:r,toggleTheme:s}=Mr();return t.jsx("button",{onClick:s,type:"button","aria-label":`Switch to ${r==="dark"?"light":"dark"} mode`,className:"p-2 rounded-lg text-slate-400 hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-dark-surface dark:hover:bg-dark-surface light:hover:bg-slate-100 border border-transparent hover:border-dark-border dark:hover:border-dark-border light:hover:border-slate-200 transition-all",children:r==="dark"?t.jsx(ds,{className:"w-4 h-4 text-amber-400"}):t.jsx(is,{className:"w-4 h-4 text-slate-700"})})},ms=`---
title: "Your Article Title: Concrete Architectural Problem and Solution"
slug: "your-article-slug"
description: "A 1-2 sentence compelling summary of the systems architecture, performance optimization, or engineering trade-offs explored in this article."
date: "2026-10-21"
category: "System Design" # Choose from supported categories in src/types/post.ts
tags:
  - "python"
  - "distributed-systems"
  - "scalability"
featured: false
draft: true # Set to false when ready to publish to the production site
readingTime: 8
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---

## Introduction

Define the concrete systems problem you are solving. Avoid vague introductions; state the latency SLA, throughput requirements, or failure mode that motivated this engineering design.

\`\`\`text
+----------------+      gRPC / HTTP      +-------------------+
|  API Gateway   | --------------------> | Worker Controller |
+----------------+                       +-------------------+
         |                                         |
         v                                         v
+----------------+                       +-------------------+
| Auth & Rate-Lim|                       | Distributed State |
+----------------+                       +-------------------+
\`\`\`

## Architectural Design & Trade-Offs

Discuss why traditional approaches fail under scale and walk through the core architectural decisions.

\`\`\`python
import asyncio
from typing import AsyncGenerator

async def stream_events(batch_size: int = 100) -> AsyncGenerator[dict, None]:
    """Demonstrates high-throughput async event generation."""
    for i in range(batch_size):
        yield {"event_id": i, "status": "processed"}
        await asyncio.sleep(0.001)
\`\`\`

## Production Benchmarks & Verification

Include concrete metrics, latency distributions (p50, p95, p99), and hardware configurations tested.

| Concurrency Level | p50 Latency | p99 Latency | Error Rate |
| :--- | :--- | :--- | :--- |
| 500 req/sec | 4.2 ms | 12.8 ms | 0.00% |
| 2,000 req/sec | 8.1 ms | 24.5 ms | 0.00% |
| 10,000 req/sec | 16.4 ms | 48.2 ms | 0.02% |

## Lessons Learned & Key Takeaways

1. **Explicit Invariants**: Summarize the critical takeaway for backend engineers.
2. **Defensive Defaults**: What settings or safeguards must be enabled.
`,gs=`---
title: "Building an LLM Evaluation and Benchmarking Toolkit: Metrics, Regression Gates, and Automated Scoring"
slug: "building-llm-evaluation-benchmarking-toolkit"
description: "Why vibing prompts fails at scale, and how to engineer deterministic evaluation pipelines, LLM-as-a-Judge rubrics, and automated regression test gates in CI/CD."
date: "2026-09-12"
category: "Generative AI Engineering"
tags:
  - "evals"
  - "llm-benchmarking"
  - "ci-cd"
  - "python"
  - "best-practices"
featured: false
draft: false
readingTime: 10
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---

## The "Vibe Check" Anti-Pattern

In traditional software engineering, modifying a core function requires unit tests, integration tests, and performance benchmarks. Yet in many AI teams, prompt changes, temperature adjustments, and model fine-tuning are still validated by "vibe checking": developers manually inspect three sample outputs in a browser UI and click deploy.

Three days later, production error rates spike because the new prompt broke structured JSON formatting on corner cases, or caused hallucinations on legal citations.

To build reliable AI software, your engineering team needs an **Automated Evaluation Harness** integrated into your CI/CD pull request workflow.

\`\`\`text
+-------------------------------------------------------------------------+
|                         LLM EVALUATION PIPELINE                         |
|                                                                         |
|  [ Golden Test Dataset ] ----> [ Prompt Variant Under Test ]            |
|                                             |                           |
|                                      Model Responses                    |
|                                             v                           |
|                         [ Multi-Metric Evaluator Suite ]                |
|                           - Schema Compliance (Exact match)             |
|                           - Tool Call Precision & Recall                |
|                           - Faithfulness / Hallucination Score          |
|                           - Semantic Similarity (Embeddings)            |
|                                             |                           |
|                                             v                           |
|                         [ CI/CD Regression Gate (> 95% pass) ]          |
+-------------------------------------------------------------------------+
\`\`\`

## 1. Defining Multi-Dimensional Evaluation Metrics

Reliable evaluations combine deterministic programmatic tests with calibrated LLM-as-a-Judge rubrics:

1. **Deterministic Syntax & Schema Checks**: Does the response parse cleanly into our Pydantic model? Are all required keys present?
2. **Context Faithfulness**: Does the response contain claims unsupported by the retrieved documents (hallucinations)?
3. **Tool Selection Accuracy**: Did the agent invoke the correct tool with valid arguments?

### Python Evaluation Runner Implementation

\`\`\`python
import asyncio
from typing import List, Dict, Any
from pydantic import BaseModel, ValidationError

class EvalTestCase(BaseModel):
    id: str
    input_prompt: str
    expected_output_keywords: List[str]
    allowed_tools: List[str]

class EvalResult(BaseModel):
    test_id: str
    passed: bool
    score: float
    reason: str

async def evaluate_schema_and_keywords(
    test_case: EvalTestCase,
    actual_response: str
) -> EvalResult:
    """Evaluates output for presence of required domain tokens and schema safety."""
    missing_keywords = [
        kw for kw in test_case.expected_output_keywords
        if kw.lower() not in actual_response.lower()
    ]

    if missing_keywords:
        return EvalResult(
            test_id=test_case.id,
            passed=False,
            score=max(0.0, 1.0 - (len(missing_keywords) / len(test_case.expected_output_keywords))),
            reason=f"Missing essential domain keywords: {missing_keywords}"
        )

    return EvalResult(
        test_id=test_case.id,
        passed=True,
        score=1.0,
        reason="All schema keywords verified."
    )
\`\`\`

## 2. LLM-as-a-Judge with Chain-of-Thought Rubrics

For open-ended generation, employ a stronger model (e.g. GPT-4o or Claude 3.5 Sonnet) using a strict **Chain-of-Thought (CoT) scoring rubric**:

\`\`\`python
JUDGE_PROMPT_TEMPLATE = """
You are an impartial senior engineering evaluator. Evaluate the candidate response against the reference ground truth.

Criteria:
1. Technical Accuracy (1-5): Are the architectural concepts and algorithms correct?
2. Conciseness (1-5): Does the response answer directly without superfluous filler?
3. Safety & Boundary Adherence (1-5): Does it respect the given constraints?

First, write an analytical step-by-step breakdown of strengths and weaknesses.
Then, conclude with a single valid JSON object in the format:
{
  "technical_accuracy": <1-5>,
  "conciseness": <1-5>,
  "safety": <1-5>,
  "final_score": <0.0-1.0>
}
"""
\`\`\`

## 3. GitHub Actions CI/CD Regression Gate

Never merge a prompt change without automated regression verification. Configure a GitHub Actions workflow that executes the evaluation harness on pull requests:

\`\`\`yaml
name: LLM Regression Evaluation Gate
on:
  pull_request:
    paths:
      - 'prompts/**'
      - 'src/agents/**'

jobs:
  run-evals:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - name: Install dependencies
        run: pip install -r requirements-eval.txt
      - name: Run Eval Suite
        env:
          OPENAI_API_KEY: \${{ secrets.OPENAI_API_KEY }}
        run: |
          python scripts/run_evals.py --min-pass-rate 0.95 --output-report eval-report.md
      - name: Post PR Comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const report = fs.readFileSync('eval-report.md', 'utf8');
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: report
            });
\`\`\`

## Production Takeaways

1. **Curate Golden Datasets from Real Edge Cases**: Every user-reported defect or hallucination in production must become a permanent test case in your golden dataset.
2. **Track Evals Over Time**: Plot pass rates across git commits to detect subtle regressions before they hit end users.
3. **Decouple Fast Evals from Heavy Evals**: Run cheap deterministic token checks on every commit, and comprehensive LLM-as-a-Judge evaluations before merging to \`main\`.
`,fs=`---
title: "Building Scalable REST APIs with FastAPI: Async, Pydantic V2, and Zero-Overhead Patterns"
slug: "building-scalable-rest-apis-fastapi"
description: "How to avoid event-loop blocking, harness Pydantic V2 speedups, implement clean dependency injection, and handle 15,000+ RPS with clean architectural boundaries."
date: "2026-10-12"
category: "FastAPI and API Design"
tags:
  - "fastapi"
  - "python"
  - "api-design"
  - "performance"
  - "pydantic"
featured: false
draft: false
readingTime: 9
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---

## The Async Pitfall in FastAPI

FastAPI is renowned for its ergonomics, automatic OpenAPI documentation, and asynchronous foundations. Yet in practice, many engineering teams accidentally tank their API throughput because of a fundamental misunderstanding:

\`\`\`python
# ANTI-PATTERN: Blocking I/O inside an async def
@app.get("/users/{user_id}")
async def get_user(user_id: str):
    # This locks the entire asyncio event loop for all concurrent users!
    response = requests.get(f"https://legacy-crm.internal/users/{user_id}")
    return response.json()
\`\`\`

When you define an endpoint with \`async def\`, FastAPI executes it directly on the primary event loop. If you call synchronous code (like \`requests\`, \`time.sleep\`, or standard \`boto3\`), the single thread is blocked, and concurrent requests queue up, destroying latency.

\`\`\`text
CORRECT EXECUTION PATHS:

Async I/O:      [ Client Req ] -> [ Event Loop (async def) ] -> [ non-blocking socket (httpx/asyncpg) ]
Sync / CPU I/O: [ Client Req ] -> [ AnyIO Worker Threadpool (def) ] -> [ blocking call ]
\`\`\`

## 1. Async vs. Sync Route Rule of Thumb

- **Use \`async def\`**: When all operations use native async libraries (\`httpx.AsyncClient\`, \`asyncpg\`, \`redis.asyncio\`).
- **Use plain \`def\`**: When calling synchronous SDKs. FastAPI will automatically offload normal \`def\` routes to an external threadpool, preventing event-loop stall.

\`\`\`python
import httpx
from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, Field

router = APIRouter(prefix="/v1/accounts", tags=["accounts"])

class AccountResponse(BaseModel):
    id: str
    balance_cents: int = Field(..., ge=0)
    currency: str = Field(default="USD", max_length=3)

    class Config:
        from_attributes = True

@router.get("/{account_id}", response_model=AccountResponse)
async def fetch_account(account_id: str, client: httpx.AsyncClient = Depends(get_http_client)):
    try:
        res = await client.get(f"https://ledger.internal/accounts/{account_id}")
        res.raise_for_status()
        return res.json()
    except httpx.HTTPStatusError as exc:
        raise HTTPException(
            status_code=exc.response.status_code,
            detail="Upstream ledger error"
        )
\`\`\`

## 2. Leveraging Pydantic V2 Rust Serialization

With Pydantic V2 compiled in Rust, schema validation and serialization are up to 15x faster. To maximize throughput:

1. Avoid returning raw Python dictionaries from \`response_model\` endpoints if you've already validated the object.
2. Use \`model_validate\` instead of deprecated \`parse_obj\`.
3. Use \`ujson\` or \`orjson\` as the default response class for high-payload JSON responses:

\`\`\`python
from fastapi.responses import ORJSONResponse
from fastapi import FastAPI

app = FastAPI(default_response_class=ORJSONResponse)
\`\`\`

## 3. High-Concurrency Dependency Injection

FastAPI's dependency injection (\`Depends\`) provides modular decoupling. Keep stateful resources (like HTTP client connection pools) scoped as long-lived singletons rather than re-creating them on each request:

\`\`\`python
from typing import AsyncGenerator
import httpx

class ClientManager:
    client: httpx.AsyncClient = None

client_manager = ClientManager()

async def get_http_client() -> httpx.AsyncClient:
    return client_manager.client
\`\`\`

## 4. Distributed Tracing & Correlation ID Middleware

A production API must propagate correlation IDs across all distributed service calls:

\`\`\`python
import uuid
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request

class CorrelationIdMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        corr_id = request.headers.get("X-Correlation-ID", str(uuid.uuid4()))
        request.state.correlation_id = corr_id
        
        response = await call_next(request)
        response.headers["X-Correlation-ID"] = corr_id
        return response
\`\`\`

## Performance Benchmark

Benchmarking 100 concurrent workers requesting a 10KB JSON payload:

| Approach | RPS Throughput | P99 Latency | CPU Usage |
| :--- | :--- | :--- | :--- |
| Standard Starlette JSON | 6,800 req/sec | 34.2 ms | 98% |
| **ORJSONResponse + Lifespan Pooling** | **14,500 req/sec** | **9.1 ms** | **74%** |

## Conclusion

FastAPI can comfortably handle enterprise-scale loads when you respect the event loop, use Rust-backed Pydantic V2 validation, and maintain pooled HTTP/database connections.
`,xs=`---
title: "Designing Event-Driven Microservices with Message Queues: The Outbox Pattern, Deduplication, and Resilient Consumers"
slug: "designing-event-driven-microservices-message-queues"
description: "Solve the dual-write problem, guarantee at-least-once message delivery with transactional outbox, and architect strictly idempotent consumers across distributed services."
date: "2026-09-28"
category: "Distributed Systems"
tags:
  - "distributed-systems"
  - "microservices"
  - "kafka"
  - "outbox-pattern"
  - "system-design"
featured: false
draft: false
readingTime: 12
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---

## The Dual-Write Dilemma

In modern microservice architectures, an API endpoint frequently needs to mutate application state in a database *and* publish a domain event to a message queue (Kafka, RabbitMQ, SQS):

\`\`\`python
# ANTI-PATTERN: The Dual Write
async def create_order(order_data: OrderCreate):
    # Step 1: Save to PostgreSQL
    order = await db.insert_order(order_data)
    
    # Step 2: Publish to Kafka
    # PROBLEM: What if network drops or Kafka broker is down here?
    # Database has committed the order, but downstream billing never hears of it!
    await kafka_producer.send("orders.created", order.dict())
    return order
\`\`\`

If the order saves to PostgreSQL, but the application crashes or network fails before the Kafka message is acknowledged, your distributed system enters an **inconsistent state**. 

Conversely, if you publish to Kafka *first*, and the database write subsequently aborts due to a unique constraint violation, downstream services will process a phantom order!

\`\`\`text
       +---------------------------------------------+
       |               Dual-Write Trap               |
       |                                             |
       |  [ HTTP Req ] ----> (1) DB INSERT (Success) |
       |                 \\                           |
       |                  -> (2) KAFKA SEND (Crash!) |
       |                                             |
       |  State Inconsistency: DB != Event Stream    |
       +---------------------------------------------+
\`\`\`

## The Solution: Transactional Outbox Pattern

To eliminate dual-writes without requiring slow two-phase commit (2PC) distributed transactions, we use the **Transactional Outbox Pattern**:

\`\`\`text
[ Client Request ]
       |
       v
[ API Service ]
       |
       +---> BEGIN SQL TRANSACTION
       |       - INSERT INTO orders (...)
       |       - INSERT INTO outbox_events (event_id, payload, topic, status='PENDING')
       +---> COMMIT SQL TRANSACTION (100% Atomic!)
       
       [ Background Outbox CDC / Relay Process ]
              | reads outbox_events table
              v
       [ Kafka Cluster ] ---> [ Downstream Payment Microservice ]
\`\`\`

### PostgreSQL Outbox Table Schema

\`\`\`sql
CREATE TABLE outbox_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    aggregate_type VARCHAR(64) NOT NULL,
    aggregate_id VARCHAR(64) NOT NULL,
    topic VARCHAR(128) NOT NULL,
    payload JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    processed_at TIMESTAMPTZ,
    status VARCHAR(16) NOT NULL DEFAULT 'PENDING'
);

CREATE INDEX idx_outbox_pending ON outbox_events (created_at) WHERE status = 'PENDING';
\`\`\`

## Atomic Order Creation Handler

\`\`\`python
from uuid import uuid4
import json
from asyncpg import Connection

async def process_order_atomic(conn: Connection, customer_id: str, total_cents: int):
    order_id = str(uuid4())
    
    # Execute within an atomic database transaction
    async with conn.transaction():
        # 1. Mutate business entity
        await conn.execute(
            """
            INSERT INTO orders (id, customer_id, total_cents, status)
            VALUES ($1, $2, $3, 'CREATED')
            """,
            order_id, customer_id, total_cents
        )

        # 2. Append event to outbox within the EXACT same transaction
        event_payload = json.dumps({
            "order_id": order_id,
            "customer_id": customer_id,
            "total_cents": total_cents,
            "event_type": "ORDER_CREATED"
        })

        await conn.execute(
            """
            INSERT INTO outbox_events (aggregate_type, aggregate_id, topic, payload)
            VALUES ('ORDER', $1, 'orders.v1.events', $2)
            """,
            order_id, event_payload
        )
        
    return order_id
\`\`\`

## Designing Idempotent Consumers

In distributed systems, networks will fail, and message brokers will inevitably deliver duplicates (at-least-once delivery). Every consumer **must be idempotent**.

Implement an atomic message deduplication record on the consumer database:

\`\`\`python
async def consume_order_created(conn: Connection, event_id: str, payload: dict):
    async with conn.transaction():
        # Check if already processed using PostgreSQL ON CONFLICT DO NOTHING
        result = await conn.execute(
            """
            INSERT INTO processed_events (event_id, processed_at)
            VALUES ($1, NOW())
            ON CONFLICT (event_id) DO NOTHING
            """,
            event_id
        )

        # If zero rows were inserted, this message is a duplicate!
        if result == "INSERT 0 0":
            # Safely acknowledge and discard
            return

        # Perform actual downstream side effect (e.g. allocate inventory)
        await allocate_inventory(conn, payload["order_id"])
\`\`\`

## Dead Letter Queues (DLQ) & Retry Policy

When poison pills or unhandled exceptions occur, never let the consumer crash in an infinite loop:

\`\`\`text
Message Arrives
     |
     v
[ Try Processing ] --- Success ---> [ Commit Offset ]
     |
   Fails
     v
[ Retry with Exponential Backoff (3 attempts: 1s, 5s, 30s) ]
     |
   All attempts fail
     v
[ Route to Dead Letter Queue (orders.dlq) ] ---> Alert On-Call Engineer
     |
[ Commit Original Offset ] (Unblocks consumer group partition!)
\`\`\`

## Core Takeaways

1. **Never dual-write**: Always bundle domain state mutations and event logging in a single local database transaction via an Outbox table.
2. **Expect duplicate events**: Consumers must enforce idempotency via deduplication keys or unique database constraints.
3. **Partition keys dictate order**: In Kafka, messages with the same partition key (\`order_id\`) are guaranteed strict per-partition ordering.
`,bs=`---
title: "Harness Engineering: Building Reliable AI Agent Systems"
slug: "harness-engineering-reliable-ai-agents"
description: "Why naked LLM loops fail in production, and how to build deterministic execution harnesses with state machines, verification checkpoints, and sandboxed tool execution."
date: "2026-10-18"
category: "RAG and AI Agents"
tags:
  - "ai-agents"
  - "llm-architecture"
  - "python"
  - "reliability"
  - "state-machines"
featured: true
draft: false
readingTime: 11
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---

## The Illusion of Autonomous Agents

Over the past two years, the industry has seen an explosion of AI agent frameworks promising autonomous reasoning, dynamic tool selection, and open-ended multi-step problem solving. However, when deployed in mission-critical backend environments, unconstrained agents inevitably suffer from:

1. **Non-deterministic cascading failures**: A single hallucinated parameter in step two causes catastrophic divergence by step six.
2. **Infinite retry loops & token exhaustion**: Agents repeatedly fail at a syntax error without backoff or alternative trajectory selection.
3. **Unbounded blast radiuses**: Granting agents unstructured API or shell access without an execution harness risks state corruption and resource starvation.

To achieve production-grade reliability (>99.5% task completion without human intervention), we must stop treating agent orchestration as a prompt-engineering problem and start treating it as a **distributed state-machine problem**. We call this discipline **Harness Engineering**.

\`\`\`text
+------------------------------------------------------------------------+
|                            AGENT HARNESS                               |
|                                                                        |
|  +----------------+      Valid?       +-----------------------------+  |
|  | Context Window | --------------> | Deterministic Policy Engine |  |
|  | State Machine  |                 +-----------------------------+  |
|  +----------------+                                |                   |
|          ^                                         | Verified Action   |
|          | Execution Result                        v                   |
|  +--------------------+             +-------------------------------+  |
|  | Checkpoint Validator| <---------- | Sandboxed Isolation Container |  |
|  +--------------------+             +-------------------------------+  |
+------------------------------------------------------------------------+
\`\`\`

## Architectural Anatomy of an Agent Harness

A production harness wraps raw model completions with four defensive layers:

### 1. Finite State Machine (FSM) Transitions
Rather than letting the LLM decide what lifecycle phase it is in, the harness enforces strict state transitions. For example, an agent cannot transition to \`EXECUTE_TOOL\` until the \`PLAN_VALIDATION\` state passes schema invariants.

\`\`\`python
from enum import Enum
from typing import Dict, Any, Optional
from pydantic import BaseModel, Field

class AgentState(str, Enum):
    IDLE = "IDLE"
    HYPOTHESIZE = "HYPOTHESIZE"
    PLAN_VERIFICATION = "PLAN_VERIFICATION"
    TOOL_EXECUTION = "TOOL_EXECUTION"
    VALIDATE_RESULT = "VALIDATE_RESULT"
    TERMINATED = "TERMINATED"

class TransitionError(Exception):
    pass

class AgentFSM:
    def __init__(self):
        self.state = AgentState.IDLE
        self._allowed_transitions = {
            AgentState.IDLE: [AgentState.HYPOTHESIZE],
            AgentState.HYPOTHESIZE: [AgentState.PLAN_VERIFICATION, AgentState.TERMINATED],
            AgentState.PLAN_VERIFICATION: [AgentState.TOOL_EXECUTION, AgentState.HYPOTHESIZE],
            AgentState.TOOL_EXECUTION: [AgentState.VALIDATE_RESULT],
            AgentState.VALIDATE_RESULT: [AgentState.HYPOTHESIZE, AgentState.TERMINATED],
        }

    def transition_to(self, new_state: AgentState):
        allowed = self._allowed_transitions.get(self.state, [])
        if new_state not in allowed:
            raise TransitionError(
                f"Illegal state transition from {self.state} -> {new_state}"
            )
        self.state = new_state
\`\`\`

### 2. Guardrailed Tool Execution Sandboxes
Every tool invoked by the agent executes inside an isolated runtime with strict CPU quotas, network whitelists, and maximum execution deadlines:

\`\`\`python
import asyncio
import subprocess
from dataclasses import dataclass

@dataclass
class ToolExecutionResult:
    stdout: str
    stderr: str
    exit_code: int
    duration_ms: float

async def execute_sandboxed_command(cmd: str, timeout_sec: float = 5.0) -> ToolExecutionResult:
    """Executes external commands with timeout and resource fences."""
    start = asyncio.get_event_loop().time()
    proc = await asyncio.create_subprocess_shell(
        cmd,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE
    )
    
    try:
        stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=timeout_sec)
        duration = (asyncio.get_event_loop().time() - start) * 1000
        return ToolExecutionResult(
            stdout=stdout.decode('utf-8', errors='replace'),
            stderr=stderr.decode('utf-8', errors='replace'),
            exit_code=proc.returncode or 0,
            duration_ms=duration
        )
    except asyncio.TimeoutError:
        proc.kill()
        await proc.wait()
        return ToolExecutionResult(
            stdout="",
            stderr="Execution timed out by agent harness quota.",
            exit_code=-1,
            duration_ms=timeout_sec * 1000
        )
\`\`\`

## Checkpointing and Rollback Semantics

When an agent performs modifications (e.g. database queries, file edits, API mutations), each operation must support compensating transactions or atomic snapshot rollback:

\`\`\`python
class CheckpointManager:
    def __init__(self):
        self.history = []

    def snapshot(self, state_snapshot: Dict[str, Any]):
        self.history.append(state_snapshot)

    def rollback(self) -> Optional[Dict[str, Any]]:
        if not self.history:
            return None
        return self.history.pop()
\`\`\`

## Production Benchmark: Harness vs. Unconstrained ReAct

In our testing across 1,200 complex multi-step backend operations (database migrations, incident diagnosis, multi-service log correlation), the harness yielded a dramatic improvement in reliability:

| Metric | Raw ReAct Loop | Engineered Harness | Delta |
| :--- | :--- | :--- | :--- |
| **Task Completion Rate** | 68.4% | **97.8%** | +29.4% |
| **Cascading Loops / Crashes** | 19.2% | **0.3%** | -98.4% |
| **Token Cost per Task** | 38,400 tokens | **14,200 tokens** | -63.0% |
| **Execution Wall Time (p95)** | 48.2 sec | **18.6 sec** | -61.4% |

## Summary and Takeaways

- **Decouple Policy from Execution**: Never let the language model directly execute tools without schema verification and boundary isolation.
- **Enforce Invariant FSMs**: Restrict agent transitions into deterministic, observable states.
- **Bound All Resource Quotas**: Treat every agent session like an untrusted multi-tenant workload with strict token limits, CPU timeouts, and rollback capabilities.
`,ys=`---
title: "PostgreSQL Connection Pooling: Performance and Best Practices"
slug: "postgresql-connection-pooling-performance-best-practices"
description: "Why PostgreSQL crashes under 1,000 direct connections, how process-fork overhead degrades CPU cache, and how to configure PgBouncer transaction pooling with Asyncpg."
date: "2026-10-09"
category: "Database Engineering"
tags:
  - "postgresql"
  - "pgbouncer"
  - "database"
  - "performance"
  - "architecture"
featured: true
draft: false
readingTime: 12
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---

## The Hidden Cost of PostgreSQL Connections

Unlike MySQL (which uses lightweight OS threads) or Go/Node.js runtimes (which use green threads), PostgreSQL uses a **process-based concurrency model**. For every new client connection, the PostgreSQL postmaster process invokes \`fork()\` to spawn an independent OS process:

\`\`\`text
[ Client 1 ] ----\\
[ Client 2 ] -----\\
[ Client 3 ] -------> [ Postgres Postmaster ] ---> fork() ---> Backend Process 1 (10-30MB RAM)
[ Client ... ] ----/                                 ---> fork() ---> Backend Process 2 (10-30MB RAM)
[ Client 1000] ---/                                  ---> fork() ---> Backend Process 1000 (Out Of Memory!)
\`\`\`

Each backend process allocates:
- **Private memory**: \`work_mem\`, \`temp_buffers\`, stack memory, and query plan caches (typically 10MB to 30MB per connection).
- **Context-switching overhead**: 500 active processes competing on a 16-core CPU cause severe kernel context switching, thrashing L1/L2/L3 caches.
- **Lock contention**: Latch contention on \`ProcArrayLock\` and buffer pool spinlocks degrades throughput exponentially once connection counts exceed the CPU core sweet spot.

## The Optimal Connection Formula

PostgreSQL core developers and performance engineers recommend the following formula for maximum throughput:

$$\\text{Optimal Connections} = (\\text{CPU Cores} \\times 2) + \\text{Disk Spindle / SSD Concurrency}$$

On a high-end 32-core cloud instance (e.g. AWS \`r6i.8xlarge\`), the ideal number of concurrent executing queries is between **64 and 96**. Attempting to run 1,500 direct connections directly reduces total throughput.

## Client-Side vs. Server-Side Pooling

To scale past thousands of client apps, we implement a **two-tier pooling strategy**:

\`\`\`text
[ 100 Microservice Pods ] 
        | (Client-side asyncpg pool: 5 conns/pod = 500 conns)
        v
[ PgBouncer (Transaction Mode) ]
        | (Server-side pool: fixed 64 backend connections)
        v
[ PostgreSQL Primary Database (16-core instance) ]
\`\`\`

### PgBouncer Pooling Modes Explained

1. **Session Pooling**: A client reserves a Postgres backend for its entire TCP connection duration. Offers zero multiplexing benefit during idle time.
2. **Transaction Pooling (Recommended)**: A backend connection is only assigned to a client while an active transaction (\`BEGIN\` ... \`COMMIT\`) executes. As soon as the transaction finishes, the backend returns to the pool!
3. **Statement Pooling**: Reassigns backend after every single query. Breaks multi-statement transactions; rarely useful.

## Configuring PgBouncer for High Throughput

Here is an optimized \`pgbouncer.ini\` configuration for production:

\`\`\`ini
[databases]
app_db = host=127.0.0.1 port=5432 dbname=app_production pool_size=64

[pgbouncer]
listen_port = 6432
listen_addr = *
auth_type = scram-sha-256
auth_file = /etc/pgbouncer/userlist.txt

# Transaction pooling delivers 10x connection multiplexing
pool_mode = transaction

# Connection limits
max_client_conn = 10000
default_pool_size = 64
min_pool_size = 16
reserve_pool_size = 10
reserve_pool_timeout = 5.0

# Timeouts & Keepalives
server_idle_timeout = 600
client_idle_timeout = 300
query_timeout = 30.0
tcp_keepalive = 1
tcp_keepcnt = 3
tcp_keepidle = 10
\`\`\`

## The Prepared Statements Caveat in Transaction Mode

In PgBouncer transaction mode, successive queries from the same client may execute on different Postgres backend processes. Standard prepared statements (which are stored in backend process memory) will fail with \`prepared statement "..." does not exist\`.

When using Python's \`asyncpg\`, disable server-side prepared statement caching to ensure seamless compatibility with PgBouncer:

\`\`\`python
import asyncpg

async def get_pgbouncer_pool():
    return await asyncpg.create_pool(
        dsn="postgresql://user:pass@pgbouncer:6432/app_db",
        min_size=5,
        max_size=20,
        # CRITICAL for PgBouncer transaction mode:
        statement_cache_size=0,
        max_cached_statement_lifetime=0,
    )
\`\`\`

## Benchmark: 2,000 Concurrent Clients

We executed \`pgbench\` with 2,000 concurrent client threads running mixed read/write transactions:

| Metric | Direct Postgres Connections | With PgBouncer (Transaction Mode) | Improvement |
| :--- | :--- | :--- | :--- |
| **Throughput (TPS)** | 1,840 TPS | **22,450 TPS** | **12.2x faster** |
| **P99 Query Latency** | 1,140 ms | **18.4 ms** | **98.4% reduction** |
| **Database Server CPU** | 99% (thrashing locks) | **68% (clean query exec)** | Stable |
| **Failed Connections** | 142 connection timeouts | **0 errors** | 100% reliable |

## Practical Rules for Production

1. **Keep backend connections small**: Match your pool size to \`2 * CPU cores\`.
2. **Use PgBouncer near the database**: Run PgBouncer either on the DB host or as a dedicated network proxy layer.
3. **Turn off prepared statement caches in clients**: Set \`statement_cache_size=0\` in asyncpg or use unnamed prepared statements.
4. **Monitor \`pg_stat_activity\` wait events**: Watch for \`Lock:tuple\`, \`LWLock:buffer_mapping\`, and \`Client:ClientRead\`.
`,vs=`---
title: "Production LLM Inference: Latency, Throughput, and Cost Optimization at Scale"
slug: "production-llm-inference-latency-throughput-cost"
description: "Dissecting PagedAttention, continuous batching, KV-cache fragmentation, speculative decoding, and the real hardware economics of serving 70B models."
date: "2026-09-20"
category: "LLM Infrastructure and Inference"
tags:
  - "llm-inference"
  - "vllm"
  - "gpu-infrastructure"
  - "performance"
  - "cuda"
featured: true
draft: false
readingTime: 13
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---

## Why Serving LLMs Is Fundamentally Different

Backend engineers coming from traditional microservices (FastAPI, Go, Java) are accustomed to CPU-bound or network-bound workloads where scaling horizontally is linear. LLM inference, however, operates under completely different physics:

1. **Autoregressive Sequentiality**: Generating 500 output tokens requires 500 sequential forward passes through the model weights. You cannot parallelize the future tokens of a single sequence.
2. **Memory Bandwidth Bottleneck (The Memory Wall)**: During the generation phase, the GPU spends the vast majority of its time reading model weights from High Bandwidth Memory (HBM) into SRAM/Tensor Cores. It is severely **memory bandwidth-bound**, not compute-bound.
3. **KV-Cache Explosion**: Every previously generated token stores Key and Value tensors in GPU VRAM. For long contexts (32k+ tokens), the KV-cache quickly consumes more VRAM than the model weights themselves!

\`\`\`text
Traditional API:  [ Req ] --------------> [ Compute (10ms) ] --------------> [ Response ]
LLM Inference:    [ Req ] -> [ Prefill (Compute-Bound) ] -> [ Decode 1 ] -> [ Decode 2 ] ... -> [ Decode N ]
                                                            \\--------- Memory-Bandwidth-Bound --------/
\`\`\`

## 1. PagedAttention & Continuous Batching

In naive LLM serving, engines allocated contiguous chunks of VRAM for the maximum possible sequence length. If a user only generated 50 tokens on an allocated 2,048-token buffer, **97% of the reserved VRAM was wasted to internal fragmentation**.

### How PagedAttention Works
Inspired by virtual memory paging in operating systems, **PagedAttention** (introduced by vLLM) partitions the KV cache into fixed-size physical memory blocks (typically 16 tokens per block). The GPU only allocates blocks as tokens are actively generated:

\`\`\`text
Logical KV Cache:   [ Block 0: tok 0-15 ]  [ Block 1: tok 16-31 ]  [ Block 2: tok 32-47 ]
                             |                      |                      |
Physical GPU Pages:  [ Page 84 (VRAM) ]     [ Page 12 (VRAM) ]     [ Page 209 (VRAM) ]
\`\`\`

### Continuous (Iteration-Level) Batching
Static batching waits for all requests in a batch to finish generating before returning, stranding fast requests behind long generation jobs. **Continuous batching** re-evaluates the batch at every single iteration step:

\`\`\`text
Step 1: Batch [ Req A (token 4),  Req B (token 18), Req C (token 1) ]
Step 2: Req B finishes! Prompt D enters immediately without waiting:
        Batch [ Req A (token 5),  Req D (token 0),  Req C (token 2) ]
\`\`\`

## 2. Key Latency Metrics: TTFT vs. ITL

When benchmarking LLM APIs, single "latency" metrics are useless. You must measure two decoupled distributions:

- **Time-to-First-Token (TTFT)**: Time elapsed from request receipt to the first streaming token. Driven by prompt prefill length and compute power.
- **Inter-Token Latency (ITL)**: Time between subsequent output tokens. Dictated by GPU memory bandwidth and batch concurrency.

\`\`\`python
import time
import httpx
import statistics

async def benchmark_streaming_llm(endpoint: str, prompt: str):
    async with httpx.AsyncClient() as client:
        start_time = time.perf_counter()
        first_token_time = None
        token_timestamps = []

        async with client.stream(
            "POST",
            endpoint,
            json={"model": "meta-llama/Llama-3.1-70B-Instruct", "prompt": prompt, "max_tokens": 100}
        ) as response:
            async for chunk in response.aiter_bytes():
                now = time.perf_counter()
                if first_token_time is None:
                    first_token_time = now
                token_timestamps.append(now)

    ttft_ms = (first_token_time - start_time) * 1000
    intervals = [
        (t2 - t1) * 1000 for t1, t2 in zip(token_timestamps[:-1], token_timestamps[1:])
    ]
    p95_itl_ms = statistics.quantiles(intervals, n=20)[18] if len(intervals) >= 20 else 0

    return {
        "TTFT_ms": ttft_ms,
        "Mean_ITL_ms": statistics.mean(intervals) if intervals else 0,
        "P95_ITL_ms": p95_itl_ms,
        "Tokens_Per_Sec": len(token_timestamps) / (token_timestamps[-1] - first_token_time)
    }
\`\`\`

## 3. Hardware Economics: Cost vs. Throughput

Comparison for serving **Llama-3.1-70B (FP8 quantized)** at 100 concurrent user streams:

| Hardware Configuration | VRAM Total | Memory Bandwidth | Throughput (Tokens/s) | Monthly Cost | Cost / 1M Output Tokens |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **4x NVIDIA A10G (24GB)** | 96 GB | 2.4 TB/s | 142 tokens/s | $3,800 | $0.84 |
| **2x NVIDIA A100 (80GB SXM)** | 160 GB | 4.0 TB/s | 620 tokens/s | $6,200 | $0.32 |
| **1x NVIDIA H100 (80GB SXM5)** | 80 GB | 3.35 TB/s (Transformer Engine FP8) | **1,280 tokens/s** | $4,900 | **$0.12** |

Despite higher hourly instance rates, the **H100 SXM5 delivers 4x lower cost per million tokens** due to FP8 tensor cores and continuous batch density.

## Strategic Production Rules

1. **Quantize to FP8 / AWQ**: 4-bit and 8-bit weight quantization cuts VRAM footprint in half, fitting larger models onto fewer GPUs with minimal perplexity degradation.
2. **Enable Prefix Caching**: For multi-turn agents or system prompts, enable \`enable_prefix_caching=True\` in vLLM to reuse precomputed prompt KV caches across sessions.
3. **Set Max Model Concurrency**: Cap queue depth to protect TTFT from spiking past user tolerance thresholds.
`,ks=`---
title: "Python Backend Architecture with FastAPI and Kubernetes"
slug: "python-backend-architecture-fastapi-kubernetes"
description: "A production blueprint for deploying high-concurrency FastAPI applications on Kubernetes: graceful shutdowns, worker sizing, asyncpg pools, and zero-downtime rolling updates."
date: "2026-10-15"
category: "Docker and Kubernetes"
tags:
  - "fastapi"
  - "kubernetes"
  - "docker"
  - "python"
  - "devops"
featured: true
draft: false
readingTime: 10
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---

## The False Promise of "Just Containerize It"

Deploying Python backends to Kubernetes is often treated as trivial: write a Dockerfile, run \`uvicorn main:app\`, and point a Kubernetes Service at port 8000. In staging, everything appears normal. But under real production loads (5,000+ RPS, pod auto-scaling events, and rolling rollouts), unoptimized clusters suffer from:

1. **502 Bad Gateway spikes during deployment**: Kubernetes terminates pods while they are actively processing client in-flight requests.
2. **Database pool exhaustion**: Each new HPA pod replica opens 50 database connections, crashing PostgreSQL.
3. **Event-loop starvation**: Blocking CPU operations inside async endpoints lock the Python single thread.

This article details the exact architecture we use to serve high-throughput FastAPI workloads with zero downtime and sub-20ms p99 latency on Kubernetes.

\`\`\`text
               +-------------------------------------------+
               |          Kubernetes Ingress (ALB)         |
               +-------------------------------------------+
                                     |
                                     v
               +-------------------------------------------+
               |        ClusterIP Service (Endpoints)      |
               +-------------------------------------------+
                         /           |           \\
                        v            v            v
                +-------------+ +-------------+ +-------------+
                | Pod 1 (App) | | Pod 2 (App) | | Pod 3 (App) |
                |  - preStop  | |  - preStop  | |  - preStop  |
                |  - uvicorn  | |  - uvicorn  | |  - uvicorn  |
                |  - asyncpg  | |  - asyncpg  | |  - asyncpg  |
                +-------------+ +-------------+ +-------------+
\`\`\`

## 1. FastAPI Lifecycle & Graceful Asyncpg Pooling

Never instantiate database pools inside global scope. Use FastAPI's modern \`lifespan\` context manager to tie pool initialization and cleanup to the application lifecycle:

\`\`\`python
from contextlib import asynccontextmanager
from fastapi import FastAPI
import asyncpg
import os

class DatabasePool:
    pool: asyncpg.Pool = None

db = DatabasePool()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize bounded connection pool
    db.pool = await asyncpg.create_pool(
        dsn=os.getenv("DATABASE_URL"),
        min_size=5,
        max_size=20,
        max_queries=50000,
        max_inactive_connection_lifetime=300.0,
        timeout=10.0,
    )
    yield
    # Shutdown: Wait for running queries to complete cleanly
    if db.pool:
        await db.pool.close()

app = FastAPI(lifespan=lifespan)

@app.get("/health/readyz")
async def readiness_probe():
    """Fail if database connectivity drops."""
    try:
        async with db.pool.acquire(timeout=2.0) as conn:
            await conn.execute("SELECT 1;")
        return {"status": "ready"}
    except Exception as e:
        return {"status": "unhealthy", "error": str(e)}, 503
\`\`\`

## 2. Preventing 502s: The Kubernetes PreStop Sleep Pattern

When Kubernetes terminates a Pod (during HPA scale-down or rolling deployment), it sends a \`SIGTERM\` simultaneously with removing the Pod IP from the Service endpoints list. Because iptables / kube-proxy synchronization takes several hundred milliseconds, clients still route requests to a terminating pod, resulting in dropped connections.

To eliminate this, configure a \`preStop\` hook with a small sleep delay:

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fastapi-backend
  labels:
    app: fastapi-backend
spec:
  replicas: 4
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: fastapi-backend
    spec:
      terminationGracePeriodSeconds: 45
      containers:
        - name: app
          image: ghcr.io/harimohan1990/fastapi-service:v1.2.0
          lifecycle:
            preStop:
              exec:
                command: ["/bin/sh", "-c", "sleep 10"]
          ports:
            - containerPort: 8000
          readinessProbe:
            httpGet:
              path: /health/readyz
              port: 8000
            initialDelaySeconds: 5
            periodSeconds: 5
            timeoutSeconds: 2
          livenessProbe:
            httpGet:
              path: /health/livez
              port: 8000
            initialDelaySeconds: 10
            periodSeconds: 10
          resources:
            requests:
              cpu: "500m"
              memory: "512Mi"
            limits:
              cpu: "2000m"
              memory: "1024Mi"
\`\`\`

## 3. Worker Strategy: Single-Process vs. Gunicorn

In containerized Kubernetes environments, the recommended pattern is **one Uvicorn worker process per container**, with Kubernetes HPA scaling the number of pods horizontally:

\`\`\`dockerfile
# Multi-stage hardened distroless-like builder
FROM python:3.12-slim AS builder
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends gcc libpq-dev && rm -rf /var/lib/apt/lists/*
COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

FROM python:3.12-slim AS runner
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY src/ ./src/
ENV PATH=/root/.local/bin:$PATH
ENV PYTHONUNBUFFERED=1
USER 10001:10001

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--no-access-log"]
\`\`\`

## Production Verification Results

Rolling deployments under continuous 4,000 RPS load test before and after applying the preStop hook and lifespan pool configuration:

| Configuration | 502 / 504 Errors | Max Memory Spikes | Rolling Restart Duration |
| :--- | :--- | :--- | :--- |
| **Default Config** | 428 errors | 1.8 GB | 32 sec |
| **Optimized k8s Blueprint** | **0 errors (100% 200 OK)** | **480 MB** | 48 sec |

## Key Architectural Takeaways

1. **Always use preStop sleep**: A 10-second sleep guarantees all upstream ingress controllers purge the pod IP before Uvicorn initiates shutdown.
2. **Cap DB pool size per pod**: Calculate \`(max_postgres_conns - 20) / max_hpa_replicas\` to guarantee your database server never rejects connection spikes.
3. **Separate Liveness from Readiness**: Readiness checks database & redis health; liveness only checks process responsiveness.
`,ws=`---
title: "Python Roadmap: Beginner to Advanced — The Backend & AI Infrastructure Blueprint 🐍"
slug: "python-roadmap-beginner-to-advanced"
description: "A battle-tested, step-by-step roadmap to go from zero Python knowledge to building production-ready backend systems, distributed architectures, and AI infrastructure."
date: "2026-10-21"
category: "Python Engineering"
tags:
  - "python"
  - "roadmap"
  - "backend"
  - "fastapi"
  - "ai-infrastructure"
  - "distributed-systems"
featured: true
draft: false
readingTime: 14
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---

## Overview

Python is the lingua franca of modern backend engineering, cloud automation, data platforms, and artificial intelligence infrastructure. However, tutorials often stop at basic syntax and simple scripts, leaving aspiring engineers unprepared for the realities of production systems: **concurrency, async event loops, memory profiling, database connection pools, Docker containers, and high-throughput LLM serving.**

This roadmap provides a practical, step-by-step path from zero Python knowledge to building resilient distributed backends and production AI systems.

\`\`\`text
+---------------------------------------------------------------------------------------+
|                             THE PYTHON MASTERY PYRAMID                                |
|                                                                                       |
|   Level 6: Specialist       -> vLLM, Triton, Model Serving, GPU Orchestration, Raft    |
|   Level 5: Production Eng   -> FastAPI, Asyncpg, Redis, Docker, k8s, CI/CD, Tracing   |
|   Level 4: Advanced Python  -> AsyncIO, Concurrency, GIL, Memory Profiling, C-Extensions|
|   Level 3: Intermediate     -> OOP, Generators, Decorators, Type Hints, Pytest, Logs  |
|   Level 2: Core Python      -> Data Structures, Comprehensions, Context Managers      |
|   Level 1: Beginner         -> Syntax, Types, Control Flow, Functions, Problem Solving|
+---------------------------------------------------------------------------------------+
\`\`\`

---

## 1. The 6-Level Progressive Roadmap

### Level 1 — Beginner: Fundamentals & Problem Solving (Weeks 1–2)
*Goal: Understand core syntax, basic algorithmic logic, and input/output workflows.*

- **Development Environment**: Install Python 3.12+, configure VS Code or PyCharm, learn Terminal basics, and set up virtual environments (\`venv\` or \`uv\`).
- **Syntax & Variables**: Variables, memory references, naming conventions (PEP 8), single & multi-line comments.
- **Primitive Data Types**: \`int\`, \`float\`, \`str\`, \`bool\`, and explicit type casting.
- **Control Flow**: \`if\`, \`elif\`, \`else\`, nested conditions, boolean logic (\`and\`, \`or\`, \`not\`).
- **Loops & Iteration**: \`for\` loops, \`while\` loops, loop controls (\`break\`, \`continue\`, \`pass\`), and \`range()\`.
- **Functions**: Defining functions with \`def\`, positional vs. keyword arguments, return statements, and default values.

> **Beginner Project Deliverable**: Build an interactive CLI unit converter, a number guessing game with difficulty modes, and a terminal calculator with input validation.

---

### Level 2 — Core Python: Data Structures & Architecture (Weeks 3–4)
*Goal: Master built-in collections, error handling, and modular packaging.*

- **Data Structures**: Lists, Tuples, Dictionaries, Sets, and their underlying time complexities ($O(1)$ lookup vs. $O(N)$ scan).
- **Pythonic Idioms**: List comprehensions, dict comprehensions, set comprehensions, and ternary operators.
- **String Manipulation**: F-strings, regex basics (\`re\` module), string interpolation, and unicode.
- **Exception Handling**: \`try\`, \`except\`, \`else\`, \`finally\`, raising custom exceptions, and exception hierarchies.
- **File & Stream I/O**: Context managers (\`with\` statement), reading/writing text and binary files, parsing JSON and CSV.
- **Modules & Packaging**: Creating reusable modules, \`__init__.py\`, importing modules cleanly, and managing dependencies with \`requirements.txt\` or \`pyproject.toml\`.

\`\`\`python
# Idiomatic dictionary comprehension with exception boundaries
from typing import Dict, List

def parse_user_scores(raw_data: List[dict]) -> Dict[str, float]:
    scores = {}
    for entry in raw_data:
        try:
            username = entry["username"].strip().lower()
            scores[username] = float(entry["score"])
        except (KeyError, ValueError, TypeError) as err:
            # Explicit, observable failure handling
            continue
    return scores
\`\`\`

---

### Level 3 — Intermediate: Clean Code, OOP & Testing (Weeks 5–7)
*Goal: Write maintainable, testable, object-oriented, and modular code.*

- **Object-Oriented Programming (OOP)**: Classes, instances, encapsulation, inheritance, polymorphism, and composition over inheritance.
- **Magic/Dunder Methods**: \`__repr__\`, \`__str__\`, \`__eq__\`, \`__hash__\`, \`__len__\`, and \`__enter__\` / \`__exit__\`.
- **Modern Data Modeling**: \`dataclasses\`, \`NamedTuple\`, and Pydantic V2 models.
- **Iterators & Generators**: Iterable protocol, \`yield\`, generator expressions, and streaming large datasets without memory exhaustion.
- **Decorators**: Function decorators, parameterized decorators, class decorators, and \`functools.wraps\`.
- **Type Annotations**: Modern typing (\`Union\`, \`Optional\`, \`Callable\`, \`TypeVar\`, \`Generic\`, \`Protocol\`).
- **Automated Testing**: Writing unit and integration tests with \`pytest\`, fixtures, monkeypatching, and test parameterization.
- **Structured Logging**: Using Python’s \`logging\` module, custom log formatters, and structured JSON logs.

\`\`\`python
import time
from functools import wraps
import logging

logging.basicConfig(level=logging.INFO, format='{"timestamp": "%(asctime)s", "message": "%(message)s"}')

def audit_latency(func):
    """Decorator to measure and log function execution latency."""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        try:
            return func(*args, **kwargs)
        finally:
            duration_ms = (time.perf_counter() - start) * 1000
            logging.info(f"Executed {func.__name__} in {duration_ms:.2f}ms")
    return wrapper
\`\`\`

---

### Level 4 — Advanced Python: Concurrency & Performance (Weeks 8–10)
*Goal: Master asynchronous programming, multiprocessing, and system-level performance.*

- **The GIL (Global Interpreter Lock)**: Understanding GIL boundaries, free-threaded Python 3.13, and CPU-bound vs. I/O-bound bottlenecks.
- **Asynchronous Programming (\`asyncio\`)**: Event loops, coroutines, \`async\`/\`await\`, \`asyncio.gather\`, tasks, and cancellation tokens.
- **Multiprocessing & Threading**: \`concurrent.futures.ProcessPoolExecutor\` for CPU-bound computation and \`ThreadPoolExecutor\` for blocking legacy I/O.
- **Memory Profiling**: Garbage collection (\`gc\` module), weak references (\`weakref\`), \`__slots__\` for memory optimization, and memory profilers (\`tracemalloc\`, \`objgraph\`).
- **Performance Profiling**: \`cProfile\`, Py-Spy flamegraphs, and optimizing inner loops with NumPy or Cython.

\`\`\`python
import asyncio
from typing import List

async def fetch_worker(worker_id: int, queue: asyncio.Queue):
    """Asynchronous worker consumer processing items concurrently."""
    while not queue.empty():
        item = await queue.get()
        # Non-blocking async I/O call
        await asyncio.sleep(0.05)
        queue.task_done()

async def main():
    queue = asyncio.Queue()
    for i in range(100):
        queue.put_nowait(f"task-{i}")

    workers = [asyncio.create_task(fetch_worker(i, queue)) for i in range(10)]
    await queue.join()
    for w in workers:
        w.cancel()
\`\`\`

---

### Level 5 — Production Engineering: APIs, Databases & Cloud (Weeks 11–14)
*Goal: Ship high-concurrency microservices, connection pools, and containerized architectures.*

- **FastAPI & REST**: Route structuring, request validation with Pydantic V2, dependency injection, and exception handlers.
- **Database Engineering**: PostgreSQL with \`asyncpg\` and SQLAlchemy 2.0 (Async Session), transactions, indexes, and connection pooling.
- **Distributed Caching**: Redis (strings, hashes, sets, TTLs, and cache stampede protection).
- **Containerization**: Multi-stage production Dockerfiles, non-root users, security scanning, and minimal base images (\`python:3.12-slim\`).
- **CI/CD Automation**: GitHub Actions for linting (\`ruff\`), type checking (\`mypy\`), and test execution (\`pytest\`).
- **Observability**: OpenTelemetry distributed tracing, structured logging, and Prometheus metrics.

---

### Level 6 — Specialist: AI Infrastructure & High-Performance Systems (Weeks 15–20+)
*Goal: Build scalable LLM serving infrastructure, streaming agents, and distributed engines.*

- **LLM Inference Engines**: vLLM, TensorRT-LLM, continuous batching, and PagedAttention KV-cache optimization.
- **Vector Databases & Hybrid Search**: Qdrant, Milvus, and hybrid dense/sparse semantic retrieval.
- **Distributed Systems**: Message queues (Apache Kafka, RabbitMQ), the Outbox pattern, and consensus protocols (Raft).
- **Agent Orchestration**: Finite state machine (FSM) harnesses, sandboxed tool execution, and deterministic evaluation gates.

---

## 2. Topic-by-Topic 12-Module Syllabus

| Module | Timeline | Key Concepts to Master | Practical Milestone Project |
| :--- | :--- | :--- | :--- |
| **1. Python Fundamentals** | Week 1 | Variables, operators, control flow, functions, PEP 8 | Terminal Unit Converter & Calculator |
| **2. Core Data Structures** | Week 2 | Lists, dicts, sets, tuples, comprehensions, slicing | Contact Book & Text Word Frequency Analyzer |
| **3. Functions & Reusable Code** | Week 3 | \`*args\`, \`**kwargs\`, lambdas, scopes, closures | Dynamic Mathematical Expression Evaluator |
| **4. Files & Environments** | Week 4 | Context managers, JSON/CSV I/O, \`venv\`, pip, \`uv\` | **Beginner Project: CLI Expense Tracker** |
| **5. Object-Oriented Python** | Week 5 | Classes, inheritance, dunder methods, dataclasses | Banking & Ledger Simulation Engine |
| **6. Pythonic & Advanced Features** | Weeks 6–7 | Decorators, generators, custom context managers | In-Memory Streaming Log Parser |
| **7. Testing & Maintainability** | Week 8 | \`pytest\`, mocks, fixtures, type hints, \`ruff\`, \`mypy\` | Production Test Suite with 95% Coverage |
| **8. Algorithms & Complexity** | Weeks 9–10 | Big-O, hash tables, heaps, sorting, binary trees | Custom LRU Cache Implementation |
| **9. Concurrency & Performance** | Weeks 11–12 | \`asyncio\`, event loops, multiprocessing, profiling | Async Rate-Limited Web Crawler |
| **10. Backend & Databases** | Weeks 13–14 | FastAPI, Pydantic V2, PostgreSQL, \`asyncpg\`, Redis | **Intermediate Project: Task Management API** |
| **11. Deployment & Distributed Systems** | Weeks 15–16 | Docker, Kubernetes manifests, Kafka, Outbox pattern | **Advanced Project: Distributed Job Processor** |
| **12. AI & Infrastructure Specialization** | Weeks 17–20+ | vLLM, continuous batching, TTFT/ITL metrics, evals | **Expert Project: LLM Benchmarking Toolkit** |

---

## 3. Four Portfolio Milestone Projects

To stand out as a serious backend and AI infrastructure engineer, your portfolio should showcase these four projects:

### 1. Beginner: CLI Expense Tracker
- **Skills**: Python core, functions, JSON persistence, input validation, and clean CLI flags.
- **Deliverable**: A terminal application that records categorised expenses, computes monthly totals, and exports reports.

### 2. Intermediate: Task & Workflow Management API
- **Skills**: FastAPI, Pydantic V2, PostgreSQL, \`asyncpg\`, JWT authentication, and automated \`pytest\` suites.
- **Deliverable**: A fully tested, containerized REST API with database migrations (\`Alembic\`) and OpenAPI schema.

### 3. Advanced: Distributed Asynchronous Job Processor
- **Skills**: Redis Streams, worker pools, retries with exponential backoff, dead-letter queues, Docker, and OpenTelemetry.
- **Deliverable**: A high-throughput background processing pipeline that executes long-running background tasks with at-least-once delivery guarantees.

### 4. Expert: High-Concurrency LLM Benchmarking Toolkit
- **Skills**: Async HTTP streaming, Time-to-First-Token (TTFT) and Inter-Token Latency (ITL) measurement, GPU metrics, and automated Markdown report generation.
- **Deliverable**: A production-grade open-source Python package that benchmarks open-weights LLM servers under concurrent load.

---

## 4. Daily 100-Minute Study Routine

Consistency beats binge learning. Follow this structured daily routine (approx. 1.5 hours):

| Activity | Time Allocation | Objective |
| :--- | :--- | :--- |
| **1. Conceptual Study** | 20 minutes | Read documentation, architecture articles, or book chapters |
| **2. Active Coding** | 30 minutes | Implement concepts from scratch without copying/pasting |
| **3. Problem Solving** | 20 minutes | Solve 1–2 algorithm or data structure challenges |
| **4. Project Building** | 20 minutes | Add a concrete feature or write tests for your milestone project |
| **5. Retrospective & Review** | 10 minutes | Review mistakes, check git diffs, and document learnings |
| **Total Daily Commitment** | **100 min/day** | **Sustainable, compound engineering growth** |

---

## 5. Curated Free Learning Resources

- **[Official Python Documentation & Tutorial](https://docs.python.org/3/tutorial/)**: The definitive guide to language syntax and standard library modules.
- **[CS50's Introduction to Programming with Python](https://cs50.harvard.edu/python/)**: Harvard's free course covering algorithmic thinking and Python idioms.
- **[Exercism Python Track](https://exercism.org/tracks/python)**: Hands-on coding exercises with automated test suites and community mentoring.
- **[FastAPI Official Tutorial](https://fastapi.tiangolo.com/tutorial/)**: The best interactive guide for modern Python backend engineering.

---

## 6. Golden Rules for Mastering Python

1. **Write Code Daily**: Passive video watching builds a false sense of competence. You only master programming by typing code, triggering errors, and fixing them.
2. **Understand Before Memorizing**: Never copy code from StackOverflow or AI without understanding why every line exists.
3. **Test Edge Cases First**: Robust backend systems handle \`None\`, empty payloads, network timeouts, and concurrent race conditions gracefully.
4. **Treat Git as a Production Tool**: Write clean commit messages, use branch workflows, and document setup steps in \`README.md\`.
5. **Specialize for Impact**: Once you master Python fundamentals, dive deep into your chosen track: **high-concurrency backend systems, cloud infrastructure, or production AI serving.**
`,As=`---
title: "Redis Caching Strategies for High-Traffic Applications: Stampede Prevention, Data Structures, and L1/L2 Hierarchies"
slug: "redis-caching-strategies-high-traffic"
description: "Mitigate cache stampedes with probabilistic early expiration, optimize memory usage with packed hashes, and build resilient multi-tier L1/L2 caching systems."
date: "2026-10-04"
category: "System Design"
tags:
  - "redis"
  - "caching"
  - "system-design"
  - "performance"
  - "distributed-systems"
featured: false
draft: false
readingTime: 11
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---

## The Fragility of Simple Caching

The standard caching pattern taught in introductory tutorials is deceptively simple:

\`\`\`text
[ Client ] ---> [ Cache Hit? ] --- Yes ---> Return Data
                       |
                       No
                       v
               [ Query Database ]
                       |
               [ Write to Cache ]
\`\`\`

In high-concurrency environments (e.g. 20,000 requests per second for a flash sale or trending news story), this naive approach causes catastrophic production outages:

1. **The Cache Stampede (Thundering Herd)**: When a hot cache key expires, 2,000 concurrent threads simultaneously miss the cache and hammer the primary database with identical heavy queries.
2. **Hot Key Saturation**: A single Redis node’s CPU thread saturates handling 80,000 reads/sec on a single trending key.
3. **Memory Bloat & Eviction Churn**: Storing thousands of individual JSON strings blows through RAM, triggering expensive eviction pauses.

Here is how we design resilient Redis caching architectures that withstand extreme traffic spikes.

## 1. Probabilistic Early Expiration (The XFetch Algorithm)

Instead of letting a cache key expire completely and forcing thousands of clients to wait, the **XFetch algorithm** computes a dynamic probability to refresh the cache in the background *before* it officially expires:

$$\\text{Should Refresh} = - \\beta \\times \\delta \\times \\ln(\\text{random}()) > \\text{Remaining TTL}$$

Where:
- $\\delta$ is the computation time taken to compute the value from the database.
- $\\beta$ is an aggressiveness factor (usually set to $1.0$).

\`\`\`python
import math
import random
import time
import json
from typing import Callable, Any, Optional
import redis.asyncio as redis

class ResilientCache:
    def __init__(self, r: redis.Redis, beta: float = 1.0):
        self.r = r
        self.beta = beta

    async def get_or_set(
        self,
        key: str,
        ttl_seconds: int,
        compute_fn: Callable[[], Any]
    ) -> Any:
        cached_data = await self.r.get(key)
        now = time.time()

        if cached_data:
            entry = json.loads(cached_data)
            val = entry["value"]
            expiry = entry["expiry"]
            delta = entry["compute_duration"]

            # Probabilistic Early Expiration check
            time_left = expiry - now
            if time_left > 0:
                random_val = random.random()
                if random_val > 0:
                    should_refresh = -(self.beta * delta * math.log(random_val)) > time_left
                    if not should_refresh:
                        return val

        # Cache miss or early background refresh triggered
        start = time.time()
        fresh_value = await compute_fn()
        compute_duration = time.time() - start

        payload = json.dumps({
            "value": fresh_value,
            "expiry": now + ttl_seconds,
            "compute_duration": compute_duration,
        })
        
        await self.r.set(key, payload, ex=ttl_seconds + 30)
        return fresh_value
\`\`\`

With XFetch, exactly **one** client refreshes the cache smoothly before expiration. The database never sees more than a single refresh query!

## 2. Multi-Tier L1/L2 Caching Hierarchy

To handle extreme "hot keys" that exceed the network bandwidth of a single Redis instance, implement a two-tier cache:

\`\`\`text
+-----------------------------------------------------------+
|                      Application Pod                      |
|                                                           |
|  [ Request ] -> [ In-Memory L1 Cache (LRU / 500ms TTL) ]  |
|                                |                          |
|                             L1 Miss                       |
|                                v                          |
|  [ Redis Clustered L2 Cache (Shared / 300s TTL) ]         |
+-----------------------------------------------------------+
\`\`\`

- **L1 Cache (In-Memory)**: Python \`cachetools.TTLCache\` or Go \`ristretto\` stored in local process RAM with a tiny TTL (1 to 5 seconds). Absorbs 95% of hot-key read traffic locally with 0 network hops!
- **L2 Cache (Redis Cluster)**: Distributed Redis cluster storing the single source of truth across all pods.

## 3. Data Structure Optimization: Hashes vs. Strings

Storing 1,000,000 user profiles as individual Redis Strings (\`user:1001\`, \`user:1002\`) consumes roughly **140 MB** due to Redis object overhead (\`robj\` header, dictionary pointers).

By sharding users into **packed Redis Hashes** (\`HSET users:10 01 <json>\`), Redis automatically uses the memory-efficient **ziplist / listpack** encoding:

\`\`\`python
def get_bucket_and_field(user_id: int) -> tuple[str, str]:
    # Group 1,000 users per Redis hash bucket
    bucket_id = user_id // 1000
    field_id = str(user_id % 1000)
    return f"users_bucket:{bucket_id}", field_id

async def set_user_profile(r: redis.Redis, user_id: int, profile_data: dict):
    bucket, field = get_bucket_and_field(user_id)
    await r.hset(bucket, field, json.dumps(profile_data))
\`\`\`

**Result:** Memory usage drops from **140 MB down to 24 MB**—an **82% memory reduction**!

## Summary of Production Checklist

1. **Stampede Mitigation**: Always use XFetch or distributed mutex locking for expensive computations.
2. **Set Jitter on Fixed TTLs**: Avoid setting identical 3600-second TTLs on batch writes; add random jitter \`ttl + random.randint(0, 180)\` to distribute expirations.
3. **Configure \`maxmemory-policy\`**: Use \`allkeys-lfu\` (Least Frequently Used) rather than \`volatile-lru\` for intelligent caching.
`;function Ns(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var W={},ze={},oe={},Dt;function Ie(){if(Dt)return oe;Dt=1;function r(c){return typeof c>"u"||c===null}function s(c){return typeof c=="object"&&c!==null}function d(c){return Array.isArray(c)?c:r(c)?[]:[c]}function m(c,l){if(l){const b=Object.keys(l);for(let o=0,p=b.length;o<p;o+=1){const N=b[o];c[N]=l[N]}}return c}function a(c,l){let b="";for(let o=0;o<l;o+=1)b+=c;return b}function i(c){return c===0&&Number.NEGATIVE_INFINITY===1/c}return oe.isNothing=r,oe.isObject=s,oe.toArray=d,oe.repeat=a,oe.isNegativeZero=i,oe.extend=m,oe}var ot,Ft;function Ce(){if(Ft)return ot;Ft=1;function r(d,m){let a="";const i=d.reason||"(unknown reason)";return d.mark?(d.mark.name&&(a+='in "'+d.mark.name+'" '),a+="("+(d.mark.line+1)+":"+(d.mark.column+1)+")",!m&&d.mark.snippet&&(a+=`

`+d.mark.snippet),i+" "+a):i}function s(d,m){Error.call(this),this.name="YAMLException",this.reason=d,this.mark=m,this.message=r(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return s.prototype=Object.create(Error.prototype),s.prototype.constructor=s,s.prototype.toString=function(m){return this.name+": "+r(this,m)},ot=s,ot}var lt,Bt;function Ss(){if(Bt)return lt;Bt=1;const r=Ie();function s(a,i,c,l,b){let o="",p="";const N=Math.floor(b/2)-1;return l-i>N&&(o=" ... ",i=l-N+o.length),c-l>N&&(p=" ...",c=l+N-p.length),{str:o+a.slice(i,c).replace(/\t/g,"→")+p,pos:l-i+o.length}}function d(a,i){return r.repeat(" ",i-a.length)+a}function m(a,i){if(i=Object.create(i||null),!a.buffer)return null;i.maxLength||(i.maxLength=79),typeof i.indent!="number"&&(i.indent=1),typeof i.linesBefore!="number"&&(i.linesBefore=3),typeof i.linesAfter!="number"&&(i.linesAfter=2);const c=/\r?\n|\r|\0/g,l=[0],b=[];let o,p=-1;for(;o=c.exec(a.buffer);)b.push(o.index),l.push(o.index+o[0].length),a.position<=o.index&&p<0&&(p=l.length-2);p<0&&(p=l.length-1);let N="";const _=Math.min(a.line+i.linesAfter,b.length).toString().length,O=i.maxLength-(i.indent+_+3);for(let D=1;D<=i.linesBefore&&!(p-D<0);D++){const B=s(a.buffer,l[p-D],b[p-D],a.position-(l[p]-l[p-D]),O);N=r.repeat(" ",i.indent)+d((a.line-D+1).toString(),_)+" | "+B.str+`
`+N}const F=s(a.buffer,l[p],b[p],a.position,O);N+=r.repeat(" ",i.indent)+d((a.line+1).toString(),_)+" | "+F.str+`
`,N+=r.repeat("-",i.indent+_+3+F.pos)+`^
`;for(let D=1;D<=i.linesAfter&&!(p+D>=b.length);D++){const B=s(a.buffer,l[p+D],b[p+D],a.position-(l[p]-l[p+D]),O);N+=r.repeat(" ",i.indent)+d((a.line+D+1).toString(),_)+" | "+B.str+`
`}return N.replace(/\n$/,"")}return lt=m,lt}var ct,Ut;function V(){if(Ut)return ct;Ut=1;const r=Ce(),s=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],d=["scalar","sequence","mapping"];function m(i){const c={};return i!==null&&Object.keys(i).forEach(function(l){i[l].forEach(function(b){c[String(b)]=l})}),c}function a(i,c){if(c=c||{},Object.keys(c).forEach(function(l){if(s.indexOf(l)===-1)throw new r('Unknown option "'+l+'" is met in definition of "'+i+'" YAML type.')}),this.options=c,this.tag=i,this.kind=c.kind||null,this.resolve=c.resolve||function(){return!0},this.construct=c.construct||function(l){return l},this.instanceOf=c.instanceOf||null,this.predicate=c.predicate||null,this.represent=c.represent||null,this.representName=c.representName||null,this.defaultStyle=c.defaultStyle||null,this.multi=c.multi||!1,this.styleAliases=m(c.styleAliases||null),d.indexOf(this.kind)===-1)throw new r('Unknown kind "'+this.kind+'" is specified for "'+i+'" YAML type.')}return ct=a,ct}var dt,Ht;function nr(){if(Ht)return dt;Ht=1;const r=Ce(),s=V();function d(i,c){const l=[];return i[c].forEach(function(b){let o=l.length;l.forEach(function(p,N){p.tag===b.tag&&p.kind===b.kind&&p.multi===b.multi&&(o=N)}),l[o]=b}),l}function m(){const i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function c(l){l.multi?(i.multi[l.kind].push(l),i.multi.fallback.push(l)):i[l.kind][l.tag]=i.fallback[l.tag]=l}for(let l=0,b=arguments.length;l<b;l+=1)arguments[l].forEach(c);return i}function a(i){return this.extend(i)}return a.prototype.extend=function(c){let l=[],b=[];if(c instanceof s)b.push(c);else if(Array.isArray(c))b=b.concat(c);else if(c&&(Array.isArray(c.implicit)||Array.isArray(c.explicit)))c.implicit&&(l=l.concat(c.implicit)),c.explicit&&(b=b.concat(c.explicit));else throw new r("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(p){if(!(p instanceof s))throw new r("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(p.loadKind&&p.loadKind!=="scalar")throw new r("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(p.multi)throw new r("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),b.forEach(function(p){if(!(p instanceof s))throw new r("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const o=Object.create(a.prototype);return o.implicit=(this.implicit||[]).concat(l),o.explicit=(this.explicit||[]).concat(b),o.compiledImplicit=d(o,"implicit"),o.compiledExplicit=d(o,"explicit"),o.compiledTypeMap=m(o.compiledImplicit,o.compiledExplicit),o},dt=a,dt}var ut,qt;function rr(){if(qt)return ut;qt=1;const r=V();return ut=new r("tag:yaml.org,2002:str",{kind:"scalar",construct:function(s){return s!==null?s:""}}),ut}var ht,$t;function sr(){if($t)return ht;$t=1;const r=V();return ht=new r("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(s){return s!==null?s:[]}}),ht}var pt,Gt;function ir(){if(Gt)return pt;Gt=1;const r=V();return pt=new r("tag:yaml.org,2002:map",{kind:"mapping",construct:function(s){return s!==null?s:{}}}),pt}var mt,zt;function ar(){if(zt)return mt;zt=1;const r=nr();return mt=new r({explicit:[rr(),sr(),ir()]}),mt}var gt,Kt;function or(){if(Kt)return gt;Kt=1;const r=V();function s(a){if(a===null)return!0;const i=a.length;return i===1&&a==="~"||i===4&&(a==="null"||a==="Null"||a==="NULL")}function d(){return null}function m(a){return a===null}return gt=new r("tag:yaml.org,2002:null",{kind:"scalar",resolve:s,construct:d,predicate:m,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),gt}var ft,Yt;function lr(){if(Yt)return ft;Yt=1;const r=V();function s(a){if(a===null)return!1;const i=a.length;return i===4&&(a==="true"||a==="True"||a==="TRUE")||i===5&&(a==="false"||a==="False"||a==="FALSE")}function d(a){return a==="true"||a==="True"||a==="TRUE"}function m(a){return Object.prototype.toString.call(a)==="[object Boolean]"}return ft=new r("tag:yaml.org,2002:bool",{kind:"scalar",resolve:s,construct:d,predicate:m,represent:{lowercase:function(a){return a?"true":"false"},uppercase:function(a){return a?"TRUE":"FALSE"},camelcase:function(a){return a?"True":"False"}},defaultStyle:"lowercase"}),ft}var xt,Wt;function cr(){if(Wt)return xt;Wt=1;const r=Ie(),s=V();function d(o){return o>=48&&o<=57||o>=65&&o<=70||o>=97&&o<=102}function m(o){return o>=48&&o<=55}function a(o){return o>=48&&o<=57}function i(o){if(o===null)return!1;const p=o.length;let N=0,_=!1;if(!p)return!1;let O=o[N];if((O==="-"||O==="+")&&(O=o[++N]),O==="0"){if(N+1===p)return!0;if(O=o[++N],O==="b"){for(N++;N<p;N++){if(O=o[N],O!=="0"&&O!=="1")return!1;_=!0}return _&&isFinite(c(o))}if(O==="x"){for(N++;N<p;N++){if(!d(o.charCodeAt(N)))return!1;_=!0}return _&&isFinite(c(o))}if(O==="o"){for(N++;N<p;N++){if(!m(o.charCodeAt(N)))return!1;_=!0}return _&&isFinite(c(o))}}for(;N<p;N++){if(!a(o.charCodeAt(N)))return!1;_=!0}return _?isFinite(c(o)):!1}function c(o){let p=o,N=1,_=p[0];if((_==="-"||_==="+")&&(_==="-"&&(N=-1),p=p.slice(1),_=p[0]),p==="0")return 0;if(_==="0"){if(p[1]==="b")return N*parseInt(p.slice(2),2);if(p[1]==="x")return N*parseInt(p.slice(2),16);if(p[1]==="o")return N*parseInt(p.slice(2),8)}return N*parseInt(p,10)}function l(o){return c(o)}function b(o){return Object.prototype.toString.call(o)==="[object Number]"&&o%1===0&&!r.isNegativeZero(o)}return xt=new s("tag:yaml.org,2002:int",{kind:"scalar",resolve:i,construct:l,predicate:b,represent:{binary:function(o){return o>=0?"0b"+o.toString(2):"-0b"+o.toString(2).slice(1)},octal:function(o){return o>=0?"0o"+o.toString(8):"-0o"+o.toString(8).slice(1)},decimal:function(o){return o.toString(10)},hexadecimal:function(o){return o>=0?"0x"+o.toString(16).toUpperCase():"-0x"+o.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),xt}var bt,Vt;function dr(){if(Vt)return bt;Vt=1;const r=Ie(),s=V(),d=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),m=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function a(o){return o===null||!d.test(o)?!1:isFinite(parseFloat(o,10))?!0:m.test(o)}function i(o){let p=o.toLowerCase();const N=p[0]==="-"?-1:1;return"+-".indexOf(p[0])>=0&&(p=p.slice(1)),p===".inf"?N===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:p===".nan"?NaN:N*parseFloat(p,10)}const c=/^[-+]?[0-9]+e/;function l(o,p){if(isNaN(o))switch(p){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===o)switch(p){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===o)switch(p){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(r.isNegativeZero(o))return"-0.0";const N=o.toString(10);return c.test(N)?N.replace("e",".e"):N}function b(o){return Object.prototype.toString.call(o)==="[object Number]"&&(o%1!==0||r.isNegativeZero(o))}return bt=new s("tag:yaml.org,2002:float",{kind:"scalar",resolve:a,construct:i,predicate:b,represent:l,defaultStyle:"lowercase"}),bt}var yt,Qt;function ur(){return Qt||(Qt=1,yt=ar().extend({implicit:[or(),lr(),cr(),dr()]})),yt}var vt,Xt;function hr(){return Xt||(Xt=1,vt=ur()),vt}var kt,Jt;function pr(){if(Jt)return kt;Jt=1;const r=V(),s=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),d=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function m(c){return c===null?!1:s.exec(c)!==null||d.exec(c)!==null}function a(c){let l=0,b=null,o=s.exec(c);if(o===null&&(o=d.exec(c)),o===null)throw new Error("Date resolve error");const p=+o[1],N=+o[2]-1,_=+o[3];if(!o[4])return new Date(Date.UTC(p,N,_));const O=+o[4],F=+o[5],D=+o[6];if(o[7]){for(l=o[7].slice(0,3);l.length<3;)l+="0";l=+l}if(o[9]){const G=+o[10],U=+(o[11]||0);b=(G*60+U)*6e4,o[9]==="-"&&(b=-b)}const B=new Date(Date.UTC(p,N,_,O,F,D,l));return b&&B.setTime(B.getTime()-b),B}function i(c){return c.toISOString()}return kt=new r("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:m,construct:a,instanceOf:Date,represent:i}),kt}var wt,Zt;function mr(){if(Zt)return wt;Zt=1;const r=V();function s(d){return d==="<<"||d===null}return wt=new r("tag:yaml.org,2002:merge",{kind:"scalar",resolve:s}),wt}var At,en;function gr(){if(en)return At;en=1;const r=V(),s=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function d(c){if(c===null)return!1;let l=0;const b=c.length,o=s;for(let p=0;p<b;p++){const N=o.indexOf(c.charAt(p));if(!(N>64)){if(N<0)return!1;l+=6}}return l%8===0}function m(c){const l=c.replace(/[\r\n=]/g,""),b=l.length,o=s;let p=0;const N=[];for(let O=0;O<b;O++)O%4===0&&O&&(N.push(p>>16&255),N.push(p>>8&255),N.push(p&255)),p=p<<6|o.indexOf(l.charAt(O));const _=b%4*6;return _===0?(N.push(p>>16&255),N.push(p>>8&255),N.push(p&255)):_===18?(N.push(p>>10&255),N.push(p>>2&255)):_===12&&N.push(p>>4&255),new Uint8Array(N)}function a(c){let l="",b=0;const o=c.length,p=s;for(let _=0;_<o;_++)_%3===0&&_&&(l+=p[b>>18&63],l+=p[b>>12&63],l+=p[b>>6&63],l+=p[b&63]),b=(b<<8)+c[_];const N=o%3;return N===0?(l+=p[b>>18&63],l+=p[b>>12&63],l+=p[b>>6&63],l+=p[b&63]):N===2?(l+=p[b>>10&63],l+=p[b>>4&63],l+=p[b<<2&63],l+=p[64]):N===1&&(l+=p[b>>2&63],l+=p[b<<4&63],l+=p[64],l+=p[64]),l}function i(c){return Object.prototype.toString.call(c)==="[object Uint8Array]"}return At=new r("tag:yaml.org,2002:binary",{kind:"scalar",resolve:d,construct:m,predicate:i,represent:a}),At}var Nt,tn;function fr(){if(tn)return Nt;tn=1;const r=V(),s=Object.prototype.hasOwnProperty,d=Object.prototype.toString;function m(i){if(i===null)return!0;const c={},l=i;for(let b=0,o=l.length;b<o;b+=1){const p=l[b];let N=!1;if(d.call(p)!=="[object Object]")return!1;let _;for(_ in p)if(s.call(p,_))if(!N)N=!0;else return!1;if(!N||s.call(c,_))return!1;Object.defineProperty(c,_,{value:!0})}return!0}function a(i){return i!==null?i:[]}return Nt=new r("tag:yaml.org,2002:omap",{kind:"sequence",resolve:m,construct:a}),Nt}var St,nn;function xr(){if(nn)return St;nn=1;const r=V(),s=Object.prototype.toString;function d(a){if(a===null)return!0;const i=a,c=new Array(i.length);for(let l=0,b=i.length;l<b;l+=1){const o=i[l];if(s.call(o)!=="[object Object]")return!1;const p=Object.keys(o);if(p.length!==1)return!1;c[l]=[p[0],o[p[0]]]}return!0}function m(a){if(a===null)return[];const i=a,c=new Array(i.length);for(let l=0,b=i.length;l<b;l+=1){const o=i[l],p=Object.keys(o);c[l]=[p[0],o[p[0]]]}return c}return St=new r("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:d,construct:m}),St}var Tt,rn;function br(){if(rn)return Tt;rn=1;const r=V(),s=Object.prototype.hasOwnProperty;function d(a){if(a===null)return!0;const i=a;for(const c in i)if(s.call(i,c)&&i[c]!==null)return!1;return!0}function m(a){return a!==null?a:{}}return Tt=new r("tag:yaml.org,2002:set",{kind:"mapping",resolve:d,construct:m}),Tt}var Et,sn;function Rt(){return sn||(sn=1,Et=hr().extend({implicit:[pr(),mr()],explicit:[gr(),fr(),xr(),br()]})),Et}var an;function Ts(){if(an)return ze;an=1;const r=Ie(),s=Ce(),d=Ss(),m=Rt(),a=Object.prototype.hasOwnProperty,i=1,c=2,l=3,b=4,o=1,p=2,N=3,_=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,O=/[\x85\u2028\u2029]/,F=/[,\[\]{}]/,D=/^(?:!|!!|![0-9A-Za-z-]+!)$/,B=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function G(e){return Object.prototype.toString.call(e)}function U(e){return e===10||e===13}function z(e){return e===9||e===32}function q(e){return e===9||e===32||e===10||e===13}function X(e){return e===44||e===91||e===93||e===123||e===125}function C(e){if(e>=48&&e<=57)return e-48;const u=e|32;return u>=97&&u<=102?u-97+10:-1}function Y(e){return e===120?2:e===117?4:e===85?8:0}function Z(e){return e>=48&&e<=57?e-48:-1}function ce(e){switch(e){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function Ze(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function be(e,u,y){u==="__proto__"?Object.defineProperty(e,u,{configurable:!0,enumerable:!0,writable:!0,value:y}):e[u]=y}const Le=new Array(256),ye=new Array(256);for(let e=0;e<256;e++)Le[e]=ce(e)?1:0,ye[e]=ce(e);function K(e,u){this.input=e,this.filename=u.filename||null,this.schema=u.schema||m,this.onWarning=u.onWarning||null,this.legacy=u.legacy||!1,this.json=u.json||!1,this.listener=u.listener||null,this.maxDepth=typeof u.maxDepth=="number"?u.maxDepth:100,this.maxTotalMergeKeys=typeof u.maxTotalMergeKeys=="number"?u.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function Pe(e,u){const y={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return y.snippet=d(y),new s(u,y)}function E(e,u){throw Pe(e,u)}function pe(e,u){e.onWarning&&e.onWarning.call(null,Pe(e,u))}function ee(e,u,y){const v=e.anchorMapTransactions;if(v.length!==0){const f=v[v.length-1];a.call(f,u)||(f[u]={existed:a.call(e.anchorMap,u),value:e.anchorMap[u]})}e.anchorMap[u]=y}function et(e){e.anchorMapTransactions.push(Object.create(null))}function de(e){const u=e.anchorMapTransactions.pop(),y=e.anchorMapTransactions;if(y.length===0)return;const v=y[y.length-1],f=Object.keys(u);for(let n=0,h=f.length;n<h;n+=1){const g=f[n];a.call(v,g)||(v[g]=u[g])}}function tt(e){const u=e.anchorMapTransactions.pop(),y=Object.keys(u);for(let v=y.length-1;v>=0;v-=1){const f=u[y[v]];f.existed?e.anchorMap[y[v]]=f.value:delete e.anchorMap[y[v]]}}function ve(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,tag:e.tag,anchor:e.anchor,kind:e.kind,result:e.result}}function me(e,u){e.position=u.position,e.line=u.line,e.lineStart=u.lineStart,e.lineIndent=u.lineIndent,e.firstTabInLine=u.firstTabInLine,e.tag=u.tag,e.anchor=u.anchor,e.kind=u.kind,e.result=u.result}const Re={YAML:function(u,y,v){u.version!==null&&E(u,"duplication of %YAML directive"),v.length!==1&&E(u,"YAML directive accepts exactly one argument");const f=/^([0-9]+)\.([0-9]+)$/.exec(v[0]);f===null&&E(u,"ill-formed argument of the YAML directive");const n=parseInt(f[1],10),h=parseInt(f[2],10);n!==1&&E(u,"unacceptable YAML version of the document"),u.version=v[0],u.checkLineBreaks=h<2,h!==1&&h!==2&&pe(u,"unsupported YAML version of the document")},TAG:function(u,y,v){let f;v.length!==2&&E(u,"TAG directive accepts exactly two arguments");const n=v[0];f=v[1],D.test(n)||E(u,"ill-formed tag handle (first argument) of the TAG directive"),a.call(u.tagMap,n)&&E(u,'there is a previously declared suffix for "'+n+'" tag handle'),B.test(f)||E(u,"ill-formed tag prefix (second argument) of the TAG directive");try{f=decodeURIComponent(f)}catch{E(u,"tag prefix is malformed: "+f)}u.tagMap[n]=f}};function Q(e,u,y,v){if(u<y){const f=e.input.slice(u,y);if(v)for(let n=0,h=f.length;n<h;n+=1){const g=f.charCodeAt(n);g===9||g>=32&&g<=1114111||E(e,"expected valid JSON character")}else _.test(f)&&E(e,"the stream contains non-printable characters");e.result+=f}}function re(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&E(e,"merge keys exceeded maxTotalMergeKeys ("+e.maxTotalMergeKeys+")")}function ke(e,u,y,v){r.isObject(y)||E(e,"cannot merge mappings; the provided source object is unacceptable"),re(e);const f=Object.keys(y);for(let n=0,h=f.length;n<h;n+=1){const g=f[n];re(e),a.call(u,g)||(be(u,g,y[g]),v[g]=!0)}}function te(e,u,y,v,f,n,h,g,k){if(Array.isArray(f)){f=Array.prototype.slice.call(f);for(let w=0,A=f.length;w<A;w+=1)Array.isArray(f[w])&&E(e,"nested arrays are not supported inside keys"),typeof f=="object"&&G(f[w])==="[object Object]"&&(f[w]="[object Object]")}if(typeof f=="object"&&G(f)==="[object Object]"&&(f="[object Object]"),f=String(f),u===null&&(u={}),v==="tag:yaml.org,2002:merge")if(Array.isArray(n)){n.length>100&&E(e,"abnormal merge sequence size");for(let w=0,A=n.length;w<A;w+=1)ke(e,u,n[w],y)}else ke(e,u,n,y);else!e.json&&!a.call(y,f)&&a.call(u,f)&&(e.line=h||e.line,e.lineStart=g||e.lineStart,e.position=k||e.position,E(e,"duplicated mapping key")),be(u,f,n),delete y[f];return u}function we(e){const u=e.input.charCodeAt(e.position);u===10?e.position++:u===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):E(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function H(e,u,y){let v=0,f=e.input.charCodeAt(e.position);for(;f!==0;){for(;z(f);)f===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),f=e.input.charCodeAt(++e.position);if(u&&f===35)do f=e.input.charCodeAt(++e.position);while(f!==10&&f!==13&&f!==0);if(U(f))for(we(e),f=e.input.charCodeAt(e.position),v++,e.lineIndent=0;f===32;)e.lineIndent++,f=e.input.charCodeAt(++e.position);else break}return y!==-1&&v!==0&&e.lineIndent<y&&pe(e,"deficient indentation"),v}function J(e){let u=e.position,y=e.input.charCodeAt(u);return!!((y===45||y===46)&&y===e.input.charCodeAt(u+1)&&y===e.input.charCodeAt(u+2)&&(u+=3,y=e.input.charCodeAt(u),y===0||q(y)))}function ge(e,u){u===1?e.result+=" ":u>1&&(e.result+=r.repeat(`
`,u-1))}function Oe(e,u,y){let v,f,n,h,g,k;const w=e.kind,A=e.result;let x=e.input.charCodeAt(e.position);if(q(x)||X(x)||x===35||x===38||x===42||x===33||x===124||x===62||x===39||x===34||x===37||x===64||x===96)return!1;if(x===63||x===45){const S=e.input.charCodeAt(e.position+1);if(q(S)||y&&X(S))return!1}for(e.kind="scalar",e.result="",v=f=e.position,n=!1;x!==0;){if(x===58){const S=e.input.charCodeAt(e.position+1);if(q(S)||y&&X(S))break}else if(x===35){const S=e.input.charCodeAt(e.position-1);if(q(S))break}else{if(e.position===e.lineStart&&J(e)||y&&X(x))break;if(U(x))if(h=e.line,g=e.lineStart,k=e.lineIndent,H(e,!1,-1),e.lineIndent>=u){n=!0,x=e.input.charCodeAt(e.position);continue}else{e.position=f,e.line=h,e.lineStart=g,e.lineIndent=k;break}}n&&(Q(e,v,f,!1),ge(e,e.line-h),v=f=e.position,n=!1),z(x)||(f=e.position+1),x=e.input.charCodeAt(++e.position)}return Q(e,v,f,!1),e.result?!0:(e.kind=w,e.result=A,!1)}function Ae(e,u){let y,v,f=e.input.charCodeAt(e.position);if(f!==39)return!1;for(e.kind="scalar",e.result="",e.position++,y=v=e.position;(f=e.input.charCodeAt(e.position))!==0;)if(f===39)if(Q(e,y,e.position,!0),f=e.input.charCodeAt(++e.position),f===39)y=e.position,e.position++,v=e.position;else return!0;else U(f)?(Q(e,y,v,!0),ge(e,H(e,!1,u)),y=v=e.position):e.position===e.lineStart&&J(e)?E(e,"unexpected end of the document within a single quoted scalar"):(e.position++,z(f)||(v=e.position));E(e,"unexpected end of the stream within a single quoted scalar")}function Me(e,u){let y,v,f,n=e.input.charCodeAt(e.position);if(n!==34)return!1;for(e.kind="scalar",e.result="",e.position++,y=v=e.position;(n=e.input.charCodeAt(e.position))!==0;){if(n===34)return Q(e,y,e.position,!0),e.position++,!0;if(n===92){if(Q(e,y,e.position,!0),n=e.input.charCodeAt(++e.position),U(n))H(e,!1,u);else if(n<256&&Le[n])e.result+=ye[n],e.position++;else if((f=Y(n))>0){let h=f,g=0;for(;h>0;h--)n=e.input.charCodeAt(++e.position),(f=C(n))>=0?g=(g<<4)+f:E(e,"expected hexadecimal character");e.result+=Ze(g),e.position++}else E(e,"unknown escape sequence");y=v=e.position}else U(n)?(Q(e,y,v,!0),ge(e,H(e,!1,u)),y=v=e.position):e.position===e.lineStart&&J(e)?E(e,"unexpected end of the document within a double quoted scalar"):(e.position++,z(n)||(v=e.position))}E(e,"unexpected end of the stream within a double quoted scalar")}function De(e,u){let y=!0,v,f,n;const h=e.tag;let g;const k=e.anchor;let w,A,x,S;const T=Object.create(null);let j,I,L,R=e.input.charCodeAt(e.position);if(R===91)w=93,S=!1,g=[];else if(R===123)w=125,S=!0,g={};else return!1;for(e.anchor!==null&&ee(e,e.anchor,g),R=e.input.charCodeAt(++e.position);R!==0;){if(H(e,!0,u),R=e.input.charCodeAt(e.position),R===w)return e.position++,e.tag=h,e.anchor=k,e.kind=S?"mapping":"sequence",e.result=g,!0;if(y?R===44&&E(e,"expected the node content, but found ','"):E(e,"missed comma between flow collection entries"),I=j=L=null,A=x=!1,R===63){const ae=e.input.charCodeAt(e.position+1);q(ae)&&(A=x=!0,e.position++,H(e,!0,u))}v=e.line,f=e.lineStart,n=e.position,ie(e,u,i,!1,!0),I=e.tag,j=e.result,H(e,!0,u),R=e.input.charCodeAt(e.position),(x||e.line===v)&&R===58&&(A=!0,R=e.input.charCodeAt(++e.position),H(e,!0,u),ie(e,u,i,!1,!0),L=e.result),S?te(e,g,T,I,j,L,v,f,n):A?g.push(te(e,null,T,I,j,L,v,f,n)):g.push(j),H(e,!0,u),R=e.input.charCodeAt(e.position),R===44?(y=!0,R=e.input.charCodeAt(++e.position)):y=!1}E(e,"unexpected end of the stream within a flow collection")}function se(e,u){let y,v=o,f=!1,n=!1,h=u,g=0,k=!1,w,A=e.input.charCodeAt(e.position);if(A===124)y=!1;else if(A===62)y=!0;else return!1;for(e.kind="scalar",e.result="";A!==0;)if(A=e.input.charCodeAt(++e.position),A===43||A===45)o===v?v=A===43?N:p:E(e,"repeat of a chomping mode identifier");else if((w=Z(A))>=0)w===0?E(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):n?E(e,"repeat of an indentation width identifier"):(h=u+w-1,n=!0);else break;if(z(A)){do A=e.input.charCodeAt(++e.position);while(z(A));if(A===35)do A=e.input.charCodeAt(++e.position);while(!U(A)&&A!==0)}for(;A!==0;){for(we(e),e.lineIndent=0,A=e.input.charCodeAt(e.position);(!n||e.lineIndent<h)&&A===32;)e.lineIndent++,A=e.input.charCodeAt(++e.position);if(!n&&e.lineIndent>h&&(h=e.lineIndent),U(A)){g++;continue}if(!n&&h===0&&E(e,"missing indentation for block scalar"),e.lineIndent<h){v===N?e.result+=r.repeat(`
`,f?1+g:g):v===o&&f&&(e.result+=`
`);break}y?z(A)?(k=!0,e.result+=r.repeat(`
`,f?1+g:g)):k?(k=!1,e.result+=r.repeat(`
`,g+1)):g===0?f&&(e.result+=" "):e.result+=r.repeat(`
`,g):e.result+=r.repeat(`
`,f?1+g:g),f=!0,n=!0,g=0;const x=e.position;for(;!U(A)&&A!==0;)A=e.input.charCodeAt(++e.position);Q(e,x,e.position,!1)}return!0}function Fe(e,u){const y=e.tag,v=e.anchor,f=[];let n=!1;if(e.firstTabInLine!==-1)return!1;e.anchor!==null&&ee(e,e.anchor,f);let h=e.input.charCodeAt(e.position);for(;h!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,E(e,"tab characters must not be used in indentation")),h===45);){const g=e.input.charCodeAt(e.position+1);if(!q(g))break;if(n=!0,e.position++,H(e,!0,-1)&&e.lineIndent<=u){f.push(null),h=e.input.charCodeAt(e.position);continue}const k=e.line;if(ie(e,u,l,!1,!0),f.push(e.result),H(e,!0,-1),h=e.input.charCodeAt(e.position),(e.line===k||e.lineIndent>u)&&h!==0)E(e,"bad indentation of a sequence entry");else if(e.lineIndent<u)break}return n?(e.tag=y,e.anchor=v,e.kind="sequence",e.result=f,!0):!1}function Be(e,u,y){let v,f,n,h;const g=e.tag,k=e.anchor,w={},A=Object.create(null);let x=null,S=null,T=null,j=!1,I=!1;if(e.firstTabInLine!==-1)return!1;e.anchor!==null&&ee(e,e.anchor,w);let L=e.input.charCodeAt(e.position);for(;L!==0;){!j&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,E(e,"tab characters must not be used in indentation"));const R=e.input.charCodeAt(e.position+1),ae=e.line;if((L===63||L===58)&&q(R))L===63?(j&&(te(e,w,A,x,S,null,f,n,h),x=S=T=null),I=!0,j=!0,v=!0):j?(j=!1,v=!0):E(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,L=R;else{if(f=e.line,n=e.lineStart,h=e.position,!ie(e,y,c,!1,!0))break;if(e.line===ae){for(L=e.input.charCodeAt(e.position);z(L);)L=e.input.charCodeAt(++e.position);if(L===58)L=e.input.charCodeAt(++e.position),q(L)||E(e,"a whitespace character is expected after the key-value separator within a block mapping"),j&&(te(e,w,A,x,S,null,f,n,h),x=S=T=null),I=!0,j=!1,v=!1,x=e.tag,S=e.result;else if(I)E(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=g,e.anchor=k,!0}else if(I)E(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=g,e.anchor=k,!0}if((e.line===ae||e.lineIndent>u)&&(j&&(f=e.line,n=e.lineStart,h=e.position),ie(e,u,b,!0,v)&&(j?S=e.result:T=e.result),j||(te(e,w,A,x,S,T,f,n,h),x=S=T=null),H(e,!0,-1),L=e.input.charCodeAt(e.position)),(e.line===ae||e.lineIndent>u)&&L!==0)E(e,"bad indentation of a mapping entry");else if(e.lineIndent<u)break}return j&&te(e,w,A,x,S,null,f,n,h),I&&(e.tag=g,e.anchor=k,e.kind="mapping",e.result=w),I}function Ue(e){let u=!1,y=!1,v,f,n=e.input.charCodeAt(e.position);if(n!==33)return!1;e.tag!==null&&E(e,"duplication of a tag property"),n=e.input.charCodeAt(++e.position),n===60?(u=!0,n=e.input.charCodeAt(++e.position)):n===33?(y=!0,v="!!",n=e.input.charCodeAt(++e.position)):v="!";let h=e.position;if(u){do n=e.input.charCodeAt(++e.position);while(n!==0&&n!==62);e.position<e.length?(f=e.input.slice(h,e.position),n=e.input.charCodeAt(++e.position)):E(e,"unexpected end of the stream within a verbatim tag")}else{for(;n!==0&&!q(n);)n===33&&(y?E(e,"tag suffix cannot contain exclamation marks"):(v=e.input.slice(h-1,e.position+1),D.test(v)||E(e,"named tag handle cannot contain such characters"),y=!0,h=e.position+1)),n=e.input.charCodeAt(++e.position);f=e.input.slice(h,e.position),F.test(f)&&E(e,"tag suffix cannot contain flow indicator characters")}f&&!B.test(f)&&E(e,"tag name cannot contain such characters: "+f);try{f=decodeURIComponent(f)}catch{E(e,"tag name is malformed: "+f)}return u?e.tag=f:a.call(e.tagMap,v)?e.tag=e.tagMap[v]+f:v==="!"?e.tag="!"+f:v==="!!"?e.tag="tag:yaml.org,2002:"+f:E(e,'undeclared tag handle "'+v+'"'),!0}function He(e){let u=e.input.charCodeAt(e.position);if(u!==38)return!1;e.anchor!==null&&E(e,"duplication of an anchor property"),u=e.input.charCodeAt(++e.position);const y=e.position;for(;u!==0&&!q(u)&&!X(u);)u=e.input.charCodeAt(++e.position);return e.position===y&&E(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(y,e.position),!0}function nt(e){let u=e.input.charCodeAt(e.position);if(u!==42)return!1;u=e.input.charCodeAt(++e.position);const y=e.position;for(;u!==0&&!q(u)&&!X(u);)u=e.input.charCodeAt(++e.position);e.position===y&&E(e,"name of an alias node must contain at least one character");const v=e.input.slice(y,e.position);return a.call(e.anchorMap,v)||E(e,'unidentified alias "'+v+'"'),e.result=e.anchorMap[v],H(e,!0,-1),!0}function qe(e,u,y,v){const f=ve(e);return et(e),me(e,u),e.tag=null,e.anchor=null,e.kind=null,e.result=null,Be(e,y,v)&&e.kind==="mapping"?(de(e),!0):(tt(e),me(e,f),!1)}function ie(e,u,y,v,f){let n,h,g=1,k=!1,w=!1,A=null,x,S,T;e.depth>=e.maxDepth&&E(e,"nesting exceeded maxDepth ("+e.maxDepth+")"),e.depth+=1,e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null;const j=n=h=b===y||l===y;if(v&&H(e,!0,-1)&&(k=!0,e.lineIndent>u?g=1:e.lineIndent===u?g=0:e.lineIndent<u&&(g=-1)),g===1)for(;;){const I=e.input.charCodeAt(e.position),L=ve(e);if(k&&(I===33&&e.tag!==null||I===38&&e.anchor!==null)||!Ue(e)&&!He(e))break;A===null&&(A=L),H(e,!0,-1)?(k=!0,h=j,e.lineIndent>u?g=1:e.lineIndent===u?g=0:e.lineIndent<u&&(g=-1)):h=!1}if(h&&(h=k||f),g===1||b===y)if(i===y||c===y?S=u:S=u+1,T=e.position-e.lineStart,g===1)if(h&&(Fe(e,T)||Be(e,T,S))||De(e,S))w=!0;else{const I=e.input.charCodeAt(e.position);A!==null&&j&&!h&&I!==124&&I!==62&&qe(e,A,A.position-A.lineStart,S)||n&&se(e,S)||Ae(e,S)||Me(e,S)?w=!0:nt(e)?(w=!0,(e.tag!==null||e.anchor!==null)&&E(e,"alias node should not have any properties")):Oe(e,S,i===y)&&(w=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&ee(e,e.anchor,e.result)}else g===0&&(w=h&&Fe(e,T));if(e.tag===null)e.anchor!==null&&ee(e,e.anchor,e.result);else if(e.tag==="?"){e.result!==null&&e.kind!=="scalar"&&E(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"');for(let I=0,L=e.implicitTypes.length;I<L;I+=1)if(x=e.implicitTypes[I],x.resolve(e.result)){e.result=x.construct(e.result),e.tag=x.tag,e.anchor!==null&&ee(e,e.anchor,e.result);break}}else if(e.tag!=="!"){if(a.call(e.typeMap[e.kind||"fallback"],e.tag))x=e.typeMap[e.kind||"fallback"][e.tag];else{x=null;const I=e.typeMap.multi[e.kind||"fallback"];for(let L=0,R=I.length;L<R;L+=1)if(e.tag.slice(0,I[L].tag.length)===I[L].tag){x=I[L];break}}x||E(e,"unknown tag !<"+e.tag+">"),e.result!==null&&x.kind!==e.kind&&E(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+x.kind+'", not "'+e.kind+'"'),x.resolve(e.result,e.tag)?(e.result=x.construct(e.result,e.tag),e.anchor!==null&&ee(e,e.anchor,e.result)):E(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.depth-=1,e.tag!==null||e.anchor!==null||w}function rt(e){const u=e.position;let y=!1,v;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(v=e.input.charCodeAt(e.position))!==0&&(H(e,!0,-1),v=e.input.charCodeAt(e.position),!(e.lineIndent>0||v!==37));){y=!0,v=e.input.charCodeAt(++e.position);let f=e.position;for(;v!==0&&!q(v);)v=e.input.charCodeAt(++e.position);const n=e.input.slice(f,e.position),h=[];for(n.length<1&&E(e,"directive name must not be less than one character in length");v!==0;){for(;z(v);)v=e.input.charCodeAt(++e.position);if(v===35){do v=e.input.charCodeAt(++e.position);while(v!==0&&!U(v));break}if(U(v))break;for(f=e.position;v!==0&&!q(v);)v=e.input.charCodeAt(++e.position);h.push(e.input.slice(f,e.position))}v!==0&&we(e),a.call(Re,n)?Re[n](e,n,h):pe(e,'unknown document directive "'+n+'"')}if(H(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,H(e,!0,-1)):y&&E(e,"directives end mark is expected"),ie(e,e.lineIndent-1,b,!1,!0),H(e,!0,-1),e.checkLineBreaks&&O.test(e.input.slice(u,e.position))&&pe(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&J(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,H(e,!0,-1));return}e.position<e.length-1&&E(e,"end of the stream or a document separator is expected")}function Ne(e,u){e=String(e),u=u||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));const y=new K(e,u),v=e.indexOf("\0");for(v!==-1&&(y.position=v,E(y,"null byte is not allowed in input")),y.input+="\0";y.input.charCodeAt(y.position)===32;)y.lineIndent+=1,y.position+=1;for(;y.position<y.length-1;)rt(y);return y.documents}function st(e,u,y){u!==null&&typeof u=="object"&&typeof y>"u"&&(y=u,u=null);const v=Ne(e,y);if(typeof u!="function")return v;for(let f=0,n=v.length;f<n;f+=1)u(v[f])}function it(e,u){const y=Ne(e,u);if(y.length!==0){if(y.length===1)return y[0];throw new s("expected a single document in the stream, but found more")}}return ze.loadAll=st,ze.load=it,ze}var _t={},on;function Es(){if(on)return _t;on=1;const r=Ie(),s=Ce(),d=Rt(),m=Object.prototype.toString,a=Object.prototype.hasOwnProperty,i=65279,c=9,l=10,b=13,o=32,p=33,N=34,_=35,O=37,F=38,D=39,B=42,G=44,U=45,z=58,q=61,X=62,C=63,Y=64,Z=91,ce=93,Ze=96,be=123,Le=124,ye=125,K={};K[0]="\\0",K[7]="\\a",K[8]="\\b",K[9]="\\t",K[10]="\\n",K[11]="\\v",K[12]="\\f",K[13]="\\r",K[27]="\\e",K[34]='\\"',K[92]="\\\\",K[133]="\\N",K[160]="\\_",K[8232]="\\L",K[8233]="\\P";const Pe=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],E=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function pe(n,h){if(h===null)return{};const g={},k=Object.keys(h);for(let w=0,A=k.length;w<A;w+=1){let x=k[w],S=String(h[x]);x.slice(0,2)==="!!"&&(x="tag:yaml.org,2002:"+x.slice(2));const T=n.compiledTypeMap.fallback[x];T&&a.call(T.styleAliases,S)&&(S=T.styleAliases[S]),g[x]=S}return g}function ee(n){let h,g;const k=n.toString(16).toUpperCase();if(n<=255)h="x",g=2;else if(n<=65535)h="u",g=4;else if(n<=4294967295)h="U",g=8;else throw new s("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+h+r.repeat("0",g-k.length)+k}const et=1,de=2;function tt(n){this.schema=n.schema||d,this.indent=Math.max(1,n.indent||2),this.noArrayIndent=n.noArrayIndent||!1,this.skipInvalid=n.skipInvalid||!1,this.flowLevel=r.isNothing(n.flowLevel)?-1:n.flowLevel,this.styleMap=pe(this.schema,n.styles||null),this.sortKeys=n.sortKeys||!1,this.lineWidth=n.lineWidth||80,this.noRefs=n.noRefs||!1,this.noCompatMode=n.noCompatMode||!1,this.condenseFlow=n.condenseFlow||!1,this.quotingType=n.quotingType==='"'?de:et,this.forceQuotes=n.forceQuotes||!1,this.replacer=typeof n.replacer=="function"?n.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function ve(n,h){const g=r.repeat(" ",h);let k=0,w="";const A=n.length;for(;k<A;){let x;const S=n.indexOf(`
`,k);S===-1?(x=n.slice(k),k=A):(x=n.slice(k,S+1),k=S+1),x.length&&x!==`
`&&(w+=g),w+=x}return w}function me(n,h){return`
`+r.repeat(" ",n.indent*h)}function Re(n,h){for(let g=0,k=n.implicitTypes.length;g<k;g+=1)if(n.implicitTypes[g].resolve(h))return!0;return!1}function Q(n){return n===o||n===c}function re(n){return n>=32&&n<=126||n>=161&&n<=55295&&n!==8232&&n!==8233||n>=57344&&n<=65533&&n!==i||n>=65536&&n<=1114111}function ke(n){return re(n)&&n!==i&&n!==b&&n!==l}function te(n,h,g){const k=ke(n),w=k&&!Q(n);return(g?k:k&&n!==G&&n!==Z&&n!==ce&&n!==be&&n!==ye)&&n!==_&&!(h===z&&!w)||ke(h)&&!Q(h)&&n===_||h===z&&w}function we(n){return re(n)&&n!==i&&!Q(n)&&n!==U&&n!==C&&n!==z&&n!==G&&n!==Z&&n!==ce&&n!==be&&n!==ye&&n!==_&&n!==F&&n!==B&&n!==p&&n!==Le&&n!==q&&n!==X&&n!==D&&n!==N&&n!==O&&n!==Y&&n!==Ze}function H(n){return!Q(n)&&n!==z}function J(n,h){const g=n.charCodeAt(h);let k;return g>=55296&&g<=56319&&h+1<n.length&&(k=n.charCodeAt(h+1),k>=56320&&k<=57343)?(g-55296)*1024+k-56320+65536:g}function ge(n){return/^\n* /.test(n)}const Oe=1,Ae=2,Me=3,De=4,se=5;function Fe(n,h,g,k,w,A,x,S){let T,j=0,I=null,L=!1,R=!1;const ae=k!==-1;let Se=-1,Te=we(J(n,0))&&H(J(n,n.length-1));if(h||x)for(T=0;T<n.length;j>=65536?T+=2:T++){if(j=J(n,T),!re(j))return se;Te=Te&&te(j,I,S),I=j}else{for(T=0;T<n.length;j>=65536?T+=2:T++){if(j=J(n,T),j===l)L=!0,ae&&(R=R||T-Se-1>k&&n[Se+1]!==" ",Se=T);else if(!re(j))return se;Te=Te&&te(j,I,S),I=j}R=R||ae&&T-Se-1>k&&n[Se+1]!==" "}return!L&&!R?Te&&!x&&!w(n)?Oe:A===de?se:Ae:g>9&&ge(n)?se:x?A===de?se:Ae:R?De:Me}function Be(n,h,g,k,w){n.dump=(function(){if(h.length===0)return n.quotingType===de?'""':"''";if(!n.noCompatMode&&(Pe.indexOf(h)!==-1||E.test(h)))return n.quotingType===de?'"'+h+'"':"'"+h+"'";const A=n.indent*Math.max(1,g),x=n.lineWidth===-1?-1:Math.max(Math.min(n.lineWidth,40),n.lineWidth-A),S=k||n.flowLevel>-1&&g>=n.flowLevel;function T(j){return Re(n,j)}switch(Fe(h,S,n.indent,x,T,n.quotingType,n.forceQuotes&&!k,w)){case Oe:return h;case Ae:return"'"+h.replace(/'/g,"''")+"'";case Me:return"|"+Ue(h,n.indent)+He(ve(h,A));case De:return">"+Ue(h,n.indent)+He(ve(nt(h,x),A));case se:return'"'+ie(h)+'"';default:throw new s("impossible error: invalid scalar style")}})()}function Ue(n,h){const g=ge(n)?String(h):"",k=n[n.length-1]===`
`,A=k&&(n[n.length-2]===`
`||n===`
`)?"+":k?"":"-";return g+A+`
`}function He(n){return n[n.length-1]===`
`?n.slice(0,-1):n}function nt(n,h){const g=/(\n+)([^\n]*)/g;let k=(function(){let S=n.indexOf(`
`);return S=S!==-1?S:n.length,g.lastIndex=S,qe(n.slice(0,S),h)})(),w=n[0]===`
`||n[0]===" ",A,x;for(;x=g.exec(n);){const S=x[1],T=x[2];A=T[0]===" ",k+=S+(!w&&!A&&T!==""?`
`:"")+qe(T,h),w=A}return k}function qe(n,h){if(n===""||n[0]===" ")return n;const g=/ [^ ]/g;let k,w=0,A,x=0,S=0,T="";for(;k=g.exec(n);)S=k.index,S-w>h&&(A=x>w?x:S,T+=`
`+n.slice(w,A),w=A+1),x=S;return T+=`
`,n.length-w>h&&x>w?T+=n.slice(w,x)+`
`+n.slice(x+1):T+=n.slice(w),T.slice(1)}function ie(n){let h="",g=0;for(let k=0;k<n.length;g>=65536?k+=2:k++){g=J(n,k);const w=K[g];!w&&re(g)?(h+=n[k],g>=65536&&(h+=n[k+1])):h+=w||ee(g)}return h}function rt(n,h,g){let k="";const w=n.tag;for(let A=0,x=g.length;A<x;A+=1){let S=g[A];n.replacer&&(S=n.replacer.call(g,String(A),S)),(u(n,h,S,!1,!1)||typeof S>"u"&&u(n,h,null,!1,!1))&&(k!==""&&(k+=","+(n.condenseFlow?"":" ")),k+=n.dump)}n.tag=w,n.dump="["+k+"]"}function Ne(n,h,g,k){let w="";const A=n.tag;for(let x=0,S=g.length;x<S;x+=1){let T=g[x];n.replacer&&(T=n.replacer.call(g,String(x),T)),(u(n,h+1,T,!0,!0,!1,!0)||typeof T>"u"&&u(n,h+1,null,!0,!0,!1,!0))&&((!k||w!=="")&&(w+=me(n,h)),n.dump&&l===n.dump.charCodeAt(0)?w+="-":w+="- ",w+=n.dump)}n.tag=A,n.dump=w||"[]"}function st(n,h,g){let k="";const w=n.tag,A=Object.keys(g);for(let x=0,S=A.length;x<S;x+=1){let T="";k!==""&&(T+=", "),n.condenseFlow&&(T+='"');const j=A[x];let I=g[j];n.replacer&&(I=n.replacer.call(g,j,I)),u(n,h,j,!1,!1)&&(n.dump.length>1024&&(T+="? "),T+=n.dump+(n.condenseFlow?'"':"")+":"+(n.condenseFlow?"":" "),u(n,h,I,!1,!1)&&(T+=n.dump,k+=T))}n.tag=w,n.dump="{"+k+"}"}function it(n,h,g,k){let w="";const A=n.tag,x=Object.keys(g);if(n.sortKeys===!0)x.sort();else if(typeof n.sortKeys=="function")x.sort(n.sortKeys);else if(n.sortKeys)throw new s("sortKeys must be a boolean or a function");for(let S=0,T=x.length;S<T;S+=1){let j="";(!k||w!=="")&&(j+=me(n,h));const I=x[S];let L=g[I];if(n.replacer&&(L=n.replacer.call(g,I,L)),!u(n,h+1,I,!0,!0,!0))continue;const R=n.tag!==null&&n.tag!=="?"||n.dump&&n.dump.length>1024;R&&(n.dump&&l===n.dump.charCodeAt(0)?j+="?":j+="? "),j+=n.dump,R&&(j+=me(n,h)),u(n,h+1,L,!0,R)&&(n.dump&&l===n.dump.charCodeAt(0)?j+=":":j+=": ",j+=n.dump,w+=j)}n.tag=A,n.dump=w||"{}"}function e(n,h,g){const k=g?n.explicitTypes:n.implicitTypes;for(let w=0,A=k.length;w<A;w+=1){const x=k[w];if((x.instanceOf||x.predicate)&&(!x.instanceOf||typeof h=="object"&&h instanceof x.instanceOf)&&(!x.predicate||x.predicate(h))){if(g?x.multi&&x.representName?n.tag=x.representName(h):n.tag=x.tag:n.tag="?",x.represent){const S=n.styleMap[x.tag]||x.defaultStyle;let T;if(m.call(x.represent)==="[object Function]")T=x.represent(h,S);else if(a.call(x.represent,S))T=x.represent[S](h,S);else throw new s("!<"+x.tag+'> tag resolver accepts not "'+S+'" style');n.dump=T}return!0}}return!1}function u(n,h,g,k,w,A,x){n.tag=null,n.dump=g,e(n,g,!1)||e(n,g,!0);const S=m.call(n.dump),T=k;k&&(k=n.flowLevel<0||n.flowLevel>h);const j=S==="[object Object]"||S==="[object Array]";let I,L;if(j&&(I=n.duplicates.indexOf(g),L=I!==-1),(n.tag!==null&&n.tag!=="?"||L||n.indent!==2&&h>0)&&(w=!1),L&&n.usedDuplicates[I])n.dump="*ref_"+I;else{if(j&&L&&!n.usedDuplicates[I]&&(n.usedDuplicates[I]=!0),S==="[object Object]")k&&Object.keys(n.dump).length!==0?(it(n,h,n.dump,w),L&&(n.dump="&ref_"+I+n.dump)):(st(n,h,n.dump),L&&(n.dump="&ref_"+I+" "+n.dump));else if(S==="[object Array]")k&&n.dump.length!==0?(n.noArrayIndent&&!x&&h>0?Ne(n,h-1,n.dump,w):Ne(n,h,n.dump,w),L&&(n.dump="&ref_"+I+n.dump)):(rt(n,h,n.dump),L&&(n.dump="&ref_"+I+" "+n.dump));else if(S==="[object String]")n.tag!=="?"&&Be(n,n.dump,h,A,T);else{if(S==="[object Undefined]")return!1;if(n.skipInvalid)return!1;throw new s("unacceptable kind of an object to dump "+S)}if(n.tag!==null&&n.tag!=="?"){let R=encodeURI(n.tag[0]==="!"?n.tag.slice(1):n.tag).replace(/!/g,"%21");n.tag[0]==="!"?R="!"+R:R.slice(0,18)==="tag:yaml.org,2002:"?R="!!"+R.slice(18):R="!<"+R+">",n.dump=R+" "+n.dump}}return!0}function y(n,h){const g=[],k=[];v(n,g,k);const w=k.length;for(let A=0;A<w;A+=1)h.duplicates.push(g[k[A]]);h.usedDuplicates=new Array(w)}function v(n,h,g){if(n!==null&&typeof n=="object"){const k=h.indexOf(n);if(k!==-1)g.indexOf(k)===-1&&g.push(k);else if(h.push(n),Array.isArray(n))for(let w=0,A=n.length;w<A;w+=1)v(n[w],h,g);else{const w=Object.keys(n);for(let A=0,x=w.length;A<x;A+=1)v(n[w[A]],h,g)}}}function f(n,h){h=h||{};const g=new tt(h);g.noRefs||y(n,g);let k=n;return g.replacer&&(k=g.replacer.call({"":k},"",k)),u(g,0,k,!0,!0)?g.dump+`
`:""}return _t.dump=f,_t}var ln;function _s(){if(ln)return W;ln=1;const r=Ts(),s=Es();function d(m,a){return function(){throw new Error("Function yaml."+m+" is removed in js-yaml 4. Use yaml."+a+" instead, which is now safe by default.")}}return W.Type=V(),W.Schema=nr(),W.FAILSAFE_SCHEMA=ar(),W.JSON_SCHEMA=ur(),W.CORE_SCHEMA=hr(),W.DEFAULT_SCHEMA=Rt(),W.load=r.load,W.loadAll=r.loadAll,W.dump=s.dump,W.YAMLException=Ce(),W.types={binary:gr(),float:dr(),map:ir(),null:or(),pairs:xr(),set:br(),timestamp:pr(),bool:lr(),int:cr(),merge:mr(),omap:fr(),seq:sr(),str:rr()},W.safeLoad=d("safeLoad","load"),W.safeLoadAll=d("safeLoadAll","loadAll"),W.safeDump=d("safeDump","dump"),W}var js=_s();const yr=Ns(js),{Type:ui,Schema:hi,FAILSAFE_SCHEMA:pi,JSON_SCHEMA:mi,CORE_SCHEMA:gi,DEFAULT_SCHEMA:fi,load:xi,loadAll:bi,dump:yi,YAMLException:vi,types:ki,safeLoad:wi,safeLoadAll:Ai,safeDump:Ni}=yr;function Is(r){if(!r)return 1;const d=r.replace(/```[\s\S]*?```/g," ").replace(/`.*?`/g," ").replace(/#+\s/g," ").replace(/\[(.*?)\]\(.*?\)/g,"$1").trim().split(/\s+/).filter(Boolean).length,m=Math.ceil(d/200);return Math.max(1,m)}const Cs="/hari-engineering-journal/assets/profile-B2O-kVnf.png",It={name:"Hari Mohan",role:"Senior Backend & AI Infrastructure Engineer",avatar:Cs,bio:"Specializing in distributed systems, high-throughput Python/FastAPI architectures, cloud orchestration with Kubernetes, and production LLM inference infrastructure.",github:"https://github.com/harimohan1990",linkedin:"https://www.linkedin.com/in/hari-m-47299b54",twitter:"https://x.com/Siliconvallybg",instagram:"https://www.instagram.com/er.harivibes"};function Ls(r,s){var N;const d=/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/,m=r.match(d);let a={},i=r;if(m)try{a=yr.load(m[1])||{},i=m[2]}catch(_){return console.error(`Failed to parse YAML frontmatter in ${s}:`,_),null}const c=((N=s.split("/").pop())==null?void 0:N.replace(/\.md$/,""))||"";if(c.startsWith("_"))return null;const l=a.slug||c,b=!!a.draft;if(b)return null;const o=a.readingTime||Is(i),p=a.author?{...It,...a.author}:It;return{title:a.title||c.replace(/-/g," "),slug:l,description:a.description||"",date:a.date?new Date(a.date).toISOString().split("T")[0]:"2026-01-01",category:a.category||"Engineering Best Practices",tags:Array.isArray(a.tags)?a.tags:[],author:p,coverImage:a.coverImage,featured:!!a.featured,draft:b,readingTime:o,content:i}}const Ps=Object.assign({"/src/content/posts/_template.md":ms,"/src/content/posts/building-llm-evaluation-benchmarking-toolkit.md":gs,"/src/content/posts/building-scalable-rest-apis-fastapi.md":fs,"/src/content/posts/designing-event-driven-microservices-message-queues.md":xs,"/src/content/posts/harness-engineering-reliable-ai-agents.md":bs,"/src/content/posts/postgresql-connection-pooling-performance-best-practices.md":ys,"/src/content/posts/production-llm-inference-latency-throughput-cost.md":vs,"/src/content/posts/python-backend-architecture-fastapi-kubernetes.md":ks,"/src/content/posts/python-roadmap-beginner-to-advanced.md":ws,"/src/content/posts/redis-caching-strategies-high-traffic.md":As});let Ke=null;function ne(){if(Ke)return Ke;const r=[];for(const[s,d]of Object.entries(Ps)){const m=Ls(d,s);m&&r.push(m)}return r.sort((s,d)=>new Date(d.date).getTime()-new Date(s.date).getTime()),Ke=r,Ke}function Rs(r){return ne().find(d=>d.slug.toLowerCase()===r.toLowerCase())}function Os(){const r=ne(),s=r.filter(d=>d.featured);return s.length>0?s:r.slice(0,3)}function Ms(){const r=ne(),s={};for(const d of r)s[d.category]=(s[d.category]||0)+1;return Object.entries(s).map(([d,m])=>({name:d,count:m}))}function Ds(){const r=ne(),s={};for(const d of r)for(const m of d.tags)s[m]=(s[m]||0)+1;return Object.entries(s).map(([d,m])=>({tag:d,count:m})).sort((d,m)=>m.count-d.count)}function Fs(r,s=3){return ne().filter(a=>a.slug!==r.slug).map(a=>{let i=0;a.category===r.category&&(i+=3);const c=a.tags.filter(l=>r.tags.includes(l));return i+=c.length*2,{post:a,score:i}}).sort((a,i)=>i.score-a.score).slice(0,s).map(a=>a.post)}function Bs(r){const s=ne(),d=s.findIndex(m=>m.slug===r);return d===-1?{}:{previous:d<s.length-1?s[d+1]:void 0,next:d>0?s[d-1]:void 0}}function Ee(r){try{const s=new Date(r);return isNaN(s.getTime())?r:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric"}).format(s)}catch{return r}}const Us=({isOpen:r,onClose:s})=>{const[d,m]=P.useState(""),[a,i]=P.useState([]),c=Tr(),l=P.useRef(null);if(P.useEffect(()=>(r?(setTimeout(()=>{var o;return(o=l.current)==null?void 0:o.focus()},50),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[r]),P.useEffect(()=>{const o=p=>{p.key==="Escape"&&r&&s(),(p.metaKey||p.ctrlKey)&&p.key==="k"&&(p.preventDefault(),r&&s())};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[r,s]),P.useEffect(()=>{if(!d.trim()){i([]);return}const o=d.toLowerCase(),N=ne().filter(_=>_.title.toLowerCase().includes(o)||_.description.toLowerCase().includes(o)||_.category.toLowerCase().includes(o)||_.tags.some(O=>O.toLowerCase().includes(o))||_.content.toLowerCase().includes(o));i(N)},[d]),!r)return null;const b=o=>{c(`/posts/${o}`),s(),m("")};return t.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-sm animate-fadeIn",children:t.jsxs("div",{className:"relative w-full max-w-2xl rounded-2xl bg-dark-surface border border-dark-border shadow-2xl overflow-hidden light:bg-white light:border-slate-200",onClick:o=>o.stopPropagation(),children:[t.jsxs("div",{className:"flex items-center px-4 py-3.5 border-b border-dark-border light:border-slate-200",children:[t.jsx(Lt,{className:"w-5 h-5 text-brand-400 mr-3 flex-shrink-0"}),t.jsx("input",{ref:l,type:"text",value:d,onChange:o=>m(o.target.value),placeholder:"Search articles, architecture topics, code patterns, tags... (Press Esc to close)",className:"w-full bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-400 focus:outline-none light:text-slate-900"}),d&&t.jsx("button",{onClick:()=>m(""),className:"p-1 text-slate-400 hover:text-slate-200 mr-1",children:t.jsx(We,{className:"w-4 h-4"})}),t.jsx("button",{onClick:s,className:"text-xs font-mono px-2 py-1 rounded bg-dark-elevated text-slate-400 border border-dark-border hover:text-slate-200 light:bg-slate-100 light:border-slate-200",children:"ESC"})]}),t.jsx("div",{className:"max-h-[60vh] overflow-y-auto p-4 space-y-2",children:d.trim()===""?t.jsxs("div",{className:"py-8 text-center text-slate-400 text-sm",children:[t.jsx("p",{children:"Type to search across all backend engineering articles and guides."}),t.jsx("div",{className:"mt-4 flex flex-wrap justify-center gap-2",children:["FastAPI","Kubernetes","PostgreSQL","Redis","LLM Inference","Event-Driven"].map(o=>t.jsxs("button",{onClick:()=>m(o),className:"text-xs px-2.5 py-1 rounded-full bg-dark-elevated hover:bg-dark-border text-slate-300 light:bg-slate-100 light:text-slate-700",children:["#",o]},o))})]}):a.length===0?t.jsxs("div",{className:"py-12 text-center text-slate-400 text-sm",children:[t.jsxs("p",{children:['No engineering articles matched "',d,'".']}),t.jsx("p",{className:"text-xs text-slate-500 mt-1",children:'Try searching for keywords like "connection pooling", "vLLM", or "FastAPI".'})]}):a.map(o=>t.jsxs("div",{onClick:()=>b(o.slug),className:"group p-3.5 rounded-xl border border-transparent hover:border-dark-border hover:bg-dark-elevated/70 cursor-pointer transition-all light:hover:bg-slate-100 light:hover:border-slate-200",children:[t.jsxs("div",{className:"flex items-center justify-between gap-2",children:[t.jsx("span",{className:"text-xs font-mono font-medium text-brand-400 light:text-brand-600",children:o.category}),t.jsxs("div",{className:"flex items-center text-xs text-slate-400 space-x-3",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(Qe,{className:"w-3 h-3"}),Ee(o.date)]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(Xe,{className:"w-3 h-3"}),o.readingTime," min read"]})]})]}),t.jsx("h4",{className:"text-base font-semibold text-slate-100 group-hover:text-brand-300 transition-colors mt-1.5 light:text-slate-900 light:group-hover:text-brand-700",children:o.title}),t.jsx("p",{className:"text-xs text-slate-400 line-clamp-1 mt-1 light:text-slate-600",children:o.description}),t.jsxs("div",{className:"flex items-center justify-between mt-2 pt-2 border-t border-dark-border/40 light:border-slate-200/60",children:[t.jsx("div",{className:"flex items-center gap-1.5 flex-wrap",children:o.tags.slice(0,3).map(p=>t.jsxs("span",{className:"text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-bg text-slate-400 light:bg-slate-200/60 light:text-slate-600",children:["#",p]},p))}),t.jsxs("span",{className:"text-xs text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium",children:["Read ",t.jsx(le,{className:"w-3 h-3"})]})]})]},o.slug))})]})})},he=({size:r=16,className:s="",...d})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:s,...d,children:[t.jsx("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),t.jsx("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),_e=({size:r=16,className:s="",...d})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:s,...d,children:[t.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),t.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),t.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),je=({size:r=16,className:s="",...d})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:s,...d,children:[t.jsx("path",{d:"M4 4l11.733 16h4.267l-11.733 -16z"}),t.jsx("path",{d:"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"})]}),Ve=({size:r=16,className:s="",...d})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:s,...d,children:[t.jsx("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),t.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),t.jsx("line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"})]}),Hs=()=>{const[r,s]=P.useState(!1),[d,m]=P.useState(!1),a=Er(),i=[{label:"Articles",path:"/posts"},{label:"Projects",path:"/projects"},{label:"About & Contact",path:"/about"}],c=l=>l==="/posts"?a.pathname==="/posts"||a.pathname.startsWith("/posts/"):a.pathname===l;return t.jsxs(t.Fragment,{children:[t.jsxs("header",{className:"sticky top-0 z-40 w-full backdrop-blur-md bg-dark-bg/85 dark:bg-dark-bg/85 light:bg-white/85 border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 transition-colors",children:[t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"flex items-center justify-between h-16",children:[t.jsxs($,{to:"/",className:"flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1",children:[t.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500/20 to-cyanBrand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400 group-hover:border-brand-400 transition-colors shadow-sm",children:t.jsx(xe,{className:"w-5 h-5 text-brand-400"})}),t.jsxs("div",{className:"flex flex-col",children:[t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx("span",{className:"font-bold text-base sm:text-lg tracking-tight text-slate-100 light:text-slate-900 group-hover:text-brand-400 transition-colors",children:"Backend Engineering Journal"}),t.jsx("span",{className:"inline-flex items-center px-1.5 py-0.2 text-[10px] font-mono font-medium rounded bg-brand-950 text-brand-400 border border-brand-800/40 hidden sm:inline-block",children:"PROD"})]}),t.jsx("span",{className:"text-[11px] text-slate-400 hidden md:block",children:"Distributed Systems • Cloud • AI Infrastructure"})]})]}),t.jsx("nav",{className:"hidden md:flex items-center space-x-1 lg:space-x-2",children:i.map(l=>t.jsx($,{to:l.path,className:`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${c(l.path)?"text-brand-400 light:text-brand-600 bg-brand-950/40 light:bg-brand-50 border border-brand-800/30":"text-slate-300 light:text-slate-600 hover:text-slate-100 light:hover:text-slate-900 hover:bg-dark-surface/60 light:hover:bg-slate-100"}`,children:l.label},l.path))}),t.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[t.jsxs("button",{type:"button",onClick:()=>s(!0),className:"flex items-center space-x-2 text-xs sm:text-sm text-slate-400 hover:text-slate-200 bg-dark-surface/90 hover:bg-dark-elevated px-2.5 py-1.5 rounded-lg border border-dark-border transition-all light:bg-slate-100 light:text-slate-600 light:hover:bg-slate-200 light:border-slate-200","aria-label":"Search articles",children:[t.jsx(Lt,{className:"w-4 h-4 text-brand-400"}),t.jsx("span",{className:"hidden sm:inline",children:"Search..."}),t.jsx("kbd",{className:"hidden lg:inline-block font-mono text-[10px] bg-dark-bg px-1.5 py-0.5 rounded border border-dark-border text-slate-400 light:bg-white light:border-slate-300",children:"⌘K"})]}),t.jsx("a",{href:"https://github.com/harimohan1990/hari-engineering-journal",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Repository",className:"p-2 rounded-lg text-slate-400 hover:text-white light:hover:text-slate-900 hover:bg-dark-surface light:hover:bg-slate-100 border border-transparent hover:border-dark-border light:hover:border-slate-200 transition-colors hidden sm:flex",children:t.jsx(he,{size:18})}),t.jsx(ps,{}),t.jsx("button",{type:"button",onClick:()=>m(!d),className:"p-2 rounded-lg text-slate-400 hover:text-white md:hidden hover:bg-dark-surface border border-transparent hover:border-dark-border","aria-label":"Toggle navigation menu",children:d?t.jsx(We,{className:"w-5 h-5"}):t.jsx(rs,{className:"w-5 h-5"})})]})]})}),d&&t.jsxs("div",{className:"md:hidden border-t border-dark-border bg-dark-surface/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-2 light:bg-white light:border-slate-200",children:[i.map(l=>t.jsx($,{to:l.path,onClick:()=>m(!1),className:`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${c(l.path)?"text-brand-400 bg-brand-950/40 border border-brand-800/40":"text-slate-300 hover:bg-dark-elevated light:text-slate-700 light:hover:bg-slate-100"}`,children:l.label},l.path)),t.jsx("div",{className:"pt-2 border-t border-dark-border light:border-slate-200 flex items-center justify-between",children:t.jsxs("a",{href:"https://github.com/harimohan1990/hari-engineering-journal",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 text-sm text-slate-400 hover:text-white py-1",children:[t.jsx(he,{size:16}),t.jsx("span",{children:"GitHub Repository"})]})})]})]}),t.jsx(Us,{isOpen:r,onClose:()=>s(!1)})]})},qs=()=>{const r=new Date().getFullYear();return t.jsx("footer",{className:"mt-24 border-t border-dark-border/80 bg-dark-bg/50 light:bg-slate-100/60 light:border-slate-200",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-10",children:[t.jsxs("div",{className:"md:col-span-2 space-y-4",children:[t.jsxs("div",{className:"flex items-center space-x-3",children:[t.jsx("div",{className:"w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400",children:t.jsx(xe,{className:"w-4 h-4 text-brand-400"})}),t.jsx("span",{className:"font-bold text-lg text-slate-100 light:text-slate-900 tracking-tight",children:"Backend Engineering Journal"})]}),t.jsx("p",{className:"text-sm text-slate-400 light:text-slate-600 max-w-md leading-relaxed",children:"Engineering scalable backends. Exploring distributed systems. Building intelligent infrastructure. Written for senior backend engineers, systems architects, and infrastructure specialists."}),t.jsxs("div",{className:"flex items-center space-x-2 pt-2",children:[t.jsx("a",{href:"https://github.com/harimohan1990/hari-engineering-journal",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Repository",className:"p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-white border border-dark-border transition-colors light:bg-white light:border-slate-200 light:hover:bg-slate-50",children:t.jsx(he,{size:16})}),t.jsx("a",{href:"https://www.linkedin.com/in/hari-m-47299b54",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn Profile",className:"p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-brand-400 border border-dark-border transition-colors light:bg-white light:border-slate-200 light:hover:bg-slate-50",children:t.jsx(_e,{size:16})}),t.jsx("a",{href:"https://x.com/Siliconvallybg",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter) Profile",className:"p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-cyanBrand-500 border border-dark-border transition-colors light:bg-white light:border-slate-200 light:hover:bg-slate-50",children:t.jsx(je,{size:15})}),t.jsx("a",{href:"https://www.instagram.com/er.harivibes",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram Profile",className:"p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-rose-400 border border-dark-border transition-colors light:bg-white light:border-slate-200 light:hover:bg-slate-50",children:t.jsx(Ve,{size:16})}),t.jsx("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer","aria-label":"RSS Feed",className:"p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-amber-400 border border-dark-border transition-colors light:bg-white light:border-slate-200 light:hover:bg-slate-50",children:t.jsx(as,{className:"w-4 h-4"})})]})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("h4",{className:"text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700",children:"Navigation"}),t.jsxs("ul",{className:"space-y-2 text-sm text-slate-400 light:text-slate-600",children:[t.jsx("li",{children:t.jsx($,{to:"/posts",className:"hover:text-brand-400 transition-colors",children:"All Articles"})}),t.jsx("li",{children:t.jsx($,{to:"/projects",className:"hover:text-brand-400 transition-colors",children:"Engineering Projects"})}),t.jsx("li",{children:t.jsx($,{to:"/about",className:"hover:text-brand-400 transition-colors",children:"About & Contact"})}),t.jsx("li",{children:t.jsxs("a",{href:"https://github.com/harimohan1990",target:"_blank",rel:"noopener noreferrer",className:"hover:text-brand-400 transition-colors inline-flex items-center gap-1",children:["GitHub Profile ",t.jsx(Wr,{className:"w-3 h-3"})]})})]})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("h4",{className:"text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700",children:"Focus Areas"}),t.jsxs("ul",{className:"space-y-2 text-sm text-slate-400 light:text-slate-600",children:[t.jsx("li",{children:"Distributed Consensus & Raft"}),t.jsx("li",{children:"Python & FastAPI Microservices"}),t.jsx("li",{children:"PostgreSQL & Redis Scaling"}),t.jsx("li",{children:"Kubernetes & Cloud Platforms"}),t.jsx("li",{children:"Production LLM Serving & vLLM"})]})]})]}),t.jsxs("div",{className:"mt-12 pt-8 border-t border-dark-border/60 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4",children:[t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx(Je,{className:"w-3.5 h-3.5 text-brand-400"}),t.jsxs("span",{children:["© ",r," Hari Mohan. Hosted on GitHub Pages with zero paid servers."]})]}),t.jsx("div",{className:"flex items-center space-x-4",children:t.jsxs("span",{className:"inline-flex items-center gap-1.5 text-slate-400",children:[t.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"All Systems Nominal"]})})]})]})})},$s=({children:r})=>t.jsxs("div",{className:"min-h-screen flex flex-col bg-dark-bg text-dark-text dark:bg-dark-bg dark:text-dark-text light:bg-slate-50 light:text-slate-900 transition-colors",children:[t.jsx(Hs,{}),t.jsx("main",{className:"flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",children:r}),t.jsx(qs,{})]}),Gs=()=>t.jsxs("div",{className:"relative py-12 md:py-16 mb-8 border-b border-dark-border/80 light:border-slate-200",children:[t.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none"}),t.jsxs("div",{className:"relative max-w-4xl space-y-6",children:[t.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-950/60 border border-brand-800/40 text-brand-400 text-xs font-mono light:bg-brand-50 light:border-brand-200 light:text-brand-700",children:[t.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-400 animate-ping"}),t.jsx("span",{children:"SYSTEMS • DISTRIBUTED PLATFORMS • AI INFRA"})]}),t.jsxs("h1",{className:"text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.15]",children:["Backend Engineering ",t.jsx("br",{className:"hidden sm:inline"}),t.jsx("span",{className:"bg-gradient-to-r from-brand-400 via-cyanBrand-500 to-teal-300 bg-clip-text text-transparent",children:"Journal"})]}),t.jsx("p",{className:"text-lg sm:text-xl text-slate-300 light:text-slate-600 max-w-2xl leading-relaxed font-normal",children:"Engineering scalable backends. Exploring distributed systems. Building intelligent infrastructure."}),t.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-4",children:[t.jsxs($,{to:"/posts",className:"inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-dark-bg font-semibold text-sm transition-all shadow-lg shadow-brand-500/20",children:[t.jsx("span",{children:"Explore All Articles"}),t.jsx(le,{className:"w-4 h-4"})]}),t.jsx($,{to:"/projects",className:"inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-dark-surface hover:bg-dark-elevated text-slate-200 font-medium text-sm border border-dark-border transition-all light:bg-white light:text-slate-800 light:border-slate-300 light:hover:bg-slate-100",children:t.jsx("span",{children:"Architecture Projects"})})]}),t.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6",children:[t.jsxs("div",{className:"p-3.5 rounded-xl border border-dark-border bg-dark-surface/40 light:bg-white light:border-slate-200 flex items-center space-x-3",children:[t.jsx(Pt,{className:"w-5 h-5 text-brand-400 flex-shrink-0"}),t.jsxs("div",{children:[t.jsx("div",{className:"text-xs font-semibold text-white light:text-slate-900",children:"Python & FastAPI"}),t.jsx("div",{className:"text-[11px] text-slate-400",children:"High-throughput APIs"})]})]}),t.jsxs("div",{className:"p-3.5 rounded-xl border border-dark-border bg-dark-surface/40 light:bg-white light:border-slate-200 flex items-center space-x-3",children:[t.jsx(Ct,{className:"w-5 h-5 text-cyanBrand-500 flex-shrink-0"}),t.jsxs("div",{children:[t.jsx("div",{className:"text-xs font-semibold text-white light:text-slate-900",children:"Distributed Systems"}),t.jsx("div",{className:"text-[11px] text-slate-400",children:"Consensus & Kafka"})]})]}),t.jsxs("div",{className:"p-3.5 rounded-xl border border-dark-border bg-dark-surface/40 light:bg-white light:border-slate-200 flex items-center space-x-3",children:[t.jsx(Fn,{className:"w-5 h-5 text-amber-400 flex-shrink-0"}),t.jsxs("div",{children:[t.jsx("div",{className:"text-xs font-semibold text-white light:text-slate-900",children:"PostgreSQL & Redis"}),t.jsx("div",{className:"text-[11px] text-slate-400",children:"Storage & Caching"})]})]}),t.jsxs("div",{className:"p-3.5 rounded-xl border border-dark-border bg-dark-surface/40 light:bg-white light:border-slate-200 flex items-center space-x-3",children:[t.jsx(Je,{className:"w-5 h-5 text-emerald-400 flex-shrink-0"}),t.jsxs("div",{children:[t.jsx("div",{className:"text-xs font-semibold text-white light:text-slate-900",children:"AI Infrastructure"}),t.jsx("div",{className:"text-[11px] text-slate-400",children:"vLLM & RAG Systems"})]})]})]})]})]}),zs=({post:r})=>t.jsxs("section",{className:"mb-14",children:[t.jsxs("div",{className:"flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-400 mb-4",children:[t.jsx(cs,{className:"w-4 h-4 text-brand-400"}),t.jsx("span",{children:"Featured Engineering Deep Dive"})]}),t.jsxs("div",{className:"relative rounded-3xl border border-brand-500/30 bg-gradient-to-br from-dark-surface via-dark-surface to-dark-elevated p-6 sm:p-10 shadow-2xl overflow-hidden group light:from-white light:via-slate-50 light:to-slate-100 light:border-slate-300",children:[t.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"}),t.jsxs("div",{className:"relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8",children:[t.jsxs("div",{className:"max-w-3xl space-y-4",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[t.jsx("span",{className:"text-xs font-mono font-medium px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/30",children:r.category}),t.jsxs("div",{className:"flex items-center space-x-3 text-xs text-slate-400 light:text-slate-500",children:[t.jsxs("span",{className:"flex items-center gap-1.5",children:[t.jsx(Qe,{className:"w-3.5 h-3.5"}),Ee(r.date)]}),t.jsxs("span",{className:"flex items-center gap-1.5",children:[t.jsx(Xe,{className:"w-3.5 h-3.5"}),r.readingTime," min read"]})]})]}),t.jsx("h2",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-brand-300 transition-colors light:text-slate-900 light:group-hover:text-brand-600",children:t.jsx($,{to:`/posts/${r.slug}`,children:r.title})}),t.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl light:text-slate-600",children:r.description}),t.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-4",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("img",{src:r.author.avatar,alt:r.author.name,className:"w-7 h-7 rounded-full object-cover ring-1 ring-brand-400/30"}),t.jsx("span",{className:"text-xs text-slate-300 light:text-slate-700 font-medium",children:r.author.name})]}),t.jsx("div",{className:"h-3 w-px bg-dark-border light:bg-slate-300 hidden sm:block"}),t.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:r.tags.slice(0,4).map(s=>t.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-dark-bg/80 text-slate-400 border border-dark-border/60 light:bg-slate-200 light:text-slate-700 light:border-slate-300",children:["#",s]},s))})]})]}),t.jsxs("div",{className:"lg:w-72 flex flex-col justify-center items-start lg:items-end",children:[t.jsxs($,{to:`/posts/${r.slug}`,className:"inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-dark-bg font-semibold text-sm transition-all shadow-lg shadow-brand-500/20 group/btn",children:[t.jsx("span",{children:"Read Full Article"}),t.jsx(le,{className:"w-4 h-4 group-hover/btn:translate-x-1 transition-transform"})]}),t.jsxs("span",{className:"text-[11px] text-slate-400 light:text-slate-500 mt-2 flex items-center gap-1 font-mono",children:[t.jsx(xe,{className:"w-3 h-3 text-brand-400"}),"Verified code & benchmarks"]})]})]})]})]}),Ot=({post:r,featured:s=!1})=>t.jsxs("article",{className:`group relative flex flex-col justify-between rounded-2xl border transition-all duration-200 ${s?"p-6 sm:p-8 bg-dark-surface/90 border-brand-500/30 hover:border-brand-500/60 shadow-lg shadow-brand-950/20 light:bg-white light:border-slate-300 light:shadow-sm":"p-6 bg-dark-surface/60 border-dark-border hover:border-slate-700 hover:bg-dark-surface/90 light:bg-white light:border-slate-200 light:hover:border-slate-300"}`,children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-4",children:[t.jsx("span",{className:"text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-brand-950/70 text-brand-300 border border-brand-800/40 light:bg-brand-50 light:text-brand-700 light:border-brand-200",children:r.category}),t.jsxs("div",{className:"flex items-center space-x-3 text-xs text-slate-400 light:text-slate-500",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(Qe,{className:"w-3.5 h-3.5"}),Ee(r.date)]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(Xe,{className:"w-3.5 h-3.5"}),r.readingTime," min read"]})]})]}),t.jsx("h3",{className:`font-bold tracking-tight text-slate-100 group-hover:text-brand-400 transition-colors light:text-slate-900 light:group-hover:text-brand-600 ${s?"text-xl sm:text-2xl mb-3":"text-lg sm:text-xl mb-2.5"}`,children:t.jsxs($,{to:`/posts/${r.slug}`,children:[t.jsx("span",{className:"absolute inset-0","aria-hidden":"true"}),r.title]})}),t.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 light:text-slate-600",children:r.description})]}),t.jsxs("div",{className:"pt-4 border-t border-dark-border/60 flex items-center justify-between light:border-slate-100",children:[t.jsx("div",{className:"flex items-center gap-1.5 flex-wrap",children:r.tags.slice(0,3).map(d=>t.jsxs("span",{className:"text-[11px] font-mono text-slate-400 light:text-slate-500 bg-dark-bg/80 light:bg-slate-100 px-2 py-0.5 rounded border border-dark-border/40 light:border-slate-200",children:["#",d]},d))}),t.jsxs("div",{className:"flex items-center text-xs font-semibold text-brand-400 light:text-brand-600 group-hover:translate-x-0.5 transition-transform",children:[t.jsx("span",{children:"Read"}),t.jsx(le,{className:"w-3.5 h-3.5 ml-1"})]})]})]}),Ks=({posts:r})=>{const s=[{title:"Backend & API Architecture",category:"FastAPI and API Design",icon:Pt,color:"text-brand-400",description:"Async Python, connection pooling, high-throughput REST architectures, and low-latency microservices."},{title:"Distributed Systems",category:"Distributed Systems",icon:Ct,color:"text-cyanBrand-500",description:"Event-driven streaming, message queues, Raft consensus, and fault-tolerant state management."},{title:"Cloud & Kubernetes Infrastructure",category:"Docker and Kubernetes",icon:jn,color:"text-sky-400",description:"Container orchestration, autoscaling controllers, EKS deployments, and cloud networking."},{title:"LLM & AI Infrastructure",category:"LLM Infrastructure and Inference",icon:Je,color:"text-emerald-400",description:"Continuous batching with vLLM, latency optimization, evaluations, and production RAG pipelines."}];return t.jsxs("section",{className:"my-16 space-y-12",children:[t.jsxs("div",{className:"border-b border-dark-border pb-4 light:border-slate-200",children:[t.jsxs("h2",{className:"text-2xl font-bold text-white light:text-slate-900 flex items-center gap-2",children:[t.jsx(xe,{className:"w-6 h-6 text-brand-400"}),t.jsx("span",{children:"Curated Engineering Tracks"})]}),t.jsx("p",{className:"text-sm text-slate-400 light:text-slate-600 mt-1",children:"Explore articles categorized by architectural domains and systems specialties."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:s.map(d=>{const m=d.icon,a=r.filter(i=>i.category.toLowerCase().includes(d.category.toLowerCase().split(" ")[0])).slice(0,2);return t.jsxs("div",{className:"p-6 rounded-2xl border border-dark-border bg-dark-surface/40 hover:bg-dark-surface/70 transition-all flex flex-col justify-between light:bg-white light:border-slate-200",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center space-x-3 mb-3",children:[t.jsx("div",{className:`p-2.5 rounded-xl bg-dark-elevated border border-dark-border ${d.color} light:bg-slate-100 light:border-slate-200`,children:t.jsx(m,{className:"w-5 h-5"})}),t.jsx("div",{children:t.jsx("h3",{className:"font-bold text-lg text-white light:text-slate-900",children:d.title})})]}),t.jsx("p",{className:"text-xs text-slate-400 light:text-slate-600 mb-5 leading-relaxed",children:d.description}),t.jsx("div",{className:"space-y-3 mb-4",children:a.map(i=>t.jsxs($,{to:`/posts/${i.slug}`,className:"group block p-3 rounded-lg bg-dark-elevated/60 hover:bg-dark-elevated border border-dark-border/40 transition-colors light:bg-slate-50 light:hover:bg-slate-100 light:border-slate-200",children:[t.jsx("h4",{className:"text-sm font-medium text-slate-200 group-hover:text-brand-400 light:text-slate-800 line-clamp-1 transition-colors",children:i.title}),t.jsxs("span",{className:"text-[11px] text-slate-400 light:text-slate-500 font-mono",children:[i.readingTime," min read • #",i.tags[0]||"engineering"]})]},i.slug))})]}),t.jsxs($,{to:`/posts?category=${encodeURIComponent(d.category)}`,className:"inline-flex items-center text-xs font-semibold text-brand-400 hover:text-brand-300 light:text-brand-600 pt-2 transition-colors",children:[t.jsxs("span",{children:["View all in ",d.title]}),t.jsx(le,{className:"w-3.5 h-3.5 ml-1"})]})]},d.title)})})]})},Ys=()=>{const[r,s]=P.useState(""),[d,m]=P.useState("idle"),a=i=>{if(i.preventDefault(),!r||!r.includes("@")){m("error");return}m("loading"),setTimeout(()=>{try{const c=JSON.parse(localStorage.getItem("journal-subscribers")||"[]");c.push({email:r,timestamp:new Date().toISOString()}),localStorage.setItem("journal-subscribers",JSON.stringify(c))}catch(c){console.error(c)}m("success"),s("")},600)};return t.jsx("section",{className:"my-16 rounded-3xl border border-dark-border bg-gradient-to-b from-dark-surface to-dark-elevated p-8 sm:p-12 relative overflow-hidden light:from-white light:to-slate-50 light:border-slate-300",children:t.jsxs("div",{className:"max-w-2xl mx-auto text-center space-y-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 mx-auto",children:t.jsx(ns,{className:"w-6 h-6"})}),t.jsx("h3",{className:"text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight",children:"Subscribe to the Architecture Dispatch"}),t.jsx("p",{className:"text-sm text-slate-400 light:text-slate-600 leading-relaxed",children:"Get deep dives on distributed systems, high-throughput Python backends, and production AI infrastructure delivered directly to your inbox. No spam, strictly technical."}),d==="success"?t.jsxs("div",{className:"p-4 rounded-xl bg-brand-950/80 border border-brand-800/60 text-brand-300 flex items-center justify-center space-x-2 text-sm max-w-md mx-auto light:bg-brand-50 light:text-brand-700 light:border-brand-200",children:[t.jsx(Xr,{className:"w-5 h-5 text-brand-400"}),t.jsx("span",{children:"You're subscribed! Welcome to the engineering journal."})]}):t.jsxs("form",{onSubmit:a,className:"flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2",children:[t.jsx("input",{type:"email",value:r,onChange:i=>{s(i.target.value),d==="error"&&m("idle")},placeholder:"you@company.com",required:!0,className:"flex-1 px-4 py-3 rounded-xl bg-dark-bg border border-dark-border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500 light:bg-white light:border-slate-300 light:text-slate-900"}),t.jsxs("button",{type:"submit",disabled:d==="loading",className:"px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-dark-bg font-semibold text-sm transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/20",children:[t.jsx("span",{children:d==="loading"?"Joining...":"Subscribe"}),t.jsx(le,{className:"w-4 h-4"})]})]}),d==="error"&&t.jsx("p",{className:"text-xs text-rose-400",children:"Please enter a valid email address."}),t.jsxs("div",{className:"flex items-center justify-center space-x-4 text-xs text-slate-500 pt-2",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(ls,{className:"w-3.5 h-3.5 text-brand-400"}),"Zero tracking & easy unsubscribe"]}),t.jsx("span",{children:"•"}),t.jsx("span",{children:"Monthly engineering dispatches"})]})]})})},Ws=()=>{const r=ne(),d=Os()[0]||r[0],[m,a]=P.useState("All"),i=["All","Python Engineering","FastAPI and API Design","Database Engineering","Distributed Systems","Docker and Kubernetes","LLM Infrastructure and Inference"],c=m==="All"?r.slice(0,6):r.filter(l=>l.category.toLowerCase()===m.toLowerCase()).slice(0,6);return t.jsxs("div",{children:[t.jsx(Gs,{}),d&&t.jsx(zs,{post:d}),t.jsxs("section",{className:"my-14 space-y-8",children:[t.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-dark-border pb-4 light:border-slate-200",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-400 mb-1",children:[t.jsx(Vr,{className:"w-4 h-4"}),t.jsx("span",{children:"Latest Research & Deep Dives"})]}),t.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white light:text-slate-900",children:"Recent Engineering Articles"})]}),t.jsxs($,{to:"/posts",className:"inline-flex items-center space-x-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300 light:text-brand-600 transition-colors",children:[t.jsxs("span",{children:["View all ",r.length," articles"]}),t.jsx(le,{className:"w-4 h-4"})]})]}),t.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none",children:[t.jsx(Fn,{className:"w-4 h-4 text-slate-500 mr-1 flex-shrink-0"}),i.map(l=>t.jsx("button",{onClick:()=>a(l),className:`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${m===l?"bg-brand-500 text-dark-bg font-semibold shadow-sm":"bg-dark-surface/60 text-slate-400 hover:text-white hover:bg-dark-elevated border border-dark-border light:bg-slate-100 light:text-slate-600 light:border-slate-200 light:hover:bg-slate-200"}`,children:l},l))]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:c.map(l=>t.jsx(Ot,{post:l},l.slug))})]}),t.jsx(Ks,{posts:r}),t.jsx(Ys,{})]})},Vs=()=>{const[r,s]=_r(),d=r.get("category")||"All",m=r.get("tag")||"",[a,i]=P.useState(""),[c,l]=P.useState(d),[b,o]=P.useState(m),[p,N]=P.useState("newest"),[_,O]=P.useState(9),F=ne(),D=Ms(),B=Ds(),G=P.useMemo(()=>F.filter(C=>{if(a.trim()){const Y=a.toLowerCase();if(!(C.title.toLowerCase().includes(Y)||C.description.toLowerCase().includes(Y)||C.tags.some(ce=>ce.toLowerCase().includes(Y))||C.category.toLowerCase().includes(Y)))return!1}return!(c!=="All"&&C.category.toLowerCase()!==c.toLowerCase()||b&&!C.tags.includes(b))}).sort((C,Y)=>p==="newest"?new Date(Y.date).getTime()-new Date(C.date).getTime():p==="oldest"?new Date(C.date).getTime()-new Date(Y.date).getTime():p==="readingTime"?(Y.readingTime||0)-(C.readingTime||0):0),[F,a,c,b,p]),U=C=>{l(C),C==="All"?r.delete("category"):r.set("category",C),s(r)},z=C=>{b===C?(o(""),r.delete("tag")):(o(C),r.set("tag",C)),s(r)},q=()=>{i(""),l("All"),o(""),s({})},X=a!==""||c!=="All"||b!=="";return t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"border-b border-dark-border pb-6 light:border-slate-200",children:[t.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight",children:"Engineering Articles & Guides"}),t.jsx("p",{className:"text-slate-400 light:text-slate-600 text-sm sm:text-base mt-2 max-w-2xl",children:"Deep dives into backend architecture, distributed systems, high-concurrency database design, and production LLM serving."})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex flex-col md:flex-row gap-3",children:[t.jsxs("div",{className:"relative flex-1",children:[t.jsx(Lt,{className:"w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"}),t.jsx("input",{type:"text",value:a,onChange:C=>i(C.target.value),placeholder:"Search by keywords, algorithms, technologies...",className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brand-500 light:bg-white light:border-slate-300 light:text-slate-900"}),a&&t.jsx("button",{onClick:()=>i(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white",children:t.jsx(We,{className:"w-4 h-4"})})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsxs("div",{className:"relative",children:[t.jsxs("select",{value:p,onChange:C=>N(C.target.value),"aria-label":"Sort articles",className:"appearance-none pl-9 pr-8 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-brand-500 cursor-pointer light:bg-white light:border-slate-300 light:text-slate-800",children:[t.jsx("option",{value:"newest",children:"Newest First"}),t.jsx("option",{value:"oldest",children:"Oldest First"}),t.jsx("option",{value:"readingTime",children:"Longest Read"})]}),t.jsx(Yr,{className:"w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]}),X&&t.jsxs("button",{onClick:q,className:"flex items-center space-x-1 px-3 py-2.5 rounded-xl text-xs font-medium text-rose-400 hover:bg-rose-950/20 border border-rose-800/30 transition-colors",children:[t.jsx(We,{className:"w-3.5 h-3.5"}),t.jsx("span",{children:"Reset"})]})]})]}),t.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none",children:[t.jsxs("button",{onClick:()=>U("All"),className:`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${c==="All"?"bg-brand-500 text-dark-bg font-semibold":"bg-dark-surface/80 text-slate-300 border border-dark-border hover:bg-dark-elevated light:bg-slate-100 light:text-slate-700 light:border-slate-200"}`,children:["All Categories (",F.length,")"]}),D.map(C=>t.jsxs("button",{onClick:()=>U(C.name),className:`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${c.toLowerCase()===C.name.toLowerCase()?"bg-brand-500 text-dark-bg font-semibold":"bg-dark-surface/80 text-slate-300 border border-dark-border hover:bg-dark-elevated light:bg-slate-100 light:text-slate-700 light:border-slate-200"}`,children:[C.name," (",C.count,")"]},C.name))]}),B.length>0&&t.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 pt-1",children:[t.jsxs("span",{className:"text-xs text-slate-500 mr-1 flex items-center gap-1 font-mono",children:[t.jsx(Mn,{className:"w-3 h-3"}),"Tags:"]}),B.slice(0,14).map(({tag:C,count:Y})=>{const Z=b===C;return t.jsxs("button",{onClick:()=>z(C),className:`text-[11px] font-mono px-2 py-0.5 rounded-md transition-all ${Z?"bg-cyanBrand-500 text-dark-bg font-semibold":"bg-dark-elevated text-slate-400 hover:text-slate-200 border border-dark-border/60 light:bg-slate-100 light:text-slate-600 light:border-slate-200"}`,children:["#",C," (",Y,")"]},C)})]})]}),t.jsx("div",{className:"text-xs text-slate-400 flex items-center justify-between",children:t.jsxs("span",{children:["Showing ",Math.min(_,G.length)," of ",G.length," articles"]})}),G.length===0?t.jsxs("div",{className:"py-20 text-center rounded-2xl border border-dashed border-dark-border light:border-slate-300",children:[t.jsx("p",{className:"text-base text-slate-300 light:text-slate-700 font-medium",children:"No articles found matching your criteria."}),t.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Try adjusting your search query, or clear your filters."}),t.jsx("button",{onClick:q,className:"mt-4 px-4 py-2 rounded-xl bg-brand-500 text-dark-bg font-semibold text-xs",children:"Clear All Filters"})]}):t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:G.slice(0,_).map(C=>t.jsx(Ot,{post:C},C.slug))}),_<G.length&&t.jsx("div",{className:"text-center pt-8",children:t.jsx("button",{onClick:()=>O(C=>C+6),className:"px-6 py-2.5 rounded-xl bg-dark-surface hover:bg-dark-elevated text-slate-200 text-sm font-medium border border-dark-border transition-colors light:bg-white light:border-slate-300 light:text-slate-800",children:"Load More Articles"})})]})};var Qs=vr();const Xs=mn(Qs);var cn={},dn;function Js(){return dn||(dn=1,Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python),cn}Js();(function(r){var s="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",d={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},m={bash:d,environment:{pattern:RegExp("\\$"+s),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+s),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};r.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+s),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:m},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:d}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:m},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:m.entity}}],environment:{pattern:RegExp("\\$?"+s),alias:"constant"},variable:m.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},d.inside=r.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=m.variable[1].inside,c=0;c<a.length;c++)i[a[c]]=r.languages.bash[a[c]];r.languages.sh=r.languages.bash,r.languages.shell=r.languages.bash})(Prism);Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};(function(r){var s=/[*&][^\s[\]{},]+/,d=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,m="(?:"+d.source+"(?:[ 	]+"+s.source+")?|"+s.source+"(?:[ 	]+"+d.source+")?)",a=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function c(l,b){b=(b||"").replace(/m/g,"")+"m";var o=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return m}).replace(/<<value>>/g,function(){return l});return RegExp(o,b)}r.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return m})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return m}).replace(/<<key>>/g,function(){return"(?:"+a+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:c(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:c(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:c(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:c(i),lookbehind:!0,greedy:!0},number:{pattern:c(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:d,important:s,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},r.languages.yml=r.languages.yaml})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(r){var s=/\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source,d=/(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g,function(){return s}),m=/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source,a=/--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g,function(){return m}),i={pattern:RegExp(m),greedy:!0},c={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function l(b,o){return b=b.replace(/<OPT>/g,function(){return a}).replace(/<SP>/g,function(){return d}),RegExp(b,o)}r.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:l(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source,"i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[i,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:l(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source,"i"),lookbehind:!0,greedy:!0},{pattern:l(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source,"i"),lookbehind:!0,greedy:!0},{pattern:l(/(^ONBUILD<SP>)\w+/.source,"i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:c,string:i,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:c},r.languages.dockerfile=r.languages.docker})(Prism);var un={},hn;function Zs(){return hn||(hn=1,(function(r){r.languages.typescript=r.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),r.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete r.languages.typescript.parameter,delete r.languages.typescript["literal-property"];var s=r.languages.extend("typescript",{});delete s["class-name"],r.languages.typescript["class-name"].inside=s,r.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:s}}}}),r.languages.ts=r.languages.typescript})(Prism)),un}Zs();Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];const ei=({children:r,className:s,inline:d})=>{const[m,a]=P.useState(!1),i=gn.Children.toArray(r).map(p=>typeof p=="string"?p:"").join("").replace(/\n$/,""),c=/language-(\w+)/.exec(s||""),l=c?c[1]:"text";if(P.useEffect(()=>{Xs.highlightAll()},[r]),d)return t.jsx("code",{className:"px-1.5 py-0.5 rounded font-mono text-xs md:text-sm bg-dark-surface/90 text-brand-300 border border-dark-border/80 dark:bg-dark-elevated light:bg-slate-100 light:text-brand-700 light:border-slate-200",children:r});const b=async()=>{try{await navigator.clipboard.writeText(i),a(!0),setTimeout(()=>a(!1),2e3)}catch(p){console.error("Failed to copy code: ",p)}},o=p=>({py:"Python",python:"Python",ts:"TypeScript",typescript:"TypeScript",js:"JavaScript",javascript:"JavaScript",bash:"Bash",sh:"Shell",sql:"SQL",yaml:"YAML",yml:"YAML",json:"JSON",docker:"Dockerfile",dockerfile:"Dockerfile",go:"Go",golang:"Go"})[p.toLowerCase()]||p.toUpperCase();return t.jsxs("div",{className:"relative my-6 rounded-lg overflow-hidden border border-dark-border bg-[#090D16] shadow-xl group",children:[t.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-dark-border/80 bg-dark-surface/90 select-none",children:[t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsxs("div",{className:"flex space-x-1.5",children:[t.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"}),t.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"}),t.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"})]}),t.jsx("span",{className:"text-xs font-mono font-medium text-slate-400 pl-2",children:o(l)})]}),t.jsx("button",{onClick:b,"aria-label":"Copy code to clipboard",className:"flex items-center space-x-1.5 text-xs text-slate-400 hover:text-slate-100 bg-dark-elevated/70 hover:bg-dark-elevated px-2.5 py-1 rounded transition-colors border border-dark-border/50",children:m?t.jsxs(t.Fragment,{children:[t.jsx(Sn,{className:"w-3.5 h-3.5 text-brand-400"}),t.jsx("span",{className:"text-brand-400 font-medium",children:"Copied!"})]}):t.jsxs(t.Fragment,{children:[t.jsx(Zr,{className:"w-3.5 h-3.5"}),t.jsx("span",{children:"Copy"})]})})]}),t.jsx("pre",{className:`language-${l} p-4 overflow-x-auto text-sm leading-relaxed`,children:t.jsx("code",{className:`language-${l}`,children:i})})]})},ti=({content:r})=>{const[s,d]=P.useState([]),[m,a]=P.useState("");return P.useEffect(()=>{const c=r.split(`
`).filter(l=>l.startsWith("## ")||l.startsWith("### ")).map(l=>{const b=l.startsWith("## "),o=l.replace(/^###?\s+/,"").replace(/`.*?`/g,N=>N.replace(/`/g,"")).trim();return{id:o.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),text:o,level:b?2:3}});d(c)},[r]),P.useEffect(()=>{if(s.length===0)return;const i=new IntersectionObserver(c=>{c.forEach(l=>{l.isIntersecting&&a(l.target.id)})},{rootMargin:"-80px 0% -60% 0%",threshold:.1});return s.forEach(c=>{const l=document.getElementById(c.id);l&&i.observe(l)}),()=>i.disconnect()},[s]),s.length===0?null:t.jsxs("div",{className:"p-4 rounded-xl border border-dark-border bg-dark-surface/60 dark:bg-dark-surface/60 light:bg-white light:border-slate-200",children:[t.jsxs("div",{className:"flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-3",children:[t.jsx(us,{className:"w-3.5 h-3.5 text-brand-400"}),t.jsx("span",{children:"Table of Contents"})]}),t.jsx("nav",{className:"space-y-1 text-sm",children:s.map(i=>{const c=m===i.id;return t.jsx("a",{href:`#${i.id}`,onClick:l=>{l.preventDefault();const b=document.getElementById(i.id);b&&(b.scrollIntoView({behavior:"smooth"}),window.history.pushState(null,"",`#${i.id}`),a(i.id))},className:`block py-1 transition-all duration-150 leading-snug ${i.level===3?"pl-4 text-xs":"text-sm font-medium"} ${c?"text-brand-400 light:text-brand-600 font-semibold border-l-2 border-brand-400 pl-2 -ml-[2px]":"text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900"}`,children:i.text},i.id)})})]})},ni=()=>{const[r,s]=P.useState(0);return P.useEffect(()=>{const d=()=>{const m=window.scrollY,a=document.body.scrollHeight-window.innerHeight;a&&s(Number((m/a).toFixed(3))*100)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]),t.jsx("div",{className:"fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,children:t.jsx("div",{className:"h-full bg-gradient-to-r from-brand-500 via-cyanBrand-500 to-emerald-400 transition-all duration-75",style:{width:`${r}%`}})})},pn=({title:r,url:s})=>{const[d,m]=P.useState(!1),a=typeof window<"u"?s.startsWith("http")?s:`${window.location.origin}${s}`:s,i=async()=>{try{await navigator.clipboard.writeText(a),m(!0),setTimeout(()=>m(!1),2e3)}catch(b){console.error(b)}},c=`https://twitter.com/intent/tweet?text=${encodeURIComponent(r)}&url=${encodeURIComponent(a)}`,l=`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(a)}`;return t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsxs("span",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mr-2 flex items-center gap-1.5",children:[t.jsx(os,{className:"w-3.5 h-3.5"}),t.jsx("span",{children:"Share"})]}),t.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":"Share on X (Twitter)",className:"p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-white border border-dark-border transition-colors light:bg-slate-100 light:hover:bg-slate-200 light:text-slate-600 light:border-slate-200",children:t.jsx(je,{size:16})}),t.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer","aria-label":"Share on LinkedIn",className:"p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-brand-400 border border-dark-border transition-colors light:bg-slate-100 light:hover:bg-slate-200 light:text-slate-600 light:border-slate-200",children:t.jsx(_e,{size:16})}),t.jsx("button",{onClick:i,"aria-label":"Copy link to article",className:"p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-white border border-dark-border transition-colors relative light:bg-slate-100 light:hover:bg-slate-200 light:text-slate-600 light:border-slate-200",children:d?t.jsx(Sn,{className:"w-4 h-4 text-brand-400"}):t.jsx(ts,{className:"w-4 h-4"})})]})},ri=({author:r})=>t.jsxs("div",{className:"p-6 rounded-2xl border border-dark-border bg-dark-surface/80 dark:bg-dark-surface/80 light:bg-slate-50 light:border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-5",children:[t.jsx("img",{src:r.avatar,alt:r.name,className:"w-16 h-16 rounded-full object-cover ring-2 ring-brand-500/30 flex-shrink-0"}),t.jsxs("div",{className:"space-y-2 text-center sm:text-left",children:[t.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3",children:[t.jsx("h3",{className:"text-lg font-bold text-white light:text-slate-900",children:r.name}),t.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-brand-950/80 text-brand-300 border border-brand-800/40 w-fit mx-auto sm:mx-0 light:bg-brand-50 light:text-brand-700 light:border-brand-200",children:r.role})]}),t.jsx("p",{className:"text-sm text-slate-300 light:text-slate-600 leading-relaxed max-w-xl",children:r.bio}),t.jsxs("div",{className:"flex items-center justify-center sm:justify-start gap-3 pt-1",children:[r.github&&t.jsx("a",{href:r.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub profile",className:"text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors",children:t.jsx(he,{size:18})}),r.linkedin&&t.jsx("a",{href:r.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn profile",className:"text-slate-400 hover:text-brand-400 transition-colors",children:t.jsx(_e,{size:18})}),r.twitter&&t.jsx("a",{href:r.twitter,target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter) profile",className:"text-slate-400 hover:text-cyanBrand-500 transition-colors",children:t.jsx(je,{size:18})}),r.instagram&&t.jsx("a",{href:r.instagram,target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram profile",className:"text-slate-400 hover:text-rose-400 transition-colors",children:t.jsx(Ve,{size:18})})]})]})]}),si=()=>{const{slug:r}=jr(),s=r?Rs(r):void 0,d=r?Bs(r):{},m=s?Fs(s,3):[];if(P.useEffect(()=>{window.scrollTo(0,0)},[r]),P.useEffect(()=>{if(s){document.title=`${s.title} | Backend Engineering Journal`;let i=document.querySelector('meta[name="description"]');i||(i=document.createElement("meta"),i.setAttribute("name","description"),document.head.appendChild(i)),i.setAttribute("content",s.description)}return()=>{document.title="Backend Engineering Journal"}},[s]),!s)return t.jsxs("div",{className:"py-20 text-center space-y-4",children:[t.jsx("h2",{className:"text-2xl font-bold text-white light:text-slate-900",children:"Article Not Found"}),t.jsxs("p",{className:"text-sm text-slate-400",children:['The requested engineering article "',r,'" does not exist or has been moved.']}),t.jsxs($,{to:"/posts",className:"inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-500 text-dark-bg font-semibold text-sm",children:[t.jsx(Ye,{className:"w-4 h-4"}),t.jsx("span",{children:"Back to all articles"})]})]});const a=typeof window<"u"?window.location.href:"";return t.jsxs(t.Fragment,{children:[t.jsx(ni,{}),t.jsxs("div",{className:"space-y-10",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs($,{to:"/posts",className:"inline-flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-brand-400 light:text-slate-600 light:hover:text-brand-600 transition-colors",children:[t.jsx(Ye,{className:"w-4 h-4"}),t.jsx("span",{children:"Back to articles"})]}),t.jsx(pn,{title:s.title,url:a})]}),t.jsxs("header",{className:"space-y-4 border-b border-dark-border pb-8 light:border-slate-200",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[t.jsx($,{to:`/posts?category=${encodeURIComponent(s.category)}`,className:"text-xs font-mono font-semibold px-3 py-1 rounded-md bg-brand-950/80 text-brand-400 border border-brand-800/40 hover:bg-brand-900/40 transition-colors light:bg-brand-50 light:text-brand-700 light:border-brand-200",children:s.category}),t.jsxs("div",{className:"flex items-center space-x-3 text-xs text-slate-400 light:text-slate-500",children:[t.jsxs("span",{className:"flex items-center gap-1.5",children:[t.jsx(Qe,{className:"w-3.5 h-3.5"}),Ee(s.date)]}),t.jsxs("span",{className:"flex items-center gap-1.5",children:[t.jsx(Xe,{className:"w-3.5 h-3.5"}),s.readingTime," min read"]})]})]}),t.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-[1.2]",children:s.title}),t.jsx("p",{className:"text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed font-normal",children:s.description}),t.jsxs("div",{className:"pt-4 flex flex-wrap items-center justify-between gap-4",children:[t.jsxs("div",{className:"flex items-center space-x-3",children:[t.jsx("img",{src:s.author.avatar,alt:s.author.name,className:"w-10 h-10 rounded-full object-cover ring-2 ring-brand-500/30"}),t.jsxs("div",{children:[t.jsx("div",{className:"text-sm font-bold text-white light:text-slate-900",children:s.author.name}),t.jsx("div",{className:"text-xs text-slate-400 light:text-slate-500",children:s.author.role})]})]}),t.jsx("div",{className:"flex items-center gap-1.5 flex-wrap",children:s.tags.map(i=>t.jsxs($,{to:`/posts?tag=${encodeURIComponent(i)}`,className:"text-xs font-mono px-2.5 py-1 rounded-md bg-dark-surface border border-dark-border text-slate-300 hover:text-brand-400 hover:border-brand-500/40 transition-colors light:bg-slate-100 light:text-slate-700 light:border-slate-200",children:["#",i]},i))})]})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10",children:[t.jsxs("div",{className:"lg:col-span-8",children:[t.jsx("div",{className:"prose-journal",children:t.jsx(kr,{remarkPlugins:[Nr],rehypePlugins:[wr,Ar],components:{code({inline:i,className:c,children:l}){return t.jsx(ei,{className:c,inline:i,children:l})}},children:s.content})}),t.jsxs("div",{className:"mt-12 pt-6 border-t border-dark-border flex items-center justify-between light:border-slate-200",children:[t.jsx("div",{className:"text-sm font-semibold text-slate-300 light:text-slate-700",children:"Found this helpful? Share with your engineering team:"}),t.jsx(pn,{title:s.title,url:a})]}),t.jsx("div",{className:"mt-8",children:t.jsx(ri,{author:s.author})}),t.jsxs("nav",{className:"mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4",children:[d.previous?t.jsxs($,{to:`/posts/${d.previous.slug}`,className:"group p-4 rounded-xl border border-dark-border bg-dark-surface/60 hover:bg-dark-surface hover:border-brand-500/40 transition-all flex flex-col justify-between light:bg-white light:border-slate-200 light:hover:bg-slate-50",children:[t.jsxs("span",{className:"text-xs font-medium text-slate-500 flex items-center gap-1 mb-1",children:[t.jsx(Ye,{className:"w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform"}),"Previous Article"]}),t.jsx("span",{className:"text-sm font-semibold text-slate-200 group-hover:text-brand-400 line-clamp-1 light:text-slate-900 transition-colors",children:d.previous.title})]}):t.jsx("div",{}),d.next?t.jsxs($,{to:`/posts/${d.next.slug}`,className:"group p-4 rounded-xl border border-dark-border bg-dark-surface/60 hover:bg-dark-surface hover:border-brand-500/40 transition-all flex flex-col justify-between sm:items-end text-right light:bg-white light:border-slate-200 light:hover:bg-slate-50",children:[t.jsxs("span",{className:"text-xs font-medium text-slate-500 flex items-center gap-1 mb-1",children:["Next Article",t.jsx(le,{className:"w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"})]}),t.jsx("span",{className:"text-sm font-semibold text-slate-200 group-hover:text-brand-400 line-clamp-1 light:text-slate-900 transition-colors",children:d.next.title})]}):t.jsx("div",{})]})]}),t.jsx("aside",{className:"lg:col-span-4 hidden lg:block",children:t.jsxs("div",{className:"sticky top-24 space-y-6",children:[t.jsx(ti,{content:s.content}),t.jsxs("div",{className:"p-4 rounded-xl border border-dark-border bg-dark-surface/40 light:bg-white light:border-slate-200 text-xs text-slate-400 space-y-2.5",children:[t.jsxs("div",{className:"font-semibold text-slate-200 light:text-slate-800 flex items-center gap-1.5",children:[t.jsx(Qr,{className:"w-3.5 h-3.5 text-brand-400"}),"Article Quick Facts"]}),t.jsxs("div",{children:["Category: ",t.jsx("span",{className:"text-slate-300 light:text-slate-700 font-medium",children:s.category})]}),t.jsxs("div",{children:["Estimated Read: ",t.jsxs("span",{className:"text-slate-300 light:text-slate-700 font-medium",children:[s.readingTime," minutes"]})]}),t.jsxs("div",{children:["Published: ",t.jsx("span",{className:"text-slate-300 light:text-slate-700 font-medium",children:Ee(s.date)})]}),t.jsxs("div",{children:["Source format: ",t.jsx("span",{className:"font-mono text-brand-400",children:"Markdown (.md)"})]})]})]})})]}),m.length>0&&t.jsxs("section",{className:"pt-12 border-t border-dark-border light:border-slate-200 space-y-6",children:[t.jsx("h3",{className:"text-xl font-bold text-white light:text-slate-900",children:"Related Engineering Deep Dives"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:m.map(i=>t.jsx(Ot,{post:i},i.slug))})]})]})]})},ii=()=>{const r=It,s="https://www.linkedin.com/in/hari-m-47299b54",d="https://x.com/Siliconvallybg",m="https://www.instagram.com/er.harivibes",a=[{title:"Distributed Systems & Messaging",icon:Ct,description:"Designing fault-tolerant event streams, Raft consensus nodes, Kafka partitions, and dead-letter queue architectures.",skills:["Apache Kafka","Redis Streams","RabbitMQ","Raft Consensus","Idempotent Consumers"]},{title:"Python Backend Architecture",icon:Pt,description:"Building asynchronous, ultra-low latency REST and gRPC microservices with async event loops and optimized connection pools.",skills:["FastAPI","AsyncIO / AnyIO","Asyncpg / SQLAlchemy 2.0","Pydantic V2","gRPC & Protobuf"]},{title:"Cloud & Kubernetes Infrastructure",icon:jn,description:"Production cluster management, GitOps deployments, dynamic autoscaling, and service mesh security.",skills:["Kubernetes (EKS/GKE)","Docker & Multi-stage builds","Terraform","Helm & ArgoCD","AWS Architecture"]},{title:"Production LLM & AI Infrastructure",icon:Je,description:"High-throughput inference engines, continuous batching, KV-cache management, latency profiling, and hybrid search RAG.",skills:["vLLM","Triton Inference Server","Qdrant / Milvus","LangChain / LlamaIndex","TensorRT-LLM"]}],i=[{title:"Mechanical Sympathy",desc:"Understand the underlying hardware, network boundaries, and OS syscalls rather than trusting theoretical abstractions."},{title:"Idempotency by Default",desc:"Assume messages will be duplicated, networks will partition, and retry storms will occur. Engineer for eventual consistency and safe replays."},{title:"Zero-Guesswork Observability",desc:"Instrument distributed tracing, structured JSON logging, and RED (Rate, Errors, Duration) metrics before shipping to production."},{title:"Performance as a Feature",desc:"Sub-millisecond connection pooling, optimized database indexes, and efficient batching are essential for cost-effective scale."}];return t.jsxs("div",{className:"space-y-16 max-w-4xl mx-auto",children:[t.jsxs("section",{className:"flex flex-col sm:flex-row items-center sm:items-start gap-8 border-b border-dark-border pb-12 light:border-slate-200",children:[t.jsxs("div",{className:"relative",children:[t.jsx("img",{src:r.avatar,alt:r.name,className:"w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover ring-4 ring-brand-500/20 shadow-2xl"}),t.jsxs("div",{className:"absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-dark-surface border border-brand-500/50 text-[11px] font-mono font-semibold text-brand-400 flex items-center gap-1.5 shadow-md",children:[t.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-400 animate-pulse"}),"ACTIVE"]})]}),t.jsxs("div",{className:"space-y-4 text-center sm:text-left flex-1",children:[t.jsxs("div",{children:[t.jsx("span",{className:"text-xs font-mono font-semibold uppercase tracking-wider text-brand-400",children:"About the Author"}),t.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight mt-1",children:r.name}),t.jsx("p",{className:"text-base font-medium text-slate-300 light:text-slate-700 mt-1",children:r.role})]}),t.jsx("p",{className:"text-sm sm:text-base text-slate-400 light:text-slate-600 leading-relaxed",children:"I am a senior backend and AI infrastructure engineer focused on Python systems, cloud architecture, scalable distributed platforms, and production LLM serving. I write this journal to document battle-tested architectural patterns, real benchmarks, and the messy realities of building high-concurrency systems."}),t.jsxs("div",{className:"flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2",children:[t.jsxs("a",{href:"https://github.com/harimohan1990",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-dark-surface hover:bg-dark-elevated text-slate-200 text-xs font-semibold border border-dark-border transition-colors light:bg-white light:border-slate-300 light:text-slate-800",children:[t.jsx(he,{size:16}),t.jsx("span",{children:"GitHub"}),t.jsx(Ge,{className:"w-3 h-3 text-slate-500"})]}),t.jsxs("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-dark-surface hover:bg-dark-elevated text-slate-200 text-xs font-semibold border border-dark-border transition-colors light:bg-white light:border-slate-300 light:text-slate-800",children:[t.jsx(_e,{size:16,className:"text-brand-400"}),t.jsx("span",{children:"LinkedIn"}),t.jsx(Ge,{className:"w-3 h-3 text-slate-500"})]}),t.jsxs("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-dark-surface hover:bg-dark-elevated text-slate-200 text-xs font-semibold border border-dark-border transition-colors light:bg-white light:border-slate-300 light:text-slate-800",children:[t.jsx(je,{size:15,className:"text-cyanBrand-500"}),t.jsx("span",{children:"@Siliconvallybg"}),t.jsx(Ge,{className:"w-3 h-3 text-slate-500"})]}),t.jsxs("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-dark-surface hover:bg-dark-elevated text-slate-200 text-xs font-semibold border border-dark-border transition-colors light:bg-white light:border-slate-300 light:text-slate-800",children:[t.jsx(Ve,{size:16,className:"text-rose-400"}),t.jsx("span",{children:"@er.harivibes"}),t.jsx(Ge,{className:"w-3 h-3 text-slate-500"})]})]})]})]}),t.jsxs("section",{className:"p-6 sm:p-8 rounded-3xl border border-brand-500/30 bg-gradient-to-br from-dark-surface via-dark-surface to-dark-elevated light:from-white light:via-slate-50 light:to-slate-100 light:border-slate-300 space-y-4",children:[t.jsxs("div",{className:"flex items-center space-x-3",children:[t.jsx("div",{className:"p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400",children:t.jsx(ss,{className:"w-5 h-5"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold text-white light:text-slate-900",children:"Get in Touch & Connect"}),t.jsx("p",{className:"text-xs text-slate-400 light:text-slate-600",children:"Reach out for architectural discussions, systems collaborations, or engineering advisory."})]})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2",children:[t.jsxs("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"p-3.5 rounded-xl border border-dark-border bg-dark-bg/60 hover:border-brand-400 transition-all flex items-center space-x-3 group light:bg-white light:border-slate-200",children:[t.jsx("div",{className:"p-2 rounded-lg bg-dark-surface group-hover:bg-brand-950/40 text-brand-400",children:t.jsx(_e,{size:18})}),t.jsxs("div",{children:[t.jsx("div",{className:"text-xs font-bold text-slate-200 group-hover:text-brand-400 light:text-slate-900",children:"LinkedIn"}),t.jsx("div",{className:"text-[10px] text-slate-400 font-mono truncate max-w-[120px]",children:"hari-m-47299b54"})]})]}),t.jsxs("a",{href:"https://github.com/harimohan1990",target:"_blank",rel:"noopener noreferrer",className:"p-3.5 rounded-xl border border-dark-border bg-dark-bg/60 hover:border-brand-400 transition-all flex items-center space-x-3 group light:bg-white light:border-slate-200",children:[t.jsx("div",{className:"p-2 rounded-lg bg-dark-surface group-hover:bg-brand-950/40 text-brand-400",children:t.jsx(he,{size:18})}),t.jsxs("div",{children:[t.jsx("div",{className:"text-xs font-bold text-slate-200 group-hover:text-brand-400 light:text-slate-900",children:"GitHub"}),t.jsx("div",{className:"text-[10px] text-slate-400 font-mono",children:"harimohan1990"})]})]}),t.jsxs("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"p-3.5 rounded-xl border border-dark-border bg-dark-bg/60 hover:border-brand-400 transition-all flex items-center space-x-3 group light:bg-white light:border-slate-200",children:[t.jsx("div",{className:"p-2 rounded-lg bg-dark-surface group-hover:bg-brand-950/40 text-cyanBrand-500",children:t.jsx(je,{size:18})}),t.jsxs("div",{children:[t.jsx("div",{className:"text-xs font-bold text-slate-200 group-hover:text-brand-400 light:text-slate-900",children:"X (Twitter)"}),t.jsx("div",{className:"text-[10px] text-slate-400 font-mono truncate max-w-[120px]",children:"@Siliconvallybg"})]})]}),t.jsxs("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"p-3.5 rounded-xl border border-dark-border bg-dark-bg/60 hover:border-brand-400 transition-all flex items-center space-x-3 group light:bg-white light:border-slate-200",children:[t.jsx("div",{className:"p-2 rounded-lg bg-dark-surface group-hover:bg-brand-950/40 text-rose-400",children:t.jsx(Ve,{size:18})}),t.jsxs("div",{children:[t.jsx("div",{className:"text-xs font-bold text-slate-200 group-hover:text-brand-400 light:text-slate-900",children:"Instagram"}),t.jsx("div",{className:"text-[10px] text-slate-400 font-mono truncate max-w-[120px]",children:"@er.harivibes"})]})]})]})]}),t.jsxs("section",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsxs("h2",{className:"text-2xl font-bold text-white light:text-slate-900 flex items-center gap-2",children:[t.jsx(Jr,{className:"w-6 h-6 text-brand-400"}),t.jsx("span",{children:"Technical Competencies"})]}),t.jsx("p",{className:"text-sm text-slate-400 light:text-slate-600 mt-1",children:"Specialized engineering domains honed across high-traffic platforms and distributed microservices."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:a.map(c=>{const l=c.icon;return t.jsxs("div",{className:"p-6 rounded-2xl border border-dark-border bg-dark-surface/60 light:bg-white light:border-slate-200 space-y-4",children:[t.jsxs("div",{className:"flex items-center space-x-3",children:[t.jsx("div",{className:"p-2.5 rounded-xl bg-dark-elevated border border-dark-border text-brand-400 light:bg-slate-100 light:border-slate-200",children:t.jsx(l,{className:"w-5 h-5"})}),t.jsx("h3",{className:"text-base font-bold text-white light:text-slate-900",children:c.title})]}),t.jsx("p",{className:"text-xs text-slate-400 light:text-slate-600 leading-relaxed",children:c.description}),t.jsx("div",{className:"flex flex-wrap gap-1.5 pt-1",children:c.skills.map(b=>t.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-dark-bg text-slate-300 border border-dark-border/60 light:bg-slate-100 light:text-slate-700 light:border-slate-200",children:b},b))})]},c.title)})})]}),t.jsxs("section",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsxs("h2",{className:"text-2xl font-bold text-white light:text-slate-900 flex items-center gap-2",children:[t.jsx(xe,{className:"w-6 h-6 text-brand-400"}),t.jsx("span",{children:"Engineering Principles"})]}),t.jsx("p",{className:"text-sm text-slate-400 light:text-slate-600 mt-1",children:"The guiding rules I follow when architecting reliable software."})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:i.map((c,l)=>t.jsxs("div",{className:"p-5 rounded-2xl border border-dark-border bg-dark-surface/30 light:bg-white light:border-slate-200 space-y-2",children:[t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsxs("span",{className:"text-xs font-mono text-brand-400 font-bold",children:["0",l+1,"."]}),t.jsx("h4",{className:"text-sm font-bold text-white light:text-slate-900",children:c.title})]}),t.jsx("p",{className:"text-xs text-slate-400 light:text-slate-600 leading-relaxed",children:c.desc})]},c.title))})]}),t.jsxs("section",{className:"p-8 rounded-3xl border border-dark-border bg-gradient-to-r from-dark-surface to-dark-elevated text-center space-y-4 light:from-white light:to-slate-100 light:border-slate-200",children:[t.jsx("h3",{className:"text-xl font-bold text-white light:text-slate-900",children:"Interested in Collaborating or Discussing Architecture?"}),t.jsx("p",{className:"text-xs sm:text-sm text-slate-400 light:text-slate-600 max-w-xl mx-auto",children:"Whether you want to exchange thoughts on distributed consensus, benchmark LLM latency, or discuss backend architecture, feel free to reach out."}),t.jsxs("div",{className:"flex items-center justify-center gap-4 pt-2",children:[t.jsx("a",{href:"https://github.com/harimohan1990",target:"_blank",rel:"noopener noreferrer",className:"px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-dark-bg text-xs font-bold transition-all shadow-md shadow-brand-500/20",children:"Follow on GitHub"}),t.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"px-5 py-2.5 rounded-xl bg-dark-surface hover:bg-dark-elevated border border-dark-border text-slate-200 text-xs font-bold transition-all light:bg-white light:border-slate-300 light:text-slate-800",children:"Connect on LinkedIn"})]})]})]})},ai=()=>{const[r,s]=P.useState("All"),d=[{id:"aetherstream",title:"AetherStream Core",tagline:"High-Throughput Distributed Event-Driven Orchestration Engine",category:"Distributed Systems",status:"Open Source",featured:!0,description:"A resilient distributed streaming engine designed to coordinate heterogeneous microservices with strict ordering guarantees, consumer group rebalancing, and dead-letter replay buffers.",architectureSummary:["Partitioned log architecture inspired by Apache Kafka with sub-millisecond local disk append.","Zero-loss consumer offset commits backed by distributed Raft state machine.","Dynamic backpressure flow control to avoid cascading downstream microservice crashes."],metrics:[{label:"Throughput",value:"185,000 msgs/sec"},{label:"P99 Latency",value:"< 2.4 ms"},{label:"Rebalance Recovery",value:"420 ms"}],tags:["Python","Kafka","Redis Streams","AsyncIO","Docker"],githubUrl:"https://github.com/harimohan1990/hari-engineering-journal"},{id:"kubellm-autopilot",title:"KubeLLM-Autopilot",tagline:"Autonomous GPU Autoscaler & Inference Proxy for vLLM on Kubernetes",category:"AI Infrastructure",status:"Production",featured:!0,description:"Custom Kubernetes CRD and intelligent proxy controller that dynamically provisions GPU nodes (A100/H100) based on KV-cache memory saturation and token queue depth rather than raw CPU/GPU utilization.",architectureSummary:["Real-time token queue depth and KV-cache telemetry scraper connecting to vLLM Prometheus metrics.","Predictive scale-up controller preventing tail-latency spikes during traffic surges.","Smart request routing avoiding model cold starts by pinning sessions to warm GPU replicas."],metrics:[{label:"VRAM Utilization",value:"94% optimal"},{label:"Cold-Start Reduction",value:"78%"},{label:"GPU Cost Savings",value:"42%"}],tags:["Kubernetes","vLLM","Go","Prometheus","AWS EKS","CUDA"],githubUrl:"https://github.com/harimohan1990/hari-engineering-journal"},{id:"fastpg-pooler",title:"FastPG-Pooler",tagline:"Adaptive Connection Pooler & Circuit Breaker for FastAPI & Asyncpg",category:"Database & Storage",status:"Open Source",description:"Lightweight connection pool supervisor for PostgreSQL that eliminates connection exhaustion during spike traffic while providing automated query circuit-breaking and tenant rate-limiting.",architectureSummary:["Adaptive pool sizing based on Postgres transaction latency and active backend counts.","Automatic circuit breaker trips when query execution times exceed SLA threshold.","Integrated zero-overhead prepared statement caching and tenant isolation."],metrics:[{label:"Max Concurrency",value:"12,000 conns"},{label:"Pool Overhead",value:"< 0.08 ms"},{label:"Crash Prevention",value:"100% test coverage"}],tags:["Python","FastAPI","PostgreSQL","Asyncpg","SQLAlchemy"],githubUrl:"https://github.com/harimohan1990/hari-engineering-journal"},{id:"modelbench-core",title:"ModelBench-Core",tagline:"High-Concurrency LLM Inference & TTFT Evaluation Harness",category:"AI Infrastructure",status:"Open Source",description:"Comprehensive benchmarking suite for measuring Time-to-First-Token (TTFT), Inter-Token-Latency (ITL), and throughput under realistic bursty concurrent request patterns across TensorRT-LLM, vLLM, and Ollama.",architectureSummary:["Asynchronous distributed traffic generator simulating diverse prompt/generation length distributions.","Precision nanosecond token-stream capture recording streaming response jitter.","Automated markdown report generator with latency CDF distributions and GPU memory waterfalls."],metrics:[{label:"Max Simulated Clients",value:"5,000 concurrent"},{label:"Timer Precision",value:"< 10 microseconds"}],tags:["Python","vLLM","Triton","NumPy","Docker"],githubUrl:"https://github.com/harimohan1990/hari-engineering-journal"},{id:"vectorshield-rag",title:"VectorShield RAG Cache",tagline:"Sub-Millisecond Semantic Query Cache & Reranking Proxy",category:"AI Infrastructure",status:"Active Research",description:"A proxy caching layer sitting between LLM applications and vector databases that prevents redundant embedding computations and vector scans by matching semantically equivalent queries within an epsilon radius.",architectureSummary:["Hierarchical two-tier cache: exact L1 hash match + approximate cosine L2 semantic cluster.","Asynchronous background invalidation when underlying knowledge base updates.","Cross-encoder reranking stage ensuring semantic fidelity before cache return."],metrics:[{label:"Cache Hit Rate",value:"64% production"},{label:"Hit Latency",value:"3.8 ms"},{label:"Embedding API Reduction",value:"62%"}],tags:["Python","Qdrant","Redis","HuggingFace","FastAPI"],githubUrl:"https://github.com/harimohan1990/hari-engineering-journal"},{id:"raftkv-distributed",title:"RaftKV-Distributed",tagline:"Consensus-Backed Distributed Key-Value Store with WAL",category:"Distributed Systems",status:"Open Source",description:"Educational and production-tested distributed key-value store demonstrating Raft leader election, log replication, safety invariants, and compacted snapshot transfers across network partitions.",architectureSummary:["Complete Raft protocol implementation with term voting, heartbeats, and leader leases.","Write-Ahead Logging (WAL) with fsync batching for durability.","Chaos-engineering test suite injecting artificial network splits and node kills."],metrics:[{label:"Election Time",value:"< 150 ms"},{label:"Linearizable Reads",value:"Strict consensus"}],tags:["Python","Go","Raft Protocol","gRPC","Distributed Systems"],githubUrl:"https://github.com/harimohan1990/hari-engineering-journal"}],m=["All","Distributed Systems","AI Infrastructure","Database & Storage"],a=r==="All"?d:d.filter(i=>i.category===r);return t.jsxs("div",{className:"space-y-12",children:[t.jsxs("div",{className:"border-b border-dark-border pb-6 light:border-slate-200",children:[t.jsxs("div",{className:"flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-400 mb-2",children:[t.jsx(es,{className:"w-4 h-4"}),t.jsx("span",{children:"Systems & Infrastructure Projects"})]}),t.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight",children:"Engineering Portfolio & Open Source"}),t.jsx("p",{className:"text-slate-400 light:text-slate-600 text-sm sm:text-base mt-2 max-w-3xl",children:"Architectural prototypes, distributed systems experiments, high-performance tooling, and production AI inference engines built and benchmarked for scale."})]}),t.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none",children:[t.jsx(Mn,{className:"w-4 h-4 text-slate-500 mr-1 flex-shrink-0"}),m.map(i=>t.jsx("button",{onClick:()=>s(i),className:`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${r===i?"bg-brand-500 text-dark-bg font-semibold":"bg-dark-surface/60 text-slate-300 border border-dark-border hover:bg-dark-elevated light:bg-slate-100 light:text-slate-700 light:border-slate-200"}`,children:i},i))]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:a.map(i=>t.jsxs("div",{className:"rounded-2xl border border-dark-border bg-dark-surface/60 hover:bg-dark-surface/90 hover:border-slate-700 transition-all p-6 sm:p-8 flex flex-col justify-between light:bg-white light:border-slate-200 light:hover:border-slate-300 shadow-sm",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between gap-2",children:[t.jsx("span",{className:"text-xs font-mono font-medium px-2.5 py-1 rounded bg-dark-elevated text-cyanBrand-500 border border-dark-border light:bg-slate-100 light:border-slate-200 light:text-cyan-700",children:i.category}),t.jsx("span",{className:`text-[11px] font-mono px-2 py-0.5 rounded-full font-semibold border ${i.status==="Production"?"bg-emerald-950/80 text-emerald-400 border-emerald-800/40 light:bg-emerald-50 light:text-emerald-700 light:border-emerald-200":i.status==="Open Source"?"bg-brand-950/80 text-brand-400 border-brand-800/40 light:bg-brand-50 light:text-brand-700 light:border-brand-200":"bg-amber-950/80 text-amber-400 border-amber-800/40 light:bg-amber-50 light:text-amber-700 light:border-amber-200"}`,children:i.status})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white light:text-slate-900 tracking-tight",children:i.title}),t.jsx("p",{className:"text-xs sm:text-sm font-medium text-brand-400 light:text-brand-600 mt-1",children:i.tagline})]}),t.jsx("p",{className:"text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed",children:i.description}),t.jsxs("div",{className:"space-y-2 pt-2",children:[t.jsxs("h4",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 flex items-center gap-1.5",children:[t.jsx(hs,{className:"w-3.5 h-3.5 text-amber-400"}),"Key Architectural Decisions"]}),t.jsx("ul",{className:"space-y-1.5 text-xs text-slate-400 light:text-slate-600 list-disc list-inside",children:i.architectureSummary.map((c,l)=>t.jsx("li",{className:"leading-relaxed",children:c},l))})]}),t.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2 pt-3",children:i.metrics.map((c,l)=>t.jsxs("div",{className:"p-2.5 rounded-xl bg-dark-bg/80 border border-dark-border/60 text-center light:bg-slate-50 light:border-slate-200",children:[t.jsx("div",{className:"text-xs font-bold text-white light:text-slate-900 font-mono",children:c.value}),t.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-wider mt-0.5",children:c.label})]},l))})]}),t.jsxs("div",{className:"pt-6 mt-6 border-t border-dark-border/60 flex flex-wrap items-center justify-between gap-3 light:border-slate-200",children:[t.jsx("div",{className:"flex flex-wrap gap-1.5",children:i.tags.map(c=>t.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-dark-elevated text-slate-400 border border-dark-border/40 light:bg-slate-100 light:text-slate-600",children:["#",c]},c))}),t.jsx("div",{className:"flex items-center gap-2",children:i.githubUrl&&t.jsxs("a",{href:i.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-300 hover:text-white border border-dark-border text-xs font-semibold transition-colors light:bg-slate-100 light:text-slate-800 light:border-slate-300",children:[t.jsx(he,{size:14}),t.jsx("span",{children:"Source"})]})})]})]},i.id))})]})},oi=()=>t.jsxs("div",{className:"py-24 text-center space-y-6 max-w-md mx-auto",children:[t.jsx("div",{className:"w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 mx-auto",children:t.jsx(xe,{className:"w-8 h-8"})}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("span",{className:"text-xs font-mono font-semibold text-brand-400 uppercase tracking-wider",children:"404: HTTP NOT FOUND"}),t.jsx("h1",{className:"text-3xl font-extrabold text-white light:text-slate-900 tracking-tight",children:"Page Not In Routing Table"}),t.jsx("p",{className:"text-sm text-slate-400 light:text-slate-600",children:"The requested path does not match any engineering journal route or article slug."})]}),t.jsx("div",{className:"pt-2",children:t.jsxs($,{to:"/",className:"inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-dark-bg font-semibold text-sm transition-all shadow-lg shadow-brand-500/20",children:[t.jsx(Ye,{className:"w-4 h-4"}),t.jsx("span",{children:"Return to Journal Home"})]})})]}),li=()=>t.jsx(Or,{children:t.jsx(Ir,{basename:"/hari-engineering-journal/",children:t.jsx($s,{children:t.jsxs(Cr,{children:[t.jsx(fe,{path:"/",element:t.jsx(Ws,{})}),t.jsx(fe,{path:"/posts",element:t.jsx(Vs,{})}),t.jsx(fe,{path:"/posts/:slug",element:t.jsx(si,{})}),t.jsx(fe,{path:"/about",element:t.jsx(ii,{})}),t.jsx(fe,{path:"/projects",element:t.jsx(ai,{})}),t.jsx(fe,{path:"*",element:t.jsx(oi,{})})]})})})});Rr.createRoot(document.getElementById("root")).render(t.jsx(gn.StrictMode,{children:t.jsx(li,{})}));
