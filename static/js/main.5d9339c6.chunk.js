(this.webpackJsonptasks=this.webpackJsonptasks||[]).push([[0],{19:function(e,t,n){e.exports={content__wrapper:"messages_content__wrapper__1yd_B",content__wrapper_img:"messages_content__wrapper_img__3g_Tq",content__wrapper_item:"messages_content__wrapper_item__7BiBU",content__wrapper_item_time:"messages_content__wrapper_item_time__1311m",content__wrapper_item_message:"messages_content__wrapper_item_message__3uMZj",content__wrapper_item_messageName:"messages_content__wrapper_item_messageName__3wBSM",content__wrapper_item_messageText:"messages_content__wrapper_item_messageText__QQvkS"}},28:function(e,t,n){e.exports={content:"listOfTasks_content__2WJK-",content__title:"listOfTasks_content__title__1kyt_",list:"listOfTasks_list__2p6e5",content__buttons:"listOfTasks_content__buttons__19pKk"}},36:function(e,t,n){e.exports={content:"Counter_content__ZuwO5",content__inner:"Counter_content__inner__34QDE",content__text:"Counter_content__text__3IBgV",content__input:"Counter_content__input__2Xft5"}},54:function(e,t,n){e.exports={text_field:"myInput_text_field__3Q-JL"}},68:function(e,t,n){e.exports=n(82)},73:function(e,t,n){},74:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),l=(n(73),n(74),n(44)),o=n(24),s=n(36),m=n.n(s),_=n(113),u=n(54),p=n.n(u),d=n(112),f=function(e){return r.a.createElement("div",{className:p.a.text_field},r.a.createElement(d.a,{variant:"outlined",value:e.value,onChange:function(t){var n=t.currentTarget.value;void 0!==n&&null!==n&&e.onChange&&e.onChange(n)},onKeyPress:function(t){t.charCode&&e.onKeyPress&&e.onKeyPress(t.charCode)}}))},E=n(110),g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"contained",onClick:function(){e.onClick&&e.onClick()}},e.value))},v=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),u=s[0],p=s[1],d=function(){n&&(p([].concat(Object(l.a)(u),[{id:Object(_.a)(),name:n}])),alert("Hello, ".concat(n))),c("")};return r.a.createElement("div",{className:m.a.content},r.a.createElement("div",{className:m.a.content__inner},r.a.createElement("div",{className:m.a.content__text},r.a.createElement("span",null,u.length)),r.a.createElement("div",{className:m.a.content__input},r.a.createElement("span",null,"Enter your name:"),r.a.createElement(f,{value:n,onChange:function(e){c(e)},onKeyPress:function(e){13===e&&d()}}),r.a.createElement(g,{onClick:d,value:"increase"}))))},h=n(19),k=n.n(h),w=function(e){return r.a.createElement("div",{className:k.a.content},r.a.createElement("div",{className:k.a.content__wrapper},r.a.createElement("div",{className:k.a.content__wrapper_img},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSebA8fFnNGT1sxNPZ882iVMNpbng0j_hdBZQ&usqp=CAU",alt:""})),r.a.createElement("div",{className:k.a.content__wrapper_item},r.a.createElement("div",{className:k.a.content__wrapper_item_message},r.a.createElement("div",{className:k.a.content__wrapper_item_messageName},r.a.createElement("p",null,e.name)),r.a.createElement("div",{className:k.a.content__wrapper_item_messageText},r.a.createElement("p",null,e.message))),r.a.createElement("div",{className:k.a.content__wrapper_item_time},r.a.createElement("p",null,e.time)))))},b=function(){return r.a.createElement(r.a.Fragment,null,[{id:1,name:"Masha",message:"Did you buy that i asked?",time:"10:39"}].map((function(e){return r.a.createElement(w,{key:e.id,name:e.name,message:e.message,time:e.time})})))},N=n(28),y=n.n(N),C=n(111),j=n(58),O=n.n(j),T=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.content__tasks},r.a.createElement("div",{className:y.a.content__title},r.a.createElement("h3",null,"List of tasks on the day")),r.a.createElement("ul",{id:y.a.list},e.tasks.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{key:t.id},t.title,r.a.createElement(C.a,{"aria-label":"delete",onClick:function(){e.removeTask(t.id)}},r.a.createElement(O.a,{fontSize:"small"}))))})))),r.a.createElement("div",{className:y.a.content__buttons},r.a.createElement(g,{value:"all",onClick:function(){return e.filterTasks("all")}}),r.a.createElement(g,{value:"low",onClick:function(){return e.filterTasks("low")}}),r.a.createElement(g,{value:"medium",onClick:function(){return e.filterTasks("medium")}}),r.a.createElement(g,{value:"high",onClick:function(){return e.filterTasks("high")}})))},x=function(){var e=Object(a.useState)([{id:1,title:"\u0420\u0430\u0431\u043e\u0442\u0430",priority:"high"},{id:2,title:"\u0423\u0431\u043e\u0440\u043a\u0430",priority:"medium"},{id:3,title:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0441\u0435\u0440\u0438\u044e \u0421\u0430\u0439\u0442\u0430\u043c\u044b",priority:"high"},{id:4,title:"\u041f\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u043d\u0438\u0433\u0443 \u0414\u043e\u043d\u0446\u043e\u0432\u043e\u0439",priority:"low"}]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)("all"),s=Object(o.a)(i,2),m=s[0],_=s[1],u=n;"low"===m&&(u=u.filter((function(e){return"low"===e.priority}))),"medium"===m&&(u=u.filter((function(e){return"medium"===e.priority}))),"high"===m&&(u=u.filter((function(e){return"high"===e.priority})));return r.a.createElement("div",{className:y.a.content},r.a.createElement(T,{tasks:u,removeTask:function(e){var t=Object(l.a)(n);t=t.filter((function(t){return t.id!==e})),c(t)},filterTasks:function(e){_(e)}}))},S=n(114),B=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{checked:e.isChecked,onChange:function(t){var n=t.currentTarget.checked;void 0!==n&&null!==n&&e.onChange&&e.onChange(n)}}))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(g,{value:"default"}),r.a.createElement(B,null))},K=n(32),A=function(){var e=[{id:Object(_.a)(),link:"pre-junior"},{id:Object(_.a)(),link:"junior"},{id:Object(_.a)(),link:"junior-plus"}];return r.a.createElement("div",null,e.map((function(e){return r.a.createElement(K.b,{key:e.id,to:e.link},e.link)})))},M=n(10);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null),r.a.createElement(M.a,{path:"/pre-junior",render:function(){return r.a.createElement(b,null)}}),r.a.createElement(M.a,{path:"/pre-junior",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(M.a,{path:"/pre-junior",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(M.a,{path:"/pre-junior",render:function(){return r.a.createElement(F,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K.a,null,r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.5d9339c6.chunk.js.map