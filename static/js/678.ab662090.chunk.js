"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[678],{8498:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(2043),a=r(184),u=function(){return(0,a.jsx)(n.v,{color:"red"})}},678:function(e,t,r){r.r(t),r.d(t,{MoviesPage:function(){return w}});var n=r(5861),a=r(885),u=r(7757),c=r.n(u),s=r(2791),o=r(501),i=r(8479),f=r(2007),p=r.n(f),l=r(4390),d={},v=r(8498),h={},m=r(9e3),x=r(184),g=function(e){var t=e.handleSubmit,r=e.handleInputChange,n=e.query;return(0,x.jsxs)("form",{className:h.form,onSubmit:t,children:[(0,x.jsxs)("button",{type:"submit",className:h.button,children:[(0,x.jsx)("span",{className:h.buttonLabel,children:"Search"}),(0,x.jsx)(m.Vph,{})]}),(0,x.jsx)("input",{className:h.input,type:"text",autoComplete:"off",value:n,autoFocus:!0,placeholder:"Search images and photos",onChange:r})]})},b=function(e){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),u=r[0],o=r[1],f=(0,s.useState)("idle"),p=(0,a.Z)(f,2),d=p[0],v=p[1],h=(0,s.useState)(null),m=(0,a.Z)(h,2),x=m[0],g=m[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v("pending"),t.next=4,(0,l.Ph)(e);case 4:r=t.sent,o(r),v("resolved"),0===r.length&&(0,i.ZP)("There are no movies for this query. Please try another word",{icon:"\ud83d\ude13",style:{borderRadius:"10px",background:"#333",color:"#fff"}}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),v("rejected"),g(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();e&&t()}),[e]),{movies:u,status:d,error:x}};b.propTypes={q:p().string.isRequired};var y=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),r=t[0],n=t[1],u=(0,o.lr)(),c=(0,a.Z)(u,2),f=c[0],p=c[1],l=f.get("q"),h=b(l),m=h.movies,y=h.status,w=h.error;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{handleSubmit:function(e){if(e.preventDefault(),""===r.trim())return(0,i.ZP)("Enter your query please",{icon:"\ud83d\ude13",style:{borderRadius:"10px",background:"#333",color:"#fff"}});p({q:r}),n("")},handleInputChange:function(e){n(e.currentTarget.value.toLowerCase())},query:r}),"pending"===y&&(0,x.jsx)(v.Z,{}),"rejected"===y&&(0,i.ZP)("Oops. Something went wrong. Please try again. ".concat(w.message),{icon:"\ud83d\ude13",style:{borderRadius:"10px",background:"#333",color:"#fff"}}),"resolved"===y&&(0,x.jsx)("ul",{children:m.map((function(e){return(0,x.jsx)("li",{className:d.movieItem,children:(0,x.jsx)(o.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})};function w(){return(0,x.jsx)(y,{})}},4390:function(e,t,r){r.d(t,{Ph:function(){return f},TP:function(){return p},tx:function(){return d},z5:function(){return i},zv:function(){return l}});var n=r(5861),a=r(7757),u=r.n(a),c=r(4569),s=r.n(c),o="9cba2b56fa6de0f8781209edaebd8957";s().defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"?api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=678.ab662090.chunk.js.map