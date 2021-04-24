(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{183:function(e,t,n){"use strict";n.r(t);var a=n(44),c=n(0),r=n(132),o=n(12),i=n(33),u=function(e){return e.contacts.items},s=function(e){return e.contacts.filter},b=Object(i.a)([u,s],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLocaleLowerCase())}))})),l=n(157),j=n.n(l),p=n(159),d=n(24),x=n.n(d),f=n(27),m=n(2),h=Object(r.a)({form:{display:"flex",flexDirection:"column",marginLeft:"auto",marginRight:"auto",padding:25,width:"250px",border:"1px solid black ",borderRadius:4,boxShadow:"1px 1px 0px 0px black"},label:{display:"flex",marginBottom:10,justifyContent:"space-between","&:hover":{color:"orange"}},button:{backgroundColor:"#fff",border:"1px solid black ",boxShadow:"2px 2px 0px 0px black",borderRadius:3,outline:"none",cursor:"pointer","&:hover":{border:"1px solid orange ",boxShadow:"2px 2px 0px 0px orange",color:"orange"}}}),O=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),s=Object(a.a)(i,2),b=s[0],l=s[1],j=Object(o.b)(),p=Object(o.c)(u),d=function(){return b&&n?function(e){var t=e.name,n=!!p.find((function(e){return e.name===t}));return n&&alert("Contact is already in the Phonebook"),!n}(b):(alert("Please \u0435nter data!"),l(""),r(""),!1)},O=h();return Object(m.jsxs)("form",{className:O.form,onSubmit:function(e){e.preventDefault(),d()&&(j(function(e,t){return function(n){var a={name:e,number:t};n(Object(f.c)()),x.a.post("/contacts",a).then((function(e){var t=e.data;return n(Object(f.d)(t))})).catch((function(e){return n(Object(f.b)(e.message))}))}}({name:b,number:n})),l(""),r(""))},children:[Object(m.jsxs)("label",{className:O.label,children:["Name",Object(m.jsx)("input",{className:O.input,type:"text",value:b,onChange:function(e){l(e.target.value)}})]}),Object(m.jsxs)("label",{className:O.label,children:["Number",Object(m.jsx)("input",{className:O.input,type:"text",value:n,onChange:function(e){r(e.target.value)}})]}),Object(m.jsx)("button",{className:O.button,type:"submit",children:"Add contact"})]})},g=Object(r.a)({listItem:{width:300,marginLeft:"auto",marginRight:"auto",display:"flex",alignItems:"center",padding:10},name:{marginRight:"auto"},number:{fontWeight:"500",marginRight:"auto"},button:{backgroundColor:"#fff",boxShadow:"1px 1px 0px 0px black",border:"none",borderRadius:3,outline:"none",cursor:"pointer","&:hover":{boxShadow:"1px 1px 0px 0px orange",color:"orange"}}}),v=function(e){var t=e.contact,n=g(),a=Object(o.b)();return Object(m.jsxs)("li",{className:n.listItem,children:[Object(m.jsx)("p",{className:n.name,children:t.name}),Object(m.jsx)("p",{className:n.number,children:t.number}),Object(m.jsx)("button",{className:n.button,onClick:function(){return a((e=t.id,function(){var t=Object(p.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(f.i)()),t.prev=1,t.next=4,x.a.delete("/contacts/".concat(e));case 4:n(Object(f.j)(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(Object(f.h)(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:"Delete"})]})},w=Object(r.a)({list:{padding:0,margin:0}}),k=function(){var e=Object(o.b)();Object(c.useEffect)((function(){e((function(e){e(Object(f.f)()),x.a.get("/contacts").then((function(t){var n=t.data;return e(Object(f.g)(n))})).catch((function(t){return e(Object(f.e)(t.message))}))}))}),[e]);var t=Object(o.c)(b),n=w();return Object(m.jsx)("ul",{className:n.list,children:t.map((function(e){return Object(m.jsx)(v,{contact:e},e.id)}))})},N=Object(r.a)({label:{width:300,marginLeft:"auto",marginRight:"auto",display:"flex",flexDirection:"column",alignItems:"center","&:hover":{color:"orange"}},input:{width:"100%",marginTop:10}}),y=function(){var e=N(),t=Object(o.b)(),n=Object(o.c)(s);return Object(m.jsxs)("label",{className:e.label,children:["Find contacts by name",Object(m.jsx)("input",{className:e.input,type:"text",value:n,onChange:function(e){t(Object(f.a)(e.target.value))}})]})};t.default=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(O,{}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(y,{}),Object(m.jsx)(k,{})]})}}}]);
//# sourceMappingURL=5.8eaf244e.chunk.js.map