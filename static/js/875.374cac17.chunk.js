"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[875],{906:function(n,i,e){e.d(i,{o:function(){return $}});var r,t,o,l,c,s,a,d,x,p=e(168),h=e(867),u=e(153),f=h.ZP.ul(r||(r=(0,p.Z)(["\n  @media "," {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    list-style: none;\n    margin-top: -","px;\n    margin-left: -","px;\n  }\n\n  @media "," {\n    margin-top: -","px;\n    margin-left: -","px;\n  }\n"])),u.Uh.tablet,30,20,u.Uh.desktop,50,29),g=h.ZP.li(t||(t=(0,p.Z)(["\n  margin-bottom: 20px;\n\n  @media "," {\n    flex-basis: calc(100% / "," - ","px);\n    margin-top: ","px;\n    margin-left: ","px;\n    transition: scale ",";\n    cursor: pointer;\n  }\n\n  @media "," {\n    flex-basis: calc(100% / "," - ","px);\n    margin-top: ","px;\n    margin-left: ","px;\n\n    &:hover {\n      scale: 1.007;\n    }\n  }\n\n  /* & * {\n    outline: 1px solid blueviolet;\n  } */\n"])),u.Uh.tablet,2,20,30,20,u.eR,u.Uh.desktop,4,29,50,29),j=h.ZP.article(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  box-shadow: ",";\n  border-radius: 10px;\n  overflow: hidden;\n"])),u.AF),m=h.ZP.div(l||(l=(0,p.Z)(["\n  position: relative;\n  height: 268px;\n\n  & img {\n    height: 100%;\n    object-fit: cover;\n  }\n"]))),v=h.ZP.div(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1;\n  padding: 10px;\n"]))),Z=h.ZP.div(s||(s=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),b=h.ZP.h2(a||(a=(0,p.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: calc(24 / 16);\n\n  color: ",";\n\n  & span {\n    color: ",";\n  }\n"])),u.vr,u.HR),w=(h.ZP.h2(d||(d=(0,p.Z)(["\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),h.ZP.div(x||(x=(0,p.Z)(["\n  color: ",";\n\n  & ul {\n    display: flex;\n    gap: 6px;\n    flex-wrap: wrap;\n\n    & li {\n      &:not(:last-child) {\n        height: 16px;\n        border-right: 1px solid ",";\n        padding-right: 6px;\n      }\n    }\n  }\n"])),u.Yd,u.Tb)),C=e(967),P=e(18),k=e(158),y=e(184),$=function(n){var i=n.listCars,e=(0,C.F)(),r=e.getIdCar,t=e.toggleModal;return(0,y.jsx)("section",{children:(0,y.jsx)(k.W,{style:{marginBottom:"50px"},children:(0,y.jsx)(f,{children:i&&i.map((function(n){var i=n.id,e=n.img,o=n.make,l=n.model,c=n.year,s=n.rentalPrice,a=n.type,d=n.rentalCompany,x=n.address,p=n.mileage,h=n.fuelConsumption,u=x.split(",");return(0,y.jsx)(g,{"data-card":i,onClick:function(n){"svg"!==n.target.nodeName&&"use"!==n.target.nodeName&&(r(n.currentTarget.dataset.card),t())},children:(0,y.jsxs)(j,{children:[(0,y.jsxs)(m,{children:[(0,y.jsx)("img",{src:e,alt:o}),(0,y.jsx)(P.r,{id:i,$top:"14px",$right:"14px"})]}),(0,y.jsxs)(v,{children:[(0,y.jsxs)(Z,{children:[(0,y.jsxs)(b,{children:[o,", ",(0,y.jsx)("span",{children:l})," ",c]}),(0,y.jsx)(b,{children:s})]}),(0,y.jsxs)(w,{children:[(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:u[1]}),(0,y.jsx)("li",{children:u[2]}),(0,y.jsx)("li",{children:d})]}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:a}),(0,y.jsx)("li",{children:l}),(0,y.jsx)("li",{children:p}),(0,y.jsx)("li",{children:"Fuel: ".concat(h)})]})]})]})]})},i)}))})})})}},18:function(n,i,e){e.d(i,{r:function(){return h}});var r,t=e(433),o=e(967),l=e(168),c=e(867),s=e(153),a=c.ZP.svg(r||(r=(0,l.Z)(["\n  position: absolute;\n\n  top: ",";\n  right: ",";\n\n  stroke: ",";\n  fill: ",";\n\n  transition: scale ",";\n\n  &:hover {\n    scale: 1.1;\n  }\n"])),(function(n){return n.$top||"0px"}),(function(n){return n.$right||"0px"}),(function(n){return n.$idInc?"none":"rgba(255, 255, 255, 0.8)"}),(function(n){return n.$idInc?"".concat(s.HR):"none"}),s.eR),d=e(609),x=e(669),p=e(184),h=function(n){var i=n.id,e=n.$top,r=n.$right,l=(0,o.F)(),c=l.idCarsFavorite,s=l.setIdCarsFavorite;return(0,p.jsx)(a,{$top:e,$right:r,$idInc:c.includes(i),width:"20px",height:"20px","data-card":i,onClick:function(){if(!c.includes(i))return s((function(n){return[].concat((0,t.Z)(n),[i])})),void(0,x.nL)("idCars",[].concat((0,t.Z)(c),[i]));if(c.includes(i)){var n=(0,t.Z)(c);n.splice(c.indexOf(i),1),s(n),(0,x.nL)("idCars",n)}1===c.length&&(0,x.dZ)("idCars")},children:(0,p.jsx)("use",{href:"".concat(d.Z,"#icon-like-active")})})}},792:function(n,i,e){e.d(i,{u:function(){return u}});var r,t,o=e(791),l=e(164),c=e(168),s=e(867),a=e(153),d=s.ZP.div(r||(r=(0,c.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  z-index: 1200;\n"])),a.O2),x=s.ZP.div(t||(t=(0,c.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),p=e(184),h=document.querySelector("#modal-root");function u(n){var i=n.children,e=n.onClose;return(0,o.useEffect)((function(){function n(n){"Escape"===n.code&&e()}return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]),document.body.style.overflow="hidden",(0,l.createPortal)((0,p.jsx)(d,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,p.jsx)(x,{children:i})}),h)}},322:function(n,i,e){e.d(i,{p:function(){return z}});var r,t,o,l,c,s,a,d,x,p=e(609),h=e(168),u=e(867),f=e(153),g=u.ZP.div(r||(r=(0,h.Z)(["\n  position: relative;\n  width: 541px;\n  min-height: 752px;\n  padding: 40px;\n\n  border-radius: 15px;\n  background-color: ",";\n\n  & > svg {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    stroke: ",";\n    cursor: pointer;\n  }\n"])),f.zQ,f.vr),j=u.ZP.div(t||(t=(0,h.Z)(["\n  position: relative;\n\n  & img {\n    border-radius: 15px;\n    width: 469px;\n    height: 314px;\n    object-fit: cover;\n    border-radius: 10px;\n  }\n"]))),m=u.ZP.div(o||(o=(0,h.Z)(["\n  margin-top: 15px;\n  margin-bottom: 24px;\n"]))),v=u.ZP.h2(l||(l=(0,h.Z)(["\n  margin-bottom: 8px;\n\n  font-size: 18px;\n  font-weight: 500;\n  line-height: calc(24 / 16);\n\n  color: ",";\n\n  & span {\n    color: ",";\n  }\n"])),f.vr,f.HR),Z=u.ZP.ul(c||(c=(0,h.Z)(["\n  color: ",";\n  display: flex;\n  flex-wrap: wrap;\n\n  & li {\n    &:not(:last-child) {\n      height: 16px;\n      border-right: 1px solid ",";\n      padding-right: 6px;\n      margin-right: 6px;\n    }\n  }\n"])),f.Yd,f.Tb),b=u.ZP.li(s||(s=(0,h.Z)(["\n  padding: 7px 14px;\n  border-radius: 35px;\n  color: ",";\n  background-color: ",";\n\n  & span {\n    color: ",";\n  }\n"])),f.R$,f.PM,f.HR),w=u.ZP.p(a||(a=(0,h.Z)(["\n  margin-top: 14px;\n\n  font-size: 14px;\n  line-height: calc (20/14);\n\n  color: ",";\n"])),f.vr),C=u.ZP.p(d||(d=(0,h.Z)(["\n  margin-top: 14px;\n  margin-bottom: 8px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: calc (20/14);\n\n  color: ",";\n"])),f.vr),P=u.ZP.a(x||(x=(0,h.Z)(["\n  width: 168px;\n  padding: 12px 50px;\n\n  font-size: 14px;\n  font-weight: 600;\n  line-height: calc(20 / 14);\n\n  border-radius: 12px;\n  color: ",";\n  background-color: ",";\n  transition: background-color ",";\n\n  &:hover,\n  :focus {\n    background-color: ",";\n  }\n"])),f.zQ,f.HR,f.eR,f.HA),k=e(188),y=e(18),$=e(184),z=function(n){var i=n.onClose,e=n.dataOneCar,r=e.img,t=e.make,o=e.model,l=e.year,c=e.address,s=e.id,a=e.type,d=e.fuelConsumption,x=e.engineSize,h=e.description,u=e.accessories,f=e.functionalities,z=e.rentalPrice,F=e.mileage,R=e.rentalConditions,E=c.split(","),H=R.split("\n"),M=(0,k.Y)("".concat(F));return(0,$.jsxs)(g,{children:[(0,$.jsx)("svg",{width:"24px",height:"24px",onClick:i,children:(0,$.jsx)("use",{href:"".concat(p.Z,"#icon-x")})}),(0,$.jsxs)("article",{children:[(0,$.jsxs)(j,{children:[(0,$.jsx)("img",{src:r,alt:t}),(0,$.jsx)(y.r,{id:s,$top:"25px",$right:"25px"})]}),(0,$.jsxs)(m,{children:[(0,$.jsxs)(v,{children:[t,", ",(0,$.jsx)("span",{children:o})," ",l]}),(0,$.jsxs)("div",{children:[(0,$.jsxs)(Z,{children:[(0,$.jsx)("li",{children:E[1]}),(0,$.jsx)("li",{children:E[2]}),(0,$.jsx)("li",{children:"id: ".concat(s)}),(0,$.jsx)("li",{children:"Year: ".concat(l)}),(0,$.jsx)("li",{children:"Type: ".concat(a)})]}),(0,$.jsxs)(Z,{children:[(0,$.jsx)("li",{children:"Fuel Consumption: ".concat(d)}),(0,$.jsx)("li",{children:"Engine Size: ".concat(x)})]})]}),(0,$.jsx)(w,{children:h})]}),(0,$.jsxs)(m,{children:[(0,$.jsx)(C,{children:"Accessories and functionalities:"}),(0,$.jsx)(Z,{children:u.map((function(n){return(0,$.jsx)("li",{children:n},n)}))}),(0,$.jsx)(Z,{children:f.map((function(n){return(0,$.jsx)("li",{children:n},n)}))})]}),(0,$.jsxs)(m,{children:[(0,$.jsx)(C,{children:"Rental Conditions: "}),(0,$.jsxs)("ul",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,$.jsxs)(b,{children:["Minimum age: ",(0,$.jsx)("span",{children:H[0].slice(-2)})]}),(0,$.jsx)(b,{children:H[1]}),(0,$.jsx)(b,{children:H[2]}),(0,$.jsxs)(b,{children:["Mileage: ",(0,$.jsx)("span",{children:M})]}),(0,$.jsxs)(b,{children:["Price: ",(0,$.jsx)("span",{children:z})]})]})]}),(0,$.jsx)(P,{href:"tel:+380730000000",children:"Rental car"})]})]})}},875:function(n,i,e){e.r(i);var r=e(433),t=e(439),o=e(906),l=e(895),c=e(792),s=e(322),a=e(791),d=e(967),x=e(565),p=e(184);i.default=function(){var n=(0,x.J)().data,i=(0,d.F)(),e=i.showModal,h=i.toggleModal,u=i.dataOneCar,f=i.dataFilter,g=f.Carbrand,j=f.Pricehour,m=f.priceFrom,v=f.priceTo,Z=(0,a.useState)(null),b=(0,t.Z)(Z,2),w=b[0],C=b[1];return(0,a.useEffect)((function(){if(n){var i=(0,r.Z)(n).sort((function(n,i){return n.make>i.make?1:-1}));g&&(i=i.filter((function(n){return n.make===g}))),j&&(i=i.filter((function(n){var i=n.rentalPrice;return Number(i.slice(1))<=Number(j)}))),m&&(i=i.filter((function(n){return n.mileage>=m}))),v&&(i=i.filter((function(n){return n.mileage<=v}))),C(i)}}),[g,j,m,v,n]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.w,{}),(0,p.jsx)(o.o,{listCars:w}),e&&(0,p.jsx)(c.u,{onClose:h,children:(0,p.jsx)(s.p,{onClose:h,dataOneCar:u})})]})}}}]);
//# sourceMappingURL=875.374cac17.chunk.js.map