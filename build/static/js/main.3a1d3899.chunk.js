(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,a,t){e.exports=t(124)},107:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){},124:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),l=t.n(o),c=(t(107),t(13)),i=t(22),s=t(14),m=(t(108),t(49)),u=(t(109),t(21)),d=(t(112),{apiKey:"AIzaSyAgtxhG8Re49QW0bSISMwuSzC6GqZtx7Jk",authDomain:"first-firebase-project-20.firebaseapp.com",databaseURL:"https://first-firebase-project-20.firebaseio.com",projectId:"first-firebase-project-20",storageBucket:"first-firebase-project-20.appspot.com",messagingSenderId:"715535022806",appId:"1:715535022806:web:7b0154750d194549de6777"}),p=function(){0===u.apps.length&&u.initializeApp(d)},h=function(){var e=new u.auth.GoogleAuthProvider;return u.auth().signInWithPopup(e).then(function(e){var a=e.user,t=a.displayName,n=a.photoURL;return{isSignedIn:!0,name:t,email:a.email,photo:n,success:!0}}).catch(function(e){console.log(e),console.log(e.message)})},g=function(){var e=new u.auth.FacebookAuthProvider;return u.auth().signInWithPopup(e).then(function(e){console.log(e.additionalUserInfo.profile.email);e.credential.accessToken;e.user.success=!0;var a=e.additionalUserInfo.profile.email,t=e.user;return{isSignedIn:!0,name:t.displayName,email:a,photo:t.photoURL,success:!0}}).catch(function(e){var a=e.code,t=e.message;console.log(a,t)})},b=function(e){u.auth().currentUser.updateProfile({displayName:e}).then(function(){console.log("user name updated successfully")}).catch(function(e){console.log(e)})},E=function(){p();var e=Object(n.useContext)(Q),a=Object(c.a)(e,2),t=(a[0],a[1]),o=Object(s.g)(),l=(Object(s.h)().state||{from:{pathname:"/"}}).from,d=Object(n.useState)(""),E=Object(c.a)(d,2),f=E[0],w=E[1],v=Object(n.useState)(),k=Object(c.a)(v,2),j=k[0],O=k[1],y=Object(n.useState)(!0),S=Object(c.a)(y,2),N=S[0],A=S[1],L=Object(n.useState)({isSignedIn:!1,name:"",email:"",Conpassword:"",password:"",photo:""}),B=Object(c.a)(L,2),x=B[0],C=B[1],P=function(e){var a=!0;if("email"===e.target.name&&((a=/\S+@\S+\.\S+/.test(e.target.value))||O("Please check your Email")),"name"===e.target.name&&((a=e.target.value.length>0)||O("Name is necessary plaease fill it")),"Conpassword"===e.target.name&&(a=f===e.target.value,console.log(f,e.target.value),a||O("Please chek your confirmation password")),"password"===e.target.name){var t=e.target.value.length>6,n=/\d{1}/.test(e.target.value);a=t&&n,w(e.target.value),O("Atlest one digit should be inclue and length getter then 6")}if(a){var r=Object(m.a)({},x);r[e.target.name]=e.target.value,C(r)}A(a)},T=function(e,a){C(e),t(e),a&&o.replace(l)};return r.a.createElement("div",{className:" container loginSection"},r.a.createElement("form",{className:"login-area ",onSubmit:function(e){var a,t,n;console.log("clicked",x),x.email&&x.password&&(a=x.name,t=x.email,n=x.password,u.auth().createUserWithEmailAndPassword(t,n).then(function(e){var t=e.user;return t.error="",t.success=!0,b(a),t}).catch(function(e){var a={};return a.error=e.message,a.success=!1,a})).then(function(e){T(e,!0)}),e.preventDefault()}},!N&&r.a.createElement("h3",{style:{color:"red"}}," ",j," "),r.a.createElement("h3",null,"Create an account"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",onBlur:P,name:"name",placeholder:"Firsst name"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",onBlur:P,name:"name",placeholder:"Last name"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",onBlur:P,name:"email",placeholder:"User name or email"})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",onBlur:P,name:"password",placeholder:"password"})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",onBlur:P,name:"Conpassword",placeholder:"Confirm password"})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",style:{backgroundColor:"orange",border:"1px solid orange"},value:"Create an account"}),r.a.createElement("p",null,"Allready have an account?",r.a.createElement(i.b,{to:"/login"},"Log in"))),r.a.createElement("br",null),r.a.createElement("div",{class:"d-flex fakeBorder bottomPart"},r.a.createElement("hr",null),r.a.createElement("span",null,"or"),r.a.createElement("hr",null)),r.a.createElement("div",{class:"bottomPart"},r.a.createElement("button",{onClick:function(){g().then(function(e){console.log("the res value",e),T(e,!0)})},class:"bttnGf"},r.a.createElement("img",{src:"https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"}),"Continue with facebook"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){h().then(function(e){T(e,!0)})},class:"bttnGf"},r.a.createElement("img",{src:"https://i.pinimg.com/originals/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.png"}),"Continue with Google")))},f=[{img:"https://cdn.pixabay.com/photo/2017/08/07/14/29/nature-2604408_960_720.jpg",id:"1",place:"SAJEK",body:"The river flows into the Karnafuli River in the Chittagong Hill Tracts. Sajek Valley is situated in the North angle of Rangamati, near the Mizoram border boundary",hotel:[{image:"https://www.oficinadeinverno.com.br/blog/wp-content/uploads/2018/11/oficina-de-inverno-o-que-voce-precisa-saber-antes-de-viajar-para-nova-york-hotel-hospedagem.jpg",name:"SAJEK HOTEL NO 1",guest:"3",berdroom:"2",bath:"2",comment:"Lorem ipsum data ",rating:"3.2",price:"100tk"},{image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAwDlYV.img?m=6&q=80",name:"SAJEK HOTEL NO 2 ",guest:"3",berdroom:"3",bath:"3",comment:"Lorem data is here",rating:"4.5",price:"20000"},{image:"https://www.bookgreekhotels.com/wp-content/uploads/pradeep-ghildiyal-jr3ZPsaQwQo-unsplash-e1565168145593-1258x899.jpg",name:"SAJEK HOTEL NO 3 ",guest:"3",berdroom:"3",bath:"3",comment:"Lorem data is here",rating:"4.5",price:"20000"}]},{img:"https://images.unsplash.com/photo-1551313122-3df6aa1e28b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",id:"2",place:"SREEMANGAL",body:"It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath.",hotel:[{image:"https://www.oficinadeinverno.com.br/blog/wp-content/uploads/2018/11/oficina-de-inverno-o-que-voce-precisa-saber-antes-de-viajar-para-nova-york-hotel-hospedagem.jpg",name:"SREEMANGAL HOTEL NO 1",guest:"3",berdroom:"2",bath:"2",comment:"Lorem ipsum data ",rating:"3.2",price:"100tk"},{image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAwDlYV.img?m=6&q=80",name:"SREEMANGAL HOTEL NO 2",guest:"3",berdroom:"3",bath:"3",comment:"Lorem data is here",rating:"4.5",price:"20000"},{image:"https://www.bookgreekhotels.com/wp-content/uploads/pradeep-ghildiyal-jr3ZPsaQwQo-unsplash-e1565168145593-1258x899.jpg",name:"SREEMANGAL HOTEL NO 3 ",guest:"3",berdroom:"3",bath:"3",comment:"Lorem data is here",rating:"4.5",price:"20000"}]},{img:"https://i.pinimg.com/originals/ce/e0/21/cee0219b65f0bd5eb86999728319ab17.jpg",id:"3",place:"SUNDARBAN",body:"The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh",hotel:[{image:"https://www.oficinadeinverno.com.br/blog/wp-content/uploads/2018/11/oficina-de-inverno-o-que-voce-precisa-saber-antes-de-viajar-para-nova-york-hotel-hospedagem.jpg",name:"SUNDARBAN HOTEL NO 1",guest:"3",berdroom:"2",bath:"2",comment:"Lorem ipsum data ",rating:"3.2",price:"100tk"},{image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAwDlYV.img?m=6&q=80",name:"SUNDARBAN HOTEL NO 2 ",guest:"3",berdroom:"3",bath:"3",comment:"Lorem data is here",rating:"4.5",price:"20000"},{image:"https://www.bookgreekhotels.com/wp-content/uploads/pradeep-ghildiyal-jr3ZPsaQwQo-unsplash-e1565168145593-1258x899.jpg",name:"SUNDARBON HOTEL NO 3",guest:"3",berdroom:"3",bath:"3",comment:"Lorem data is here",rating:"4.5",price:"20000"}]},{img:"https://busyliving.co.uk/assets/hotels_and_resorts/slider_1/2-e82be3ab7d3774edbaae234070c1fb36cd7832607a48c02afaf15c20bd712d25.jpg",id:"1",place:"COX'S BAZAR",body:"The river flows into the Karnafuli River in the Chittagong Hill Tracts. Sajek Valley is situated in the North angle of Rangamati, near the Mizoram border boundary",hotel:[{image:"https://www.bookgreekhotels.com/wp-content/uploads/pradeep-ghildiyal-jr3ZPsaQwQo-unsplash-e1565168145593-1258x899.jpg",name:"COX'S BAZAR HOTEL NO 1",guest:"3",berdroom:"2",bath:"2",comment:"Lorem ipsum data ",rating:"3.2",price:"100tk"},{image:"https://www.bookgreekhotels.com/wp-content/uploads/pradeep-ghildiyal-jr3ZPsaQwQo-unsplash-e1565168145593-1258x899.jpg",name:"COX'S BAZAR",guest:"3",berdroom:"3",bath:"3",comment:"Lorem data is here",rating:"4.5",price:"20000"},{image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAwDlYV.img?m=6&q=80",name:"COX'S BAZAR HOTEL NO 3",guest:"3",berdroom:"3",bath:"3",comment:"Lorem data is here",rating:"4.5",price:"20000"}]}],w=(t(68),function(e){var a=e.item,t=a.image,n=a.name,o=a.guest,l=a.bedroom,c=a.bath,i=a.comment,s=a.rating,m=a.price;return r.a.createElement("div",null,r.a.createElement("div",{className:"hotel"},r.a.createElement("div",{className:"hotelPic"},r.a.createElement("img",{src:t})),r.a.createElement("div",{className:"hotelDetail"},r.a.createElement("h4",null,"hotel ",n),r.a.createElement("p",null,"guest:",o," bed:",l," bath:",c),r.a.createElement("p",null,i),r.a.createElement("p",null,m),r.a.createElement("span",null,"rating:",s))))}),v=function(e){console.log(e.detectPlace);var a=f.filter(function(a){return a.place===e.detectPlace});return console.log(a[0]),console.log(f[0].hotel),r.a.createElement("div",{class:"container"},r.a.createElement("h3",{style:{color:"white"}},"The hotel in ",e.detectPlace),r.a.createElement("hr",null),a[0].hotel.map(function(e){return r.a.createElement(w,{item:e})}))},k=t(83),j=t(151),O=(t(69),function(e){return console.log("props data is here",e.img),r.a.createElement("div",{style:{backgroundImage:"url("+e.img+")",backgroundSize:"100% 400px"},onClick:function(){return e.setData(e.place,e.body)},className:"item style"},r.a.createElement("p",null,e.place))}),y=(t(119),t(82)),S=(t(120),t(16)),N=t(156),A=function(e){var a=Object(n.useContext)(Q),t=Object(c.a)(a,2),o=t[0],l=t[1];l(e.name),Object(n.useEffect)(function(){l(e.name),console.log(o)},[]);var s=r.a.useState(new Date("2020-08-18T21:11:54")),m=Object(c.a)(s,2),u=m[0],d=m[1],p=r.a.useState(new Date("2020-08-18T21:11:54")),h=Object(c.a)(p,2),g=h[0],b=h[1];return r.a.createElement("div",{className:"BookingCart"},r.a.createElement(j.a,{className:"BookingBody"},r.a.createElement("div",null,r.a.createElement("p",null,"Orijin"),r.a.createElement("input",{type:"text"})),r.a.createElement("div",null,r.a.createElement("p",null,"Destination"),r.a.createElement("input",{type:"text",value:e.name})),r.a.createElement("div",{className:"datePicker"},r.a.createElement(S.a,{utils:y.a},r.a.createElement(j.a,{container:!0,justify:"space-around"},r.a.createElement(N.a,{className:"myDatePicker",margin:"normal",id:"date-picker-dialog",label:"Form",format:"MM/dd",value:u,onChange:function(e){d(e)},KeyboardButtonProps:{"aria-label":"change date"}}),r.a.createElement(N.a,{className:"myDatePicker",margin:"normal",id:"date-picker-dialog",label:"To",format:"MM/dd",value:g,onChange:function(e){b(e)},KeyboardButtonProps:{"aria-label":"change date"}})))),r.a.createElement("button",{className:"BookingBtn"}," ",r.a.createElement(i.b,{to:"/hotel"},"Start Booking"))))},L=[{width:1,itemsToShow:1},{width:550,itemsToShow:2},{width:768,itemsToShow:3},{width:1200,itemsToShow:4}];var B=function(e){var a=Object(n.useState)(f[0].place),t=Object(c.a)(a,2),o=t[0],l=t[1],i=Object(n.useState)(f[0].body),s=Object(c.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)(!0),p=Object(c.a)(d,2),h=p[0],g=p[1],b=function(a,t){u(t),l(a),e.setDetectPlace(a)};return r.a.createElement("div",{className:"container"},r.a.createElement(j.a,{md:12,direction:"row",container:!0,justify:"space-between"},r.a.createElement(j.a,{item:!0,md:4,spacing:2},r.a.createElement("div",{className:"bannerLeft"},r.a.createElement("h1",null,o),r.a.createElement("p",null,m),r.a.createElement("button",{style:{width:"150px"},onClick:function(e){console.log(h),g(!h)},className:"btn btn-warning"},h?"Booking--\x3e":"Back--\x3e"))),h?r.a.createElement(j.a,{item:!0,xs:12,md:8,className:"bannrRight"},r.a.createElement(k.a,{breakPoints:L},f.map(function(e){return r.a.createElement(O,{key:e.id,setData:b,img:e.img,place:e.place,body:e.body})}))):r.a.createElement(j.a,{item:!0,xs:12,md:8,className:"bannrRight"},r.a.createElement(A,{name:o}))))},x=(t(121),function(){p();var e=Object(n.useState)(),a=Object(c.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(!0),i=Object(c.a)(l,2),d=i[0],b=i[1],E=Object(n.useContext)(Q),f=Object(c.a)(E,2),w=(f[0],f[1]),v=Object(s.g)(),k=(Object(s.h)().state||{from:{pathname:"/"}}).from,j=Object(n.useState)({isSignedIn:!1,name:"",email:"",Conpassword:"",password:"",photo:""}),O=Object(c.a)(j,2),y=O[0],S=O[1],N=function(e){var a=!0;if("email"===e.target.name&&((a=/\S+@\S+\.\S+/.test(e.target.value))||o("Please check your Email")),"password"===e.target.name){var t=e.target.value.length>6,n=/\d{1}/.test(e.target.value);a=t&&n,o("Atlest one digit should be inclue and length getter then 6")}if(a){var r=Object(m.a)({},y);r[e.target.name]=e.target.value,S(r)}b(a)},A=function(e,a){S(e),w(e),a&&v.replace(k)};return r.a.createElement("div",{className:" container loginSection"},r.a.createElement("form",{class:"login-area ",onSubmit:function(e){var a,t;y.email&&y.password&&(a=y.email,t=y.password,u.auth().signInWithEmailAndPassword(a,t).then(function(e){var a=e.user;return a.error="",a.success=!0,a}).catch(function(e){var a={};return a.error=e.message,a.success=!1,a})).then(function(e){A(e,!0)}),e.preventDefault()}},!d&&r.a.createElement("h3",{style:{color:"red"}}," ",t," "),r.a.createElement("h3",null,"Login"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",onBlur:N,name:"email",placeholder:"User name or email"})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",onBlur:N,name:"password",placeholder:"password"})),r.a.createElement("input",{type:"checkbox",name:"remember",value:"remember me"}),r.a.createElement("span",{class:"remember"},"Remember me"),r.a.createElement("a",{href:"#"},"Forgot Password"),r.a.createElement("br",null),r.a.createElement("button",{class:"bttn"},"Log in"),r.a.createElement("p",null,"Don't have an account?",r.a.createElement("a",{href:"#"},"Create an account"))),r.a.createElement("br",null),r.a.createElement("div",{class:"d-flex fakeBorder bottomPart"},r.a.createElement("hr",null),r.a.createElement("span",null,"or"),r.a.createElement("hr",null)),r.a.createElement("div",{class:"bottomPart"},r.a.createElement("button",{onClick:function(){g().then(function(e){console.log("the res value",e),A(e,!0)})},class:"bttnGf"},r.a.createElement("img",{src:"https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"}),"Continue with facebook"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){h().then(function(e){A(e,!0)})},class:"bttnGf"},r.a.createElement("img",{src:"https://i.pinimg.com/originals/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.png"}),"Continue with Google")),"                                 ")}),C=t(160),P=t(158),T=t(159),R=t(155),D=(t(122),t(70),t(76)),I=t.n(D),H=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(C.a,{bg:"transparrent",color:"white",expand:"lg"},r.a.createElement(i.b,{to:"/"},r.a.createElement(C.a.Brand,{href:"#home"},r.a.createElement("img",{src:I.a,width:"150",height:"70",className:"d-inline-block align-top",alt:"Logo"}))),r.a.createElement(P.a,{inline:!0},r.a.createElement("input",{className:"searchControl  ml-5",type:"text",placeholder:"Search Your Destination......."})),r.a.createElement(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(C.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"ml-auto"},r.a.createElement(T.a.Link,{className:"ml-4 white",href:"#home"},r.a.createElement("p",{className:"linkText"},"Destination")),r.a.createElement(T.a.Link,{className:"ml-4",href:"#link"},r.a.createElement("p",{className:"linkText"},"Blog")),r.a.createElement(T.a.Link,{className:"ml-4",href:"#home"},r.a.createElement("p",{className:"linkText"},"Contact")),r.a.createElement(T.a.Link,{className:"ml-4",href:"#link"},r.a.createElement("p",{className:"linkText"},"News")),r.a.createElement(P.a,{inline:!0},r.a.createElement(R.a,{className:"ml-5 ",variant:"warning",type:"submit"},"Login"))))))},M=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 not found"))},G=t(84),U=function(e){var a=e.children,t=Object(G.a)(e,["children"]),o=Object(n.useContext)(Q),l=Object(c.a)(o,2),i=l[0];l[1];return r.a.createElement(s.b,Object.assign({},t,{render:function(e){var t=e.location;return i.email?a:r.a.createElement(s.a,{to:{pathname:"/CreateAccount",state:{from:t}}})}}))},Q=Object(n.createContext)();var Z=function(){var e=Object(n.useState)({}),a=Object(c.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)("COX'S BAZAR"),m=Object(c.a)(l,2),u=m[0],d=m[1];return r.a.createElement(Q.Provider,{value:[t,o],className:"container"},r.a.createElement(i.a,null,r.a.createElement(H,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(B,{setDetectPlace:d})),r.a.createElement(s.b,{path:"/createAccount"},r.a.createElement(E,null)),r.a.createElement(s.b,{path:"/login"},r.a.createElement(x,null)),r.a.createElement(U,{path:"/hotel"},r.a.createElement(v,{detectPlace:u})),r.a.createElement(s.b,{path:"*"},r.a.createElement(M,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},68:function(e,a,t){},69:function(e,a,t){e.exports=t.p+"static/media/Sreemongol.6d0300f1.png"},76:function(e,a,t){e.exports=t.p+"static/media/Logo.489a4840.png"}},[[102,1,2]]]);
//# sourceMappingURL=main.3a1d3899.chunk.js.map