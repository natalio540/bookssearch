(this.webpackJsonpapibooks=this.webpackJsonpapibooks||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(5),o=n.n(i),r=(n(12),n(13),n(4)),l=n.n(r),u=n(6),j=n(2);function b(e){var t=e.books.map((function(e,t){var n="";return e.volumeInfo.imageLinks&&(n=e.volumeInfo.imageLinks.thumbnail),Object(c.jsxs)("div",{className:"books-container",children:[Object(c.jsxs)("div",{className:"img-container",children:[Object(c.jsx)("img",{src:n,alt:e.volumeInfo.title}),Object(c.jsx)("div",{className:"text-overlay",children:Object(c.jsx)("a",{className:"texto",target:"_blank",href:e.volumeInfo.previewLink,children:"Preview"})})]},e.id),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h3",{children:e.volumeInfo.title}),Object(c.jsxs)("p",{children:[" pages: ",e.volumeInfo.pageCount]}),Object(c.jsxs)("p",{children:["lenguage: ",e.volumeInfo.language]}),Object(c.jsxs)("p",{children:["authors: ",e.volumeInfo.authors]}),Object(c.jsxs)("p",{children:["publisher: ",e.volumeInfo.publisher]}),Object(c.jsx)("p",{className:"desc",children:e.volumeInfo.description})]})]})}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{children:t})})}var h=function(e){for(var t=e.booksPerPage,n=e.totalBooks,a=e.paginate,s=[],i=1;i<=Math.ceil(n/t);i++)s.push(i);return Object(c.jsx)("div",{className:"nav ",children:Object(c.jsx)("nav",{"aria-label":"Page navigation example",children:Object(c.jsx)("ul",{className:"pagination",children:s.map((function(e){return Object(c.jsx)("li",{className:"page-item",children:Object(c.jsx)("a",{onClick:function(){return a(e)},href:"#",className:"page-link text-dark",children:e})},e)}))})})})},d="AIzaSyBs59G6PGUTx5fb0rG6DAl9gWTI6osSb_A";function m(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)([]),o=Object(j.a)(i,2),r=o[0],m=o[1],p=Object(a.useState)(1),x=Object(j.a)(p,2),O=x[0],v=x[1],f=Object(a.useState)(10),g=Object(j.a)(f,1)[0],k=Object(a.useState)(!1),N=Object(j.a)(k,2),I=N[0],S=N[1];function w(){return(w=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(n,"&key=").concat(d,"&maxResults=40"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(t.status),m(c.items);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=O*g,P=y-g,C=r.slice(P,y);return Object(c.jsxs)("div",{className:"all-container",children:[Object(c.jsxs)("div",{className:"header-container text-white",children:[Object(c.jsx)("h1",{className:"m-4",children:"Search Book"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===n?window.alert("The Search field is empty!"):function(){w.apply(this,arguments)}()},className:"form-group",children:[Object(c.jsx)("input",{className:"form-input",placeholder:"Title, Author",type:"text",value:n,onChange:function(e){s(e.target.value)}}),Object(c.jsx)("button",{type:"submit",className:"button",onClick:function(){return S(!0)},children:" Search"})]})]}),Object(c.jsxs)("div",{className:"background",children:[I?Object(c.jsx)(b,{books:C}):Object(c.jsx)("div",{className:"background"}),Object(c.jsx)(h,{booksPerPage:g,totalBooks:r.length,paginate:function(e){return v(e)}})]})]})}var p=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(m,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.8d61e6eb.chunk.js.map