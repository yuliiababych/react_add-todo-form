(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),o=a(2),s=a(7),c=(a(13),a(1)),l=a(0),d=function(e){var t=e.user;return Object(l.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},u=function(e){var t=e.todo,a=t.completed?"TodoInfo--completed":"";return Object(l.jsxs)("article",{"data-id":t.id,className:"TodoInfo ".concat(a),children:[Object(l.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(l.jsx)(d,{user:t.user})]})},m=function(e){var t=e.todos;return Object(l.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(l.jsx)(u,{todo:e},e.id)}))})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function b(e){return j.find((function(t){return t.id===e}))||null}var h=function(e){var t=e.onSubmit,a=e.todoId,n=e.users,i=Object(c.useState)(""),r=Object(o.a)(i,2),s=r[0],d=r[1],u=Object(c.useState)(!1),m=Object(o.a)(u,2),j=m[0],h=m[1],f=Object(c.useState)(0),O=Object(o.a)(f,2),p=O[0],x=O[1],v=Object(c.useState)(!1),S=Object(o.a)(v,2),y=S[0],I=S[1];return Object(l.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),h(!s.trim()),I(!p),0!==s.trim().length&&p&&(t({id:a,title:s,completed:!1,userId:p,user:b(p)}),d(""),x(0))},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{htmlFor:"todo-form-title",children:"Title:\xa0"}),Object(l.jsx)("input",{type:"text","data-cy":"titleInput",id:"todo-form-title",value:s,placeholder:"Enter a title",onChange:function(e){d(e.target.value),h(!1)}}),j&&Object(l.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{htmlFor:"todo-form-user",children:"User:\xa0"}),Object(l.jsxs)("select",{"data-cy":"userSelect",id:"todo-form-user",value:p,onChange:function(e){x(+e.target.value),I(!1)},children:[Object(l.jsx)("option",{value:"0",disabled:!0,defaultValue:"0",children:"Choose a user"}),n.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),y&&Object(l.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(l.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:b(e.userId)})})),O=function(){var e=Object(c.useState)(f),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Add todo form"}),Object(l.jsx)(h,{onSubmit:function(e){n([].concat(Object(r.a)(a),[e]))},users:j,todoId:0===a.length?1:Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1}),Object(l.jsx)(m,{todos:a})]})};i.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e4240e7a.chunk.js.map