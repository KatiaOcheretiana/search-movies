"use strict";(self.webpackChunksearch_movies=self.webpackChunksearch_movies||[]).push([[806],{1687:function(n,e,r){r.d(e,{AE:function(){return l},Df:function(){return s},au:function(){return p},fh:function(){return f},q5:function(){return d},z1:function(){return o}});var t=r(5861),a=r(4687),u=r.n(a),c=r(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="663f98b62f35cf0441bf8b451b47f044",s=function(){var n=(0,t.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?language=en-US&api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1&api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?language=en-US&api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?language=en-US&api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?language=en-US&api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/videos?language=en-US&api_key=").concat(i));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results.filter((function(n){return"Official Trailer"===n.name}))[0]);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1806:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,a,u,c=r(5861),i=r(9439),s=r(4687),o=r.n(s),f=r(1687),p=r(7658),d=r(2791),l=r(7689),v=r(168),h=r(5867),g=h.ZP.ul(t||(t=(0,v.Z)(["\n  display: grid;\n  justify-content: center;\n  gap: 25px;\n"]))),x=h.ZP.li(a||(a=(0,v.Z)(["\n  background: linear-gradient(\n    rgba(90, 90, 90, 0.2),\n    rgba(90, 90, 90, 0.3),\n    rgba(90, 90, 90, 0.4)\n  );\n  padding: 20px;\n  border-radius: 10px;\n"]))),m=h.ZP.h3(u||(u=(0,v.Z)(["\n  margin-bottom: 10px;\n  font-weight: 700;\n"]))),Z=r(3728),b=r(184);function k(){var n=(0,d.useState)(null),e=(0,i.Z)(n,2),r=e[0],t=e[1],a=(0,d.useState)(!1),u=(0,i.Z)(a,2),s=u[0],v=u[1],h=(0,d.useState)(!1),k=(0,i.Z)(h,2),w=k[0],y=k[1],j=(0,l.UO)().movieId;return(0,d.useEffect)((function(){var n=function(){var n=(0,c.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,y(!0),v(!1),n.next=5,(0,f.q5)(e);case 5:r=n.sent,t(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),v(!0);case 12:return n.prev=12,y(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(e){return n.apply(this,arguments)}}();n(j)}),[j]),(0,b.jsxs)(b.Fragment,{children:[w&&(0,b.jsx)(p.a,{}),s&&(0,b.jsx)("h3",{children:"Try to reload this page "}),r&&0===r.length&&(0,b.jsx)("p",{children:"We didn't find reviews of this movie"}),r&&(0,b.jsx)(g,{children:r.map((function(n){var e=n.author,r=n.id,t=n.content;return(0,b.jsxs)(x,{children:[(0,b.jsxs)(m,{children:[(0,b.jsx)(Z.IMt,{}),e]}),(0,b.jsx)("p",{children:t})]},r)}))})]})}}}]);
//# sourceMappingURL=806.1f85c240.chunk.js.map