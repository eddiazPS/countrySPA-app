import{F as d,G as l,N as f,O as u,P as h,R as C,U as p,V as g,W as y,Z as M,_ as v,g as r,i as c,j as i,r as m,s,t as a}from"./chunk-VJCI6A7Q.js";var j=[{path:"about",component:g},{path:"contact",component:y},{path:"countries",loadChildren:()=>import("./chunk-ZARZMGDR.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],w=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[p.forRoot(j),p]});let o=t;return o})();var N=(()=>{let t=class t{constructor(){this.title="countryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(e,x){e&1&&(m(0,"div",0)(1,"div",1),a(2,"shared-sidebar"),s(),m(3,"div",2),a(4,"router-outlet"),s()())},dependencies:[M,C]});let o=t;return o})();var S=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[N]}),t.\u0275inj=r({providers:[{provide:d,useClass:l}],imports:[h,v,w,f]});let o=t;return o})();u().bootstrapModule(S).catch(o=>console.error(o));
