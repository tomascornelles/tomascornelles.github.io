import{f as p,u as h,o as l,c as u,_ as m,a as s,b as _,w as r,d as a,F as x}from"./entry.9d706279.js";import{_ as g}from"./nuxt-link.82267cc4.js";const v=c=>Object.fromEntries(Object.entries(c).filter(([,t])=>t!==void 0)),w=(c,t)=>(e,n)=>(h(()=>c({...v(e),...n.attrs},n)),()=>{var o,i;return t?(i=(o=n.slots).default)==null?void 0:i.call(o):null}),b=p({name:"Title",inheritAttrs:!1,setup:w((c,{slots:t})=>{var e,n,o;return{title:((o=(n=(e=t.default)==null?void 0:e.call(t))==null?void 0:n[0])==null?void 0:o.children)||null}})}),y={__name:"Favicon",props:{customIcon:String},setup(c){const t=c,e={6:"🌈",10:"🎃",12:"🎄",default:"🔴"},n=(()=>new Date().getMonth()+1)(),o=e[n]||e.default,d=`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${t.customIcon||o}</text></svg>`;return(f,P)=>(l(),u("link",{rel:"icon",href:d}))}},B=y;const F={},N=s("h1",null," 🚀 My page ",-1),$={role:"menu"},k={role:"menubar"},H={role:"menuitem"},I={role:"menuitem"},T={role:"menuitem"},C={role:"menuitem"};function M(c,t){const e=g;return l(),u("header",null,[N,s("section",$,[s("ul",k,[s("li",H,[_(e,{to:"sobre-mi"},{default:r(()=>[a("🧔 Sobre mi")]),_:1})]),s("li",I,[_(e,{to:"porfolio"},{default:r(()=>[a("🗃️ Porfolio")]),_:1})]),s("li",T,[_(e,{to:"blog"},{default:r(()=>[a("📰 Blog")]),_:1})]),s("li",C,[_(e,{to:"contacto"},{default:r(()=>[a("📨 Contacto")]),_:1})])])])])}const V=m(F,[["render",M]]),j={},E=s("h1",null," Nuxt way ",-1);function O(c,t){const e=b,n=B,o=V;return l(),u(x,null,[_(e,null,{default:r(()=>[a(" Home ")]),_:1}),_(n),_(o),E],64)}const z=m(j,[["render",O]]);export{z as default};
