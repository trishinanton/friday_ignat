(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{149:function(e,t,a){},150:function(e,t,a){},16:function(e,t,a){e.exports={wrapper:"PacksList_wrapper__1Ywo8",show:"PacksList_show__RqrJe",range:"PacksList_range__1cHOQ",number:"PacksList_number__1LxfT",buttons:"PacksList_buttons__1HvuG",list:"PacksList_list__2v0QQ",input:"PacksList_input__1TeYR",table:"PacksList_table__2sZ3W",table_title:"PacksList_table_title__2xD7v",table_description:"PacksList_table_description__eKQJs",card_button:"PacksList_card_button__3jahd",card:"PacksList_card__2OQcG",footer:"PacksList_footer__2YkZo",search:"PacksList_search__1Sfh9",pagination:"PacksList_pagination__2rxP7"}},180:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(34),s=a.n(r),i=(a(149),a(150),a(15)),o=a(21),d=a(41),l=a.n(d),u=a(19),j=a(4),b=a(5),O=a(10),h=a(23),p=a.n(h),m=a(247),x=a(39),f=a(38),g=a(249),v=a(244),w=a(250),S=a(248),C=a(60),A=a.n(C),E=a(59),R=a.n(E),N=a(44),P=a.n(N),k=P.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),y=function(e,t){return k.post("auth/register",{email:e,password:t})},T={status:"idle",error:null,logged:!1,user_id:"5eecf82a3ed8f700042f1186"},I=function(e){return{type:"APP/SET-STATUS",status:e}},_=function(e){return{type:"APP/SET-LOGGED",logged:e}},D={error:null},L=a(246),F=a(1),Q=function(){var e=Object(i.c)((function(e){return e.sign_up.error})),t=Object(i.c)((function(e){return e.app.status})),a=Object(i.c)((function(e){return e.app.logged})),n=Object(i.b)(),r=c.a.useState({amount:"",password:"",confirmPassword:"",email:"",weight:"",weightRange:"",showPassword:!1,showConfirmPassword:!1,disabled:!1,confirm:!0}),s=Object(O.a)(r,2),o=s[0],d=s[1],l=function(e){return function(t){d(Object(b.a)(Object(b.a)({},o),{},Object(j.a)({},e,t.target.value)))}};return a?Object(F.jsx)(u.a,{to:Ie.PROFILE}):Object(F.jsx)("div",{children:"loading"===t?Object(F.jsx)(g.a,{sx:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(F.jsx)(L.a,{})}):Object(F.jsxs)("div",{className:p.a.register,children:[Object(F.jsx)("div",{className:p.a.description,children:"It-incubator"}),Object(F.jsx)("h1",{children:"Sign Up"}),Object(F.jsxs)(x.a,{sx:{m:1,width:"80%"},variant:"standard",children:[Object(F.jsx)(f.a,{htmlFor:"standard-adornment-password",children:"Email"}),Object(F.jsx)(m.a,{value:o.email,onChange:l("email")})]}),Object(F.jsxs)(x.a,{sx:{m:1,width:"80%"},variant:"standard",children:[Object(F.jsx)(f.a,{htmlFor:"standard-adornment-password",children:"Password"}),Object(F.jsx)(m.a,{id:"standard-adornment-password",type:o.showPassword?"text":"password",value:o.password,onChange:l("password"),endAdornment:Object(F.jsx)(v.a,{position:"end",children:Object(F.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(){d(Object(b.a)(Object(b.a)({},o),{},{showPassword:!o.showPassword}))},onMouseDown:function(e){e.preventDefault()},children:o.showPassword?Object(F.jsx)(R.a,{}):Object(F.jsx)(A.a,{})})})})]}),Object(F.jsxs)(x.a,{sx:{m:1,width:"80%"},variant:"standard",children:[Object(F.jsx)(f.a,{htmlFor:"standard-adornment-password",children:"Confirm password"}),Object(F.jsx)(m.a,{onBlur:function(){o.password!=o.confirmPassword?d((function(e){return Object(b.a)(Object(b.a)({},e),{},{confirm:!1,disabled:!0})})):d((function(e){return Object(b.a)(Object(b.a)({},e),{},{confirm:!0,disabled:!1})}))},type:o.showConfirmPassword?"text":"password",value:o.confirmPassword,onChange:l("confirmPassword"),endAdornment:Object(F.jsx)(v.a,{position:"end",children:Object(F.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(){d(Object(b.a)(Object(b.a)({},o),{},{showConfirmPassword:!o.showConfirmPassword}))},onMouseDown:function(e){e.preventDefault()},children:o.showConfirmPassword?Object(F.jsx)(R.a,{}):Object(F.jsx)(A.a,{})})})})]}),Object(F.jsxs)("div",{className:p.a.buttons,children:[e&&Object(F.jsx)("div",{className:p.a.error,children:e}),!o.confirm&&Object(F.jsx)("div",{className:p.a.error,children:"The passwords don`t match"}),Object(F.jsx)(S.a,{onClick:function(){d((function(e){return Object(b.a)(Object(b.a)({},e),{},{email:"",password:"",confirmPassword:""})}))},variant:"outlined",size:"medium",children:"Cancel"}),Object(F.jsx)(S.a,{disabled:o.disabled,onClick:function(){var e,t;n((e=o.email,t=o.password,function(a){a(I("loading")),y(e,t).then((function(e){a(_(!0)),a(I("succeeded")),a(_(!0))})).catch((function(e){console.log(Object(b.a)({},e)),a(function(e){return{type:"SIGNUP/SET-ERROR",error:e}}(e.response.data.error)),a(I("succeeded"))}))}))},variant:"contained",size:"medium",children:"Register"})]})]})})},U=a(242),G=a(71),W=a.n(G),M=P.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),q=function(e,t,a){return M.post("auth/login",{email:e,password:t,rememberMe:a})},B={error:null},H=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.app.logged})),a=(Object(i.c)((function(e){return e.login.error})),Object(i.c)((function(e){return e.app.status}))),n=c.a.useState({amount:"",password:"",confirmPassword:"",email:"",weight:"",weightRange:"",showPassword:!1,showConfirmPassword:!1,disabled:!1,remember:!0,turnOnSignUp:!1,userName:null}),r=Object(O.a)(n,2),s=r[0],o=r[1],d=function(e){return function(t){o(Object(b.a)(Object(b.a)({},s),{},Object(j.a)({},e,t.target.value)))}};return t?Object(F.jsx)(u.a,{to:Ie.PROFILE}):s.turnOnSignUp?Object(F.jsx)(u.a,{to:Ie.REGISTER}):Object(F.jsx)("div",{children:"loading"===a?Object(F.jsx)(g.a,{sx:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(F.jsx)(L.a,{})}):Object(F.jsxs)("div",{className:p.a.register,children:[Object(F.jsx)("div",{className:p.a.description,children:"It-incubator"}),Object(F.jsx)("h1",{children:"Sign In"}),s.userName&&Object(F.jsxs)("span",{className:W.a.user,children:["Hello, ",s.userName]}),Object(F.jsxs)(x.a,{sx:{m:1,width:"80%"},variant:"standard",children:[Object(F.jsx)(f.a,{htmlFor:"standard-adornment-password",children:"Email"}),Object(F.jsx)(m.a,{value:s.email,onChange:d("email")})]}),Object(F.jsxs)(x.a,{sx:{m:1,width:"80%"},variant:"standard",children:[Object(F.jsx)(f.a,{htmlFor:"standard-adornment-password",children:"Password"}),Object(F.jsx)(m.a,{id:"standard-adornment-password",type:s.showPassword?"text":"password",value:s.password,onChange:d("password"),endAdornment:Object(F.jsx)(v.a,{position:"end",children:Object(F.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(){o(Object(b.a)(Object(b.a)({},s),{},{showPassword:!s.showPassword}))},onMouseDown:function(e){e.preventDefault()},children:s.showPassword?Object(F.jsx)(R.a,{}):Object(F.jsx)(A.a,{})})})})]}),Object(F.jsxs)("div",{className:W.a.remember,children:[Object(F.jsx)(U.a,Object(b.a)(Object(b.a)({},{inputProps:{"aria-label":"Checkbox demo"}}),{},{checked:s.remember,onChange:function(e){o((function(t){return Object(b.a)(Object(b.a)({},t),{},{remember:e.target.checked})}))}})),Object(F.jsx)("div",{children:"Remember Me"})]}),Object(F.jsx)("a",{className:W.a.forgot,children:"Forgot Password"}),Object(F.jsx)(S.a,{sx:{width:"80%"},disabled:s.disabled,onClick:function(){var t,a,n;e((t=s.email,a=s.password,n=s.remember,function(e){e(I("loading")),q(t,a,n).then((function(t){e(_(!0)),e(I("succeeded")),e({type:"APP/SET-ID",user_id:t.data._id})})).catch((function(t){console.log(Object(b.a)({},t)),e(function(e){return{type:"LOGIN/SET-ERROR",error:e}}(t.response.data.error)),e(I("succeeded"))}))}))},variant:"contained",size:"medium",children:"Login"}),Object(F.jsx)(S.a,{sx:{width:"80%",marginTop:"10px"},disabled:s.disabled,onClick:function(){window.gapi.auth2.getAuthInstance().signIn({scope:"profile email"}).then((function(e){var t=e.getBasicProfile().getName();console.log(t),o((function(e){return Object(b.a)(Object(b.a)({},e),{},{userName:t})}))}),(function(){console.log("Auth Err")}))},variant:"contained",size:"medium",children:"Login with google"}),Object(F.jsx)("div",{className:W.a.descr,children:"Don\u2019t have an account?"}),Object(F.jsx)("a",{className:W.a.sign,onClick:function(){return o((function(e){return Object(b.a)(Object(b.a)({},e),{},{turnOnSignUp:!0})}))},children:"Sign Up"})]})})},z=a(54),K=a.n(z),J=P.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),Y=function(e,t,a){return J.post("auth/forgot",{email:e,from:t,message:a})},V=function(e,t){return J.post("auth/set-new-password",{password:e,resetPasswordToken:t})},X={errorForgot:null,errorNewPassword:null,value:!1,success:!1},Z=function(){var e,t=Object(i.b)(),a=Object(i.c)((function(e){return e.forgot.value})),n=c.a.useState({amount:"",password:"",confirmPassword:"",email:"",weight:"",weightRange:"",showPassword:!1,showConfirmPassword:!1,disabled:!1,remember:!0,from:"test-front-admin <ai73a@yandex.by>",redirect:!1,message:"<div style=\"background-color: lime; padding: 15px\">\t\n\t                password recovery link: \n\t                <a href='http://localhost:3000/#/set-new-password/$token$'>\n\t                link</a></div>"}),r=Object(O.a)(n,2),s=r[0],o=r[1];return s.redirect?Object(F.jsx)(u.a,{to:Ie.LOGIN}):a?Object(F.jsx)(u.a,{to:Ie.CHECK}):Object(F.jsx)("div",{children:Object(F.jsxs)("div",{className:p.a.register,children:[Object(F.jsx)("div",{className:p.a.description,children:"It-incubator"}),Object(F.jsx)("h1",{children:"Forgot your password?"}),Object(F.jsxs)(x.a,{sx:{m:1,width:"80%"},variant:"standard",children:[Object(F.jsx)(f.a,{htmlFor:"standard-adornment-password",children:"Email"}),Object(F.jsx)(m.a,{value:s.email,onChange:(e="email",function(t){o(Object(b.a)(Object(b.a)({},s),{},Object(j.a)({},e,t.target.value)))})})]}),Object(F.jsx)("div",{className:K.a.enter,children:"Enter your email address and we will send you further instructions "}),Object(F.jsx)(S.a,{sx:{width:"80%"},disabled:s.disabled,onClick:function(){var e,a,n;t((e=s.email,a=s.from,n=s.message,function(t){t(I("loading")),Y(e,a,n).then((function(e){t(I("succeeded")),t({type:"FORGOT/SUCCESS-LOGIN",value:!0})})).catch((function(e){console.log(Object(b.a)({},e)),t({type:"FORGOT/ERROR-FORGOT",errorForgot:e.response.data.error}),t(I("succeeded"))}))}))},variant:"contained",size:"medium",children:"Send Instructions"}),Object(F.jsx)("div",{className:K.a.enter,children:"Did you remember your password?"}),Object(F.jsx)("a",{className:K.a.try,onClick:function(){return o((function(e){return Object(b.a)(Object(b.a)({},e),{},{redirect:!0})}))},children:"Try logging in"})]})})},$=function(){return Object(F.jsx)("div",{children:Object(F.jsx)("h1",{children:"NewProfile"})})},ee=function(){return Object(F.jsx)("div",{children:Object(F.jsx)("h1",{children:"Profile"})})},te=function(){var e,t=Object(i.b)(),a=Object(i.c)((function(e){return e.forgot.success})),n=Object(i.c)((function(e){return e.forgot.errorNewPassword})),r=Object(i.c)((function(e){return e.app.status})),s=c.a.useState({amount:"",password:"",confirmPassword:"",email:"",weight:"",weightRange:"",showPassword:!1,showConfirmPassword:!1,disabled:!1,remember:!0,from:"test-front-admin <ai73a@yandex.by>",redirect:!1,token:"f3c94d30-3047-11ec-8be6-c9b357e7f7b4"}),o=Object(O.a)(s,2),d=o[0],l=o[1];return d.redirect?Object(F.jsx)(u.a,{to:Ie.LOGIN}):a?Object(F.jsx)(u.a,{to:Ie.PROFILE}):Object(F.jsx)("div",{children:"loading"===r?Object(F.jsx)(g.a,{sx:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(F.jsx)(L.a,{})}):Object(F.jsxs)("div",{className:p.a.register,children:[Object(F.jsx)("div",{className:p.a.description,children:"It-incubator"}),Object(F.jsx)("h1",{children:"Create new password"}),Object(F.jsxs)(x.a,{sx:{m:1,width:"80%"},variant:"standard",children:[Object(F.jsx)(f.a,{htmlFor:"standard-adornment-password",children:"Password"}),Object(F.jsx)(m.a,{id:"standard-adornment-password",type:d.showPassword?"text":"password",value:d.password,onChange:(e="password",function(t){l(Object(b.a)(Object(b.a)({},d),{},Object(j.a)({},e,t.target.value)))}),endAdornment:Object(F.jsx)(v.a,{position:"end",children:Object(F.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(){l(Object(b.a)(Object(b.a)({},d),{},{showPassword:!d.showPassword}))},onMouseDown:function(e){e.preventDefault()},children:d.showPassword?Object(F.jsx)(R.a,{}):Object(F.jsx)(A.a,{})})})})]}),Object(F.jsx)("div",{className:K.a.enter,children:"Create new password and we will send you further instructions to email"}),Object(F.jsxs)("div",{style:{position:"relative",display:"flex",flexDirection:"column",width:"100%",alignItems:"center"},children:[n&&Object(F.jsx)("div",{className:p.a.error,children:n}),Object(F.jsx)(S.a,{sx:{width:"80%"},disabled:d.disabled,onClick:function(){var e,a;t((e=d.password,a=d.token,function(t){t(I("loading")),V(e,a).then((function(e){t(I("succeeded")),t({type:"FORGOT/SUCCESS-PASSWORD",success:!0})})).catch((function(e){console.log(Object(b.a)({},e)),t({type:"FORGOT/ERROR-PASSWORD",errorNewPassword:e.response.data.error}),t(I("succeeded"))}))}))},variant:"contained",size:"medium",children:"Create new password"})]})]})})},ae=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),a=t[0],c=t[1];return a?Object(F.jsx)(u.a,{to:Ie.SET_PASSWORD}):Object(F.jsx)("div",{children:Object(F.jsxs)("div",{className:p.a.register,children:[Object(F.jsx)("div",{className:p.a.description,children:"It-incubator"}),Object(F.jsx)("img",{src:"data:image/png;base64,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",alt:"send"}),Object(F.jsx)("h1",{children:"Check Email"}),Object(F.jsx)("div",{className:K.a.enter,children:"We\u2019ve sent an Email with instructions to example@mail.com"}),Object(F.jsx)(S.a,{sx:{width:"80%"},onClick:function(){c(!0)},variant:"contained",size:"medium",children:"Ok"})]})})},ne=a(16),ce=a.n(ne),re=a(235),se=a(237),ie=a(240),oe=Object(re.a)({root:{width:300,paddingLeft:200}}),de=function(e){var t=e.onChangeRange,a=e.value;oe();return Object(F.jsxs)("div",{children:[Object(F.jsx)(se.a,{id:"range-slider",gutterBottom:!0,children:"Number of cards"}),Object(F.jsx)(ie.a,{value:a,onChange:function(e,a){t&&t(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider"})]})},le=P.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),ue=function(e,t,a,n,c,r,s){return le.get("cards/pack",{params:{packName:e,min:t,max:a,sortPacks:n,page:c,pageCount:r,user_id:s}})},je=function(e){return le.post("cards/pack",{cardsPack:e})},be=function(e){return le.delete("cards/pack",{params:{id:e}})},Oe=function(e){return le.put("cards/pack",{cardsPack:e})},he={packName:null,min:3,max:9,sortPacks:"0updated",page:2,pageCount:"2",response:[{_id:"6172d835024e930004d60b0f",user_id:"6172d7e1024e930004d60b0d",user_name:"qqqq@wwww.com",private:!1,name:"qwer",path:"/def",grade:0,shots:0,cardsCount:0,type:"pack",rating:0,created:"2021-10-22T15:26:45.347Z",updated:"2021-10-22T15:27:20.683Z",more_id:"6172d7e1024e930004d60b0d",__v:0,deckCover:null}]},pe=function(e,t,a,n,c,r){return{type:"PACKS-LIST/CHANGE-START-VALUE",packName:e,min:t,max:a,sortPacks:n,page:c,pageCount:r}},me=function(e){return function(t,a){t(I("loading"));var n=a().packs_list;ue(n.packName,n.min,n.max,n.sortPacks,n.page,n.pageCount,e).then((function(e){t(I("succeeded")),t({type:"PACKS-LIST/RESPONSE-VALUE",response:e.data.cardPacks}),console.log(Object(b.a)({},e.data.cardPacks))}))}},xe=a(239),fe=a(238),ge=a(243),ve=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.packs_list.response})),a=Object(i.c)((function(e){return e.app.user_id})),c=Object(i.c)((function(e){return e.packs_list.pageCount})),r={},s=Object(n.useState)(!1),d=Object(O.a)(s,2),l=d[0],u=d[1],j=Object(n.useState)(""),b=Object(O.a)(j,2),h=b[0],p=b[1],x=Object(n.useState)(!1),f=Object(O.a)(x,2),g=f[0],v=f[1],w=g?{background:"#1976D2"}:{},C=g?{}:{background:"#1976D2"},A=Object(n.useState)(!1),E=Object(O.a)(A,2),R=E[0],N=E[1],P=R?{background:"#1976D2"}:{},k=R?{}:{background:"#1976D2"},y=Object(n.useState)(""),T=Object(O.a)(y,2),_=T[0],D=T[1],L=Object(n.useState)(15),Q=Object(O.a)(L,2),U=Q[0],G=Q[1],W=Object(n.useState)(78),M=Object(O.a)(W,2),q=M[0],B=M[1],H=Object(n.useState)(1),z=Object(O.a)(H,2),K=z[0],J=z[1],Y={_id:"617581e2078d82123090325a",name:"Anton Trishin"};return Object(n.useEffect)((function(){e(l?me(a):me())}),[_,U,q,h,K,c,l]),Object(F.jsxs)("div",{className:ce.a.wrapper,children:[Object(F.jsxs)("div",{className:ce.a.show,children:[Object(F.jsx)("h3",{children:"Show packs cards"}),Object(F.jsxs)("div",{className:ce.a.buttons,children:[Object(F.jsx)(S.a,{onClick:function(){u(!0),console.log(l)},sx:{marginRight:"10px"},variant:"contained",size:"small",children:"My"}),Object(F.jsx)(S.a,{onClick:function(){u(!1),console.log(l)},variant:"outlined",size:"small",children:"All"})]}),Object(F.jsx)(de,{onChangeRange:function(e){G(e[0]),B(e[1])},value:[U,q]})]}),Object(F.jsxs)("div",{className:ce.a.list,children:[Object(F.jsx)("h1",{children:"Packs list"}),Object(F.jsxs)("div",{className:ce.a.input,children:[Object(F.jsx)(m.a,{sx:{width:"100%"},placeholder:"Search...",value:_,onChange:function(t){D(t.target.value),e(pe(_,U,q,h,K,c))}}),Object(F.jsx)(S.a,{sx:{marginLeft:"30px",fontSize:"15px"},variant:"contained",onClick:function(){return e(function(e){return function(t){t(I("loading")),je(e).then((function(e){t(I("succeeded")),t(me())}))}}(r))},children:"Add new pack"}),Object(F.jsx)(S.a,{onClick:function(){return e((t="617581e2078d82123090325a",function(e){e(I("loading")),be(t).then((function(t){e(I("succeeded")),e(me())}))}));var t},children:"Delete Pack"}),Object(F.jsx)(S.a,{onClick:function(){return e(function(e){return function(t){t(I("loading")),Oe(e).then((function(e){t(I("succeeded")),t(me())}))}}(Y))},children:"Update Pack"})]}),Object(F.jsxs)("div",{className:ce.a.table,children:[Object(F.jsxs)("div",{className:ce.a.table_title,children:[Object(F.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(F.jsx)("div",{children:"Name"}),Object(F.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(F.jsx)("button",{onClick:function(){N(!0),p("0name"),e(pe(_,U,q,h,K,c))},style:P,children:"/\\"}),Object(F.jsx)("button",{onClick:function(){N(!1),p("1name"),e(pe(_,U,q,h,K,c))},style:k,children:"\\/"})]})]}),Object(F.jsx)("div",{children:"Cards"}),Object(F.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(F.jsx)("div",{children:"Last Updated"}),Object(F.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(F.jsx)("button",{onClick:function(){v(!0),p("0updated"),e(pe(_,U,q,h,K,c))},style:w,children:"/\\"}),Object(F.jsx)("button",{onClick:function(){v(!1),p("1updated"),e(pe(_,U,q,h,K,c))},style:C,children:"\\/"})]})]}),Object(F.jsx)("div",{children:"Created by"}),Object(F.jsx)("div",{children:"Actions"})]}),t.map((function(e){return Object(F.jsxs)("div",{className:ce.a.table_description,children:[Object(F.jsx)("div",{className:ce.a.name,children:e.name}),Object(F.jsx)("div",{className:ce.a.cards,children:e.cardsCount}),Object(F.jsx)("div",{className:ce.a.lastUpdated,children:e.updated}),Object(F.jsx)("div",{className:ce.a.createdby,children:e.user_name}),Object(F.jsxs)("div",{className:ce.a.card_button,children:[Object(F.jsx)(S.a,{size:"small",variant:"outlined",color:"error",children:"Delete"}),Object(F.jsx)(S.a,{size:"small",variant:"outlined",children:"Small"}),Object(F.jsx)(S.a,{size:"small",variant:"outlined",children:Object(F.jsx)(o.b,{to:"/cards/617997f7bd19452bf8a9a500",children:"card"})})]})]},e._id)}))]}),Object(F.jsx)(xe.a,{sx:{alignSelf:"flex-end",marginTop:"20px"},count:10,color:"primary",onChange:function(t,a){J(a),e(pe(_,U,q,h,K,c))},page:K}),Object(F.jsx)(fe.a,{sx:{width:"100px"},id:"outlined-select-currency",select:!0,label:"Select",value:c,onChange:function(t){e(pe(_,U,q,h,K,t.target.value))},helperText:"Show cards",children:[{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"}].map((function(e){return Object(F.jsx)(ge.a,{value:e.value,children:e.label},e.value)}))})]})]})},we=a(17),Se=P.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),Ce=function(e,t,a,n,c,r){return Se.get("/cards/card",{params:{cardAnswer:e,cardQuestion:t,cardsPack_id:a,sortCards:r,page:n,pageCount:c}})},Ae=function(e){return Se.post("/cards/card",{card:e})},Ee=function(e){return Se.delete("/cards/card",{params:{id:e}})},Re=function(e){return Se.put("/cards/card",{card:e})},Ne={pageNumber:1,showNumber:3,cards:[],filter:"",cardQuestion:"",cardAnswer:"",newQuestion:"",newAnswer:"",updateQuestion:""},Pe=function(e){return{type:"CARD/SET-EDIT-SPAN",_id:e}},ke=function(e){return{type:"CARD/SET-FILTER",filter:e}},ye=function(e){return function(t,a){t(I("loading"));var n=a().card.pageNumber,c=a().card.showNumber,r=a().card.filter,s=a().card.cardQuestion,i=a().card.cardAnswer;Ce(i,s,e,n,c,r).then((function(e){t(I("succeeded"));var a=e.data.cards.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{editSpan:!1,editSpanAnswer:!1})}));console.log(a),t(function(e){return{type:"CARD/SET-CARDS",cards:e}}(a))}))}},Te=function(){console.log("card");var e=Object(i.c)((function(e){return e.card.cards})),t=Object(i.b)(),a=Object(i.c)((function(e){return e.card.showNumber})).toString(),c=Object(n.useState)(1),r=Object(O.a)(c,2),s=r[0],o=r[1],d=Object(u.g)().id,l=Object(n.useState)(""),j=Object(O.a)(l,2),b=j[0],h=j[1],p=Object(n.useState)(""),x=Object(O.a)(p,2),f=x[0],g=x[1],v=Object(n.useState)(""),w=Object(O.a)(v,2),C=w[0],A=w[1],E=Object(n.useState)(""),R=Object(O.a)(E,2),N=R[0],P=R[1],k=Object(n.useState)(""),y=Object(O.a)(k,2),T=y[0],_=y[1],D=Object(n.useState)(""),L=Object(O.a)(D,2),Q=L[0],U=L[1],G=function(){h("0question"),t(ke(b))},W=function(){h("1question"),t(ke(b))},M=function(e){t(Pe(e)),t(function(e,t,a){return function(n,c){n(I("loading")),Re({_id:t,question:e}).then((function(e){n(I("succeeded")),n(ye(a))}))}}(Q,e,d))},q=function(e){t(function(e,t){return function(a,n){a(I("loading")),Ee(e).then((function(e){a(I("succeeded")),a(ye(t))}))}}(e,d))};return Object(n.useEffect)((function(){t(ye(d))}),[d,b,a,s]),Object(F.jsxs)("div",{className:ce.a.card,children:[Object(F.jsxs)("div",{className:ce.a.input,children:[Object(F.jsx)(m.a,{value:f,onChange:function(e){g(e.target.value)},placeholder:"Search question..."}),Object(F.jsx)(S.a,{onClick:function(){t({type:"CARD/SET-CARD-QUESTION",cardQuestion:f}),t(ye(d))},variant:"contained",size:"small",children:"Search question"}),Object(F.jsx)(m.a,{value:C,onChange:function(e){A(e.target.value)},sx:{marginLeft:"20px"},placeholder:"Search answer..."}),Object(F.jsx)(S.a,{onClick:function(){t({type:"CARD/SET-CARD-ANSWER",cardAnswer:C}),t(ye(d))},variant:"contained",size:"small",children:"Search answer"})]}),Object(F.jsxs)("div",{className:ce.a.table,children:[Object(F.jsxs)("div",{className:ce.a.table_title,children:[Object(F.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(F.jsx)("div",{children:"Question"}),Object(F.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(F.jsx)("button",{onClick:G,children:"/\\"}),Object(F.jsx)("button",{onClick:W,children:"\\/"})]})]}),Object(F.jsx)("div",{children:"Answer"}),Object(F.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(F.jsx)("div",{children:"Last Updated"}),Object(F.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(F.jsx)("button",{onClick:G,children:"/\\"}),Object(F.jsx)("button",{onClick:W,children:"\\/"})]})]}),Object(F.jsx)("div",{children:"Grade"}),Object(F.jsx)("div",{children:"Actions"})]}),e.map((function(e){return Object(F.jsxs)("div",{className:ce.a.table_description,children:[e.editSpan?Object(F.jsx)("input",{type:"text",value:e.question,onChange:function(a){return function(e,a){var n=a.target.value;U(n),t(function(e,t){return{type:"CARD/SET-UPDATE-QUESTION",updateQuestion:e,_id:t}}(n,e))}(e._id,a)},onBlur:function(){return M(e._id)},autoFocus:!0}):Object(F.jsx)("div",{className:ce.a.name,onDoubleClick:function(){return a=e._id,void t(Pe(a));var a},children:e.question}),Object(F.jsx)("div",{className:ce.a.cards,children:e.answer}),Object(F.jsx)("div",{className:ce.a.lastUpdated,children:e.updated}),Object(F.jsx)("div",{className:ce.a.createdby,children:e.grade}),Object(F.jsx)("div",{className:ce.a.card_button,children:Object(F.jsx)(S.a,{onClick:function(){return q(e._id)},size:"small",variant:"outlined",color:"error",children:"Delete"})})]},e._id)}))]}),Object(F.jsxs)("div",{className:ce.a.footer,children:[Object(F.jsxs)("div",{className:ce.a.search,children:[Object(F.jsx)(m.a,{value:N,onChange:function(e){P(e.target.value)},placeholder:"question..."}),Object(F.jsx)(m.a,{value:T,onChange:function(e){_(e.target.value)},sx:{marginLeft:"20px"},placeholder:"answer..."}),Object(F.jsx)(S.a,{onClick:function(){var e,a,n;t((e=d,a=N,n=T,function(t,c){t(I("loading")),Ae({cardsPack_id:e,question:a,answer:n}).then((function(a){t(I("succeeded")),t(ye(e))}))}))},variant:"contained",size:"small",children:"Add card"})]}),Object(F.jsxs)("div",{className:ce.a.pagination,children:[Object(F.jsx)(xe.a,{sx:{alignSelf:"flex-end",marginTop:"20px"},count:10,color:"primary",onChange:function(e,a){o(a),t({type:"CARD/SET-PAGE-NUMBER",pageNumber:s})},page:s}),Object(F.jsx)(fe.a,{sx:{width:"100px"},id:"outlined-select-currency",select:!0,label:"Select",value:a,onChange:function(e){t({type:"CARD/SET-SHOW-NUMBER",showNumber:+e.target.value})},helperText:"Show cards",children:[{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"}].map((function(e){return Object(F.jsx)(ge.a,{value:e.value,children:e.label},e.value)}))})]})]})]})},Ie={LOGIN:"/login",REGISTER:"/register",RECOVERY:"/recovery",NEW_PROFILE:"/new-profile",PROFILE:"/profile",CHECK:"/check",SET_PASSWORD:"/set-new-password",PACKS_LIST:"/packs-list",CARD:"/cards/:id"},_e=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(u.d,{children:[Object(F.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(F.jsx)(u.a,{to:Ie.LOGIN})}}),Object(F.jsx)(u.b,{path:Ie.LOGIN,render:function(){return Object(F.jsx)(H,{})}}),Object(F.jsx)(u.b,{path:Ie.REGISTER,render:function(){return Object(F.jsx)(Q,{})}}),Object(F.jsx)(u.b,{path:Ie.RECOVERY,render:function(){return Object(F.jsx)(Z,{})}}),Object(F.jsx)(u.b,{path:Ie.CHECK,render:function(){return Object(F.jsx)(ae,{})}}),Object(F.jsx)(u.b,{path:Ie.SET_PASSWORD,render:function(){return Object(F.jsx)(te,{})}}),Object(F.jsx)(u.b,{path:Ie.NEW_PROFILE,render:function(){return Object(F.jsx)($,{})}}),Object(F.jsx)(u.b,{path:Ie.PROFILE,render:function(){return Object(F.jsx)(ee,{})}}),Object(F.jsx)(u.b,{path:Ie.PACKS_LIST,render:function(){return Object(F.jsx)(ve,{})}}),Object(F.jsx)(u.b,{path:Ie.CARD,render:function(){return Object(F.jsx)(Te,{})}})]})})},De=function(){return Object(F.jsxs)("div",{className:l.a.menu,children:[Object(F.jsx)("div",{className:l.a.menu_item,children:Object(F.jsx)(o.b,{to:Ie.LOGIN,children:"LOGIN"})}),Object(F.jsx)("div",{className:l.a.menu_item,children:Object(F.jsx)(o.b,{to:Ie.REGISTER,children:"SIGN UP"})}),Object(F.jsx)("div",{className:l.a.menu_item,children:Object(F.jsx)(o.b,{to:Ie.RECOVERY,children:"FORGOT"})}),Object(F.jsx)("div",{className:l.a.menu_item,children:Object(F.jsx)(o.b,{to:Ie.SET_PASSWORD,children:"CreatePass"})}),Object(F.jsx)("div",{className:l.a.menu_item,children:Object(F.jsx)(o.b,{to:Ie.CHECK,children:"Check"})}),Object(F.jsx)("div",{className:l.a.menu_item,children:Object(F.jsx)(o.b,{to:Ie.NEW_PROFILE,children:"NEW_PROFILE"})}),Object(F.jsx)("div",{className:l.a.menu_item,children:Object(F.jsx)(o.b,{to:Ie.PROFILE,children:"PROFILE"})}),Object(F.jsx)("div",{className:l.a.menu_item,children:Object(F.jsx)(o.b,{to:Ie.PACKS_LIST,children:"PACKS_LIST"})}),Object(F.jsx)("div",{className:l.a.menu_btn,children:"Menu"})]})},Le=a(93),Fe=a(128),Qe=Object(Le.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:t.error});case"APP/SET-LOGGED":return Object(b.a)(Object(b.a)({},e),{},{logged:t.logged});case"APP/SET-ID":return Object(b.a)(Object(b.a)({},e),{},{user_id:t.user_id});default:return Object(b.a)({},e)}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;return"LOGIN/SET-ERROR"===t.type?Object(b.a)(Object(b.a)({},e),{},{error:t.error}):Object(b.a)({},e)},forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT/ERROR-FORGOT":return Object(b.a)(Object(b.a)({},e),{},{errorForgot:t.errorForgot});case"FORGOT/ERROR-PASSWORD":return Object(b.a)(Object(b.a)({},e),{},{errorNewPassword:t.errorNewPassword});case"FORGOT/SUCCESS-LOGIN":return Object(b.a)(Object(b.a)({},e),{},{value:t.value});case"FORGOT/SUCCESS-PASSWORD":return Object(b.a)(Object(b.a)({},e),{},{success:t.success});default:return Object(b.a)({},e)}},sign_up:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;return"SIGNUP/SET-ERROR"===t.type?Object(b.a)(Object(b.a)({},e),{},{error:t.error}):Object(b.a)({},e)},new_profile:function(){var e=arguments.length>1?arguments[1]:void 0;return e.type,Object(b.a)({},{})},profile:function(){var e=arguments.length>1?arguments[1]:void 0;return e.type,Object(b.a)({},{})},packs_list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PACKS-LIST/CHANGE-START-VALUE":return Object(b.a)(Object(b.a)({},e),{},{packName:t.packName,min:t.min,max:t.max,sortPacks:t.sortPacks,page:t.page,pageCount:t.pageCount});case"PACKS-LIST/RESPONSE-VALUE":return Object(b.a)(Object(b.a)({},e),{},{response:t.response});case"PACKS-LIST/SET-PAGE-COUNT":return Object(b.a)(Object(b.a)({},e),{},{pageCount:t.pageCount});default:return Object(b.a)({},e)}},card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARD/SET-PAGE-NUMBER":return Object(b.a)(Object(b.a)({},e),{},{pageNumber:t.pageNumber});case"CARD/SET-SHOW-NUMBER":return Object(b.a)(Object(b.a)({},e),{},{showNumber:t.showNumber});case"CARD/SET-CARDS":return Object(b.a)(Object(b.a)({},e),{},{cards:Object(we.a)(t.cards)});case"CARD/SET-EDIT-SPAN":return Object(b.a)(Object(b.a)({},e),{},{cards:e.cards.map((function(e){return e._id===t._id&&(e.editSpan=!e.editSpan),e}))});case"CARD/SET-EDIT-SPAN-ANSWER":return Object(b.a)(Object(b.a)({},e),{},{cards:e.cards.map((function(e){return e._id===t._id&&(e.editSpanAnswer=!e.editSpanAnswer),e}))});case"CARD/SET-FILTER":return Object(b.a)(Object(b.a)({},e),{},{filter:t.filter});case"CARD/SET-CARD-QUESTION":return Object(b.a)(Object(b.a)({},e),{},{cardQuestion:t.cardQuestion});case"CARD/SET-CARD-ANSWER":return Object(b.a)(Object(b.a)({},e),{},{cardAnswer:t.cardAnswer});case"CARD/SET-NEW-QUESTION":return Object(b.a)(Object(b.a)({},e),{},{newQuestion:t.newQuestion});case"CARD/SET-NEW-ANSWER":return Object(b.a)(Object(b.a)({},e),{},{newAnswer:t.newAnswer});case"CARD/SET-UPDATE-QUESTION":return Object(b.a)(Object(b.a)({},e),{},{cards:e.cards.map((function(e){return e._id===t._id&&(e.question=t.updateQuestion),e}))});case"CARD/SET-UPDATE-ANSWER":return Object(b.a)(Object(b.a)({},e),{},{cards:e.cards.map((function(e){return e._id===t._id&&(e.answer=t.updateAnswer),e}))});default:return Object(b.a)({},e)}}}),Ue=Object(Le.c)(Qe,Object(Le.a)(Fe.a));window.store=Ue;var Ge=function(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(i.a,{store:Ue,children:Object(F.jsxs)(o.a,{children:[Object(F.jsx)(De,{}),Object(F.jsx)(_e,{})]})})})},We=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,252)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(Ge,{})}),document.getElementById("root")),We()},23:function(e,t,a){e.exports={register:"SignUp_register__18f8_",description:"SignUp_description__3u_Kp",buttons:"SignUp_buttons__3xevq",error:"SignUp_error__2Y2Ab"}},41:function(e,t,a){e.exports={menu:"Header_menu__xtFOz"}},54:function(e,t,a){e.exports={enter:"Forgot_enter__3HQlq",try:"Forgot_try__86BJv"}},71:function(e,t,a){e.exports={forgot:"Login_forgot__390sM",descr:"Login_descr__3tpsT",sign:"Login_sign__2yk6g",remember:"Login_remember__3bCaO",user:"Login_user__1QieK"}}},[[180,1,2]]]);
//# sourceMappingURL=main.bc10c4ec.chunk.js.map