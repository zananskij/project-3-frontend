import e,{useState as t,useEffect as a}from"react";import n from"axios";var l=function(e){return React.createElement(Fragment,null,React.createElement("div",{className:"card text-center",style:{width:"45rem"}},React.createElement("div",null,e.post.location),React.createElement("img",{src:e.post.img}),React.createElement("p",null,e.post.post),React.createElement("p",null,e.post.date)))};function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r=function(e){var a=t({post:"",img:"",location:"",date:""}),n=a[0],l=a[1],r=function(e){var t;l(c({},n,((t={})[e.target.name]=e.target.value,t)))};return React.createElement("div",null,React.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleCreate(n)}},React.createElement("label",{htmlFor:"location"},"location : "),React.createElement("input",{type:"text",name:"location",onChange:r}),React.createElement("br",null),React.createElement("br",null),React.createElement("label",{htmlFor:"post"},"Post : "),React.createElement("input",{type:"text",name:"post",onChange:r}),React.createElement("br",null),React.createElement("br",null),React.createElement("label",{htmlFor:"date"},"date : "),React.createElement("input",{type:"date",name:"date",onChange:r}),React.createElement("br",null),React.createElement("label",{htmlFor:"img"},"Image : "),React.createElement("input",{type:"text",name:"img",onChange:r}),React.createElement("br",null),React.createElement("input",{type:"submit"})))},o=function(e){var a=t(c({},e.post)),n=a[0],l=a[1],r=function(e){var t;l(c({},n,((t={})[e.target.name]=e.target.value,t)))};return React.createElement("div",null,React.createElement("details",null,React.createElement("summary",null,"Edit Tweet"),React.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleEdit(n)}},React.createElement("label",{htmlFor:"location"},"location : "),React.createElement("input",{type:"text",name:"location",onChange:r,value:n.location}),React.createElement("br",null),React.createElement("br",null),React.createElement("label",{htmlFor:"post"},"Post : "),React.createElement("input",{type:"text",name:"post",onChange:r,value:n.post}),React.createElement("br",null),React.createElement("br",null),React.createElement("label",{htmlFor:"date"},"date : "),React.createElement("input",{type:"date",name:"date",onChange:r,value:n.date}),React.createElement("br",null),React.createElement("label",{htmlFor:"img"},"Image : "),React.createElement("input",{type:"text",name:"img",onChange:r,value:n.img}),React.createElement("br",null),React.createElement("input",{className:"",type:"submit"}))))},m=function(){var e=t([]),c=e[0],m=e[1],i=(t(!1),t([]),function(){n.get("http://localhost:3000/twitter").then(function(e){return m(e.data)},function(e){return console.log(e)}).catch(function(e){return console.log(e)})}),u=function(e){n.put("http://localhost:3000/twitter/"+e._id,e).then(function(t){var a=c.map(function(t){return t._id!==e._id?t:e});m(a)})},E=t(!1),s=E[0],R=E[1];return a(function(){i()},[]),React.createElement("div",{className:"container-fluid m-auto-0"},React.createElement("nav",{className:"navbar bg-light"},React.createElement("img",{className:" w-25 rounded",src:logo}),React.createElement("button",{onClick:function(){return R(!s)}},"Add"),React.createElement("button",null)),React.createElement("h1",{className:"text-center"},"twitterClone"),s?React.createElement(r,{handleCreate:function(e){n.post("http://localhost:3000/twitter/",e).then(function(e){console.log(e),i()})}}):null,React.createElement("div",{className:"row post-container text-center"},c.map(function(e){return React.createElement("div",{className:"m-2"},React.createElement("div",{className:"col-12 m-auto "},React.createElement(l,{post:e})),React.createElement(o,{post:e,handleEdit:u}),React.createElement("button",{className:"btn btn-outline-danger",onClick:function(){n.delete("http://localhost:3000/twitter/"+e._id).then(function(e){i()})},value:e._id},"Delete"))})))};ReactDOM.createRoot(document.getElementById("root")).render(e.createElement(e.StrictMode,null,e.createElement(m,null)));
//# sourceMappingURL=index.modern.js.map
