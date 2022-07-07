"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[668],{8498:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2043),a=n(184),s=function(){return(0,a.jsx)(r.v,{color:"#5e3e53"})}},2665:function(e,t,n){n.r(t),n.d(t,{MovieDetailsPage:function(){return h}});var r=n(6871),a=n(5861),s=n(885),i=n(7757),c=n.n(i),o=n(2791),u=n(501),l=n(4390),d={movieInfoContainer:"MovieDetails_movieInfoContainer__0GHa4",poster:"MovieDetails_poster__Gw9Qy",title:"MovieDetails_title__RBndM",termsList:"MovieDetails_termsList__0roZU",term:"MovieDetails_term__qhlab",definition:"MovieDetails_definition__lJu9M",buttonLink:"MovieDetails_buttonLink__nlwX4",header:"MovieDetails_header__FB4jG",link:"MovieDetails_link__wf74g"},v=n(184),f=function(){var e=(0,r.UO)().movieId;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{className:d.header,children:"Additional Info"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"/movies/".concat(e,"/cast"),className:d.link,children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"/movies/".concat(e,"/reviews"),className:d.link,children:"Reviews"})})]})]})},p=n(8498),m=function(){var e=function(){var e=(0,o.useState)("idle"),t=(0,s.Z)(e,2),n=t[0],i=t[1],u=(0,o.useState)(null),d=(0,s.Z)(u,2),v=d[0],f=d[1],p=(0,o.useState)(null),m=(0,s.Z)(p,2),h=m[0],x=m[1],_=(0,r.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i("pending"),e.next=4,(0,l.TP)(_);case 4:t=e.sent,x(t),i("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),f(e.t0),i("rejected");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[_]),{status:n,error:v,movie:h}}(),t=e.status,n=e.error,i=e.movie,m=(0,r.UO)().movieId;return(0,v.jsxs)(v.Fragment,{children:["pending"===t&&(0,v.jsx)(p.Z,{}),"rejected"===t&&(0,v.jsx)("p",{children:"There are no movies with id ".concat(m,". Error: ").concat(n)}),"resolved"===t&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:d.movieInfoContainer,children:[(0,v.jsx)(u.rU,{to:"/",className:d.buttonLink,children:(0,v.jsx)("span",{className:d.buttonLabel,children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})}),(0,v.jsx)("img",{className:d.poster,src:i.poster_path?"https://image.tmdb.org/t/p/w300/".concat(i.poster_path):"https://usfa.gov.ua/upload/media/2021/02/12/6026697741202-602643405e0e780013efe006.jpg",alt:"poster",width:"300px"}),(0,v.jsxs)("dl",{className:d.termsList,children:[(0,v.jsx)("h2",{className:d.title,children:i.title}),(0,v.jsx)("dt",{className:d.term,children:"Year:"}),(0,v.jsx)("dd",{className:d.definition,children:i.release_date.split("-")[0]}),(0,v.jsx)("dt",{className:d.term,children:"Overview:"}),(0,v.jsx)("dd",{className:d.definition,children:i.overview}),(0,v.jsx)("dt",{className:d.term,children:"Genres:"}),(0,v.jsx)("dd",{className:d.definition,children:i.genres.map((function(e){return e.name})).join(", ")}),(0,v.jsx)("dt",{className:d.term,children:"User score:"}),(0,v.jsx)("dd",{className:d.definition,children:i.vote_average})]})]}),(0,v.jsx)("hr",{}),(0,v.jsx)(f,{})]})]})};function h(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{}),(0,v.jsx)(r.j3,{})]})}},4390:function(e,t,n){n.d(t,{Ph:function(){return l},TP:function(){return d},tx:function(){return f},z5:function(){return u},zv:function(){return v}});var r=n(5861),a=n(7757),s=n.n(a),i=n(4569),c=n.n(i),o="9cba2b56fa6de0f8781209edaebd8957";c().defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=668.2d42b908.chunk.js.map