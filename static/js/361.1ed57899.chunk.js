"use strict";(self.webpackChunksearch_movies=self.webpackChunksearch_movies||[]).push([[361],{1687:function(n,e,r){r.d(e,{Df:function(){return o},au:function(){return d},fh:function(){return p},q5:function(){return l},z1:function(){return u}});var t=r(5861),a=r(4687),c=r.n(a),i=r(5294);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="663f98b62f35cf0441bf8b451b47f044",o=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?language=en-US&api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1&api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?language=en-US&api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?language=en-US&api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?language=en-US&api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3361:function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var t,a,c,i,s,o,u=r(5861),p=r(9439),d=r(4687),l=r.n(d),f=r(1687),x=r(7658),h=r(3852),v=r(2599),g=r(168),b=r(5867),m=b.ZP.div(t||(t=(0,g.Z)(["\n  padding: 50px 50px;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 20px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n\n  margin-top: 40px;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(rgba(4, 4, 4, 0.4), rgba(4, 4, 4, 0.4))\n        no-repeat center/cover,\n      url(",") no-repeat center/cover;\n    filter: blur(15px);\n    z-index: -1;\n  }\n"])),(function(n){return n.$backdropSrc})),j=b.ZP.div(a||(a=(0,g.Z)(["\n  display: grid;\n  gap: 25px;\n"]))),w=r(3357),Z=r(184),y=function(n){var e=n.data,r=e.poster_path,t=e.backdrop_path,a=e.title,c=e.vote_average,i=e.overview,s=e.genres,o=e.release_date,u=Math.round(10*c),p=(0,h.Z)(o,"yyyy-MM-dd",new Date),d=(0,v.Z)(p),l="https://image.tmdb.org/t/p/w500/".concat(t);return console.log(l),(0,Z.jsxs)(m,{$backdropSrc:l,children:[(0,Z.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):w,style:{objectFit:"cover",width:"300px"},alt:"poster"}),(0,Z.jsxs)(j,{children:[(0,Z.jsxs)("h2",{children:[a," (",d,")"]}),(0,Z.jsxs)("p",{children:["User Score: ",u,"% "]}),(0,Z.jsx)("h3",{children:"Overview"}),(0,Z.jsx)("p",{children:i}),(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsx)("p",{children:null===s||void 0===s?void 0:s.map((function(n){return n.name})).join(" ")})]})]})},k=r(2791),_=r(7689),S=r(1087),U=b.ZP.div(c||(c=(0,g.Z)(["\n  padding: 10px 20px;\n  margin: 20px 70px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n"]))),P=b.ZP.li(i||(i=(0,g.Z)(["\n  margin-top: 15px;\n"]))),M=(0,b.ZP)(S.rU)(s||(s=(0,g.Z)(["\n  text-decoration: none;\n  margin-left: 70px;\n"]))),O=b.ZP.b(o||(o=(0,g.Z)(["\n  font-size: medium;\n  color: white;\n\n  box-shadow: rgba(3, 102, 214, 0.3) 0px 3px, rgba(3, 102, 214, 0.2) 0px 5px,\n    rgba(3, 102, 214, 0.1) 0px 7px;\n"]))),z=r(3728),C=r(8346);function L(){var n,e,r=(0,k.useState)(null),t=(0,p.Z)(r,2),a=t[0],c=t[1],i=(0,k.useState)(!1),s=(0,p.Z)(i,2),o=s[0],d=s[1],h=(0,k.useState)(!1),v=(0,p.Z)(h,2),g=v[0],b=v[1],m=(0,_.UO)().movieId,j=(0,_.TH)(),w=(0,k.useRef)(j);return(0,k.useEffect)((function(){var n=function(){var n=(0,u.Z)(l().mark((function n(e){var r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),d(!1),n.next=5,(0,f.fh)(e);case 5:r=n.sent,c(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),d(!0);case 12:return n.prev=12,b(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(e){return n.apply(this,arguments)}}();n(m)}),[m]),(0,Z.jsxs)(C.W,{children:[g&&(0,Z.jsx)(x.a,{}),a&&(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(M,{to:null!==(n=null===(e=w.current.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:[(0,Z.jsx)(z.BYu,{style:{width:40,height:20,marginTop:30}}),(0,Z.jsx)(O,{children:" Go back"})]}),(0,Z.jsx)(y,{data:a})]}),o&&(0,Z.jsx)("h2",{children:"Try to reload this page "}),!g&&(0,Z.jsxs)(U,{children:[(0,Z.jsxs)("p",{children:[(0,Z.jsx)(z.Vdw,{}),"Additional information"]}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)(P,{children:(0,Z.jsxs)(S.OL,{to:"cast",children:[(0,Z.jsx)(z.FU9,{}),"Cast"]})}),(0,Z.jsx)(P,{children:(0,Z.jsxs)(S.OL,{to:"reviews",children:[(0,Z.jsx)(z.IMt,{}),"Reviews"]})})]})]}),(0,Z.jsx)(_.j3,{})]})}},3357:function(n,e,r){n.exports=r.p+"static/media/default-image.e03da1a0fc459d1b3555.jpg"}}]);
//# sourceMappingURL=361.1ed57899.chunk.js.map