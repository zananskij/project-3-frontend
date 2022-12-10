import e,{useState as t,useEffect as a}from"react";import n from"react-dom/client";import l from"axios";import"@react-google-maps/api";var c=function(e){return React.createElement(Fragment,null,React.createElement("div",{className:"card text-center",style:{width:"45rem"}},React.createElement("div",null,e.post.location),React.createElement("img",{src:e.post.img}),React.createElement("p",null,e.post.post),React.createElement("p",null,e.post.date)))};function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}google;var o=function(e){var a=t({post:"",img:"",location:"",date:""}),n=a[0],l=a[1],c=function(e){var t;l(r({},n,((t={})[e.target.name]=e.target.value,t)))};return React.createElement("div",{className:"container w-50 "},React.createElement("div",{className:"p-5 mb-5 bg-light rounded w-50 m-auto "},React.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleCreate(n)}},React.createElement("label",{className:"form-label",htmlFor:"location "},"location :"," "),React.createElement("input",{className:" form-control ",type:"text",name:"location",onChange:c}),React.createElement("br",null),React.createElement("br",null),React.createElement("div",{className:"mb-3"},React.createElement("label",{className:"form-label",htmlFor:"post"},"Post :"," "),React.createElement("input",{className:" form-control ",type:"text",name:"post",onChange:c}),React.createElement("br",null),React.createElement("br",null)),React.createElement("div",{className:"mb-3"},React.createElement("label",{className:"form-label",htmlFor:"date"},"date :"," ")," ",React.createElement("br",null),React.createElement("input",{className:" form-control ",type:"date",name:"date",onChange:c}),React.createElement("br",null)),React.createElement("div",{className:"mb-3"},React.createElement("label",{className:"form-label",htmlFor:"img"},"Image :"," "),React.createElement("input",{className:" form-control ",type:"text",name:"img",onChange:c}),React.createElement("br",null)),React.createElement("input",{className:"btn btn-danger",type:"submit"}))))},m=function(e){var a=t(r({},e.post)),n=a[0],l=a[1],c=function(e){var t;l(r({},n,((t={})[e.target.name]=e.target.value,t)))};return React.createElement("div",null,React.createElement("details",null,React.createElement("summary",null,"Edit Tweet"),React.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleEdit(n)}},React.createElement("label",{htmlFor:"location"},"location : "),React.createElement("input",{type:"text",name:"location",onChange:c,value:n.location}),React.createElement("br",null),React.createElement("br",null),React.createElement("label",{htmlFor:"post"},"Post : "),React.createElement("input",{type:"text",name:"post",onChange:c,value:n.post}),React.createElement("br",null),React.createElement("br",null),React.createElement("label",{htmlFor:"date"},"date : "),React.createElement("input",{type:"date",name:"date",onChange:c,value:n.date}),React.createElement("br",null),React.createElement("label",{htmlFor:"img"},"Image : "),React.createElement("input",{type:"text",name:"img",onChange:c,value:n.img}),React.createElement("br",null),React.createElement("input",{className:"",type:"submit"}))))},i=function(e){var a=e.onSearchChange,n=t(""),l=n[1];return React.createElement("div",{className:"searchBarContainer"},React.createElement("input",{type:"text",value:n[0],placeholder:"Search...",onChange:function(e){e.preventDefault(),l(e.target.value),a(e.target.value)}}))},u=function(){var n=t([]),r=n[0],u=n[1],s=t(!1),E=s[0],p=s[1],d=t([]),h=d[1],f=function(){l.get("http://localhost:3000/twitter").then(function(e){return u(e.data)},function(e){return console.log(e)}).catch(function(e){return console.log(e)})},R=function(e){l.put("http://localhost:3000/twitter/"+e._id,e).then(function(t){var a=r.map(function(t){return t._id!==e._id?t:e});u(a)})},b=function(){return e.createElement(Fragment,null,e.createElement("p",{className:"noResults"},"No related posts found..."))},g=E?d[0]:r,v=t(!1),N=v[0],C=v[1];return a(function(){f()},[]),e.createElement("div",{className:"container-fluid m-auto-0"},e.createElement("nav",{className:"navbar bg-light "},e.createElement("img",{src:""}),e.createElement(i,{onSearchChange:function(e){var t=e.toLowerCase();if(e.length>0){p(!0);var a=r.filter(function(e){return e.location.toLowerCase().match(t)||e.post.toLowerCase().match(t)||e.date.toLowerCase().match(t)});h(a)}else p(!1)}}),e.createElement("button",{className:"btn btn-success",onClick:function(){return C(!N)}},"Add"),e.createElement("button",null)),e.createElement("h1",{className:"text-center"},"twitterClone"),N?e.createElement(o,{handleCreate:function(e){l.post("http://localhost:3000/twitter/",e).then(function(e){console.log(e),f()})}}):null,e.createElement("div",{className:"row post-container text-center"},g.map(function(t){return e.createElement("div",null,e.createElement("div",{className:"col-12"},e.createElement(c,{post:t})),e.createElement(m,{post:t,handleEdit:R}),e.createElement("button",{className:"btn btn-danger",onClick:function(){l.delete("http://localhost:3000/twitter/"+t._id).then(function(e){f()})},value:t._id},"Delete"))}),e.createElement(b,null)))};n.createRoot(document.getElementById("root")).render(e.createElement(e.StrictMode,null,e.createElement(u,null)));
//# sourceMappingURL=index.modern.js.map
