(this.webpackJsonphotel_masterchef=this.webpackJsonphotel_masterchef||[]).push([[0],{60:function(e,t,c){},76:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var s=c(2),i=c.n(s),a=c(27),n=c.n(a),l=(c(56),c(57),c(58),c(59),c(60),c(22)),r=c(16),j=c(37),d=c.n(j),o=c.p+"static/media/slider1.d7139f2a.png",b=c.p+"static/media/slider2.f0150a16.png",m=[{id:"01",title:"Hunger gives stress; we give food",desc:"If food is your question, our answer is yes! Choose your favorite dishes from the best restaurants at great prices.",imgUrl:o},{id:"02",title:"Truly Free Delivery, no kidding",desc:"With online food delivery across 10+ villages, you can get your favourites delivered at your doorstep within minutes.If you order foods more than \u20b9500 you will get free home delivery.",imgUrl:b},{id:"03",title:"Hungry or thirsty? Order now",desc:"We deliver right to your home from the best restaurants across the city, anytime.",imgUrl:c.p+"static/media/slider03.17713c88.png"}],h=(c(76),c(3)),u=function(){return Object(h.jsx)("section",{style:{marginTop:"80px"},children:Object(h.jsx)(r.d,{children:Object(h.jsx)(d.a,Object(l.a)(Object(l.a)({},{infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3}),{},{children:m.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:" heroSlider_wrap slider__wrapper d-flex align-items-center justify-content-between pt-2",children:[Object(h.jsxs)("div",{className:"slider__content w-50 ps-2",children:[Object(h.jsx)("h2",{className:"mb-3 ",children:e.title}),Object(h.jsx)("p",{children:e.desc}),Object(h.jsx)("button",{className:"btn",children:"Order Now"})]}),Object(h.jsx)("div",{className:"slider__img w-50",children:Object(h.jsx)("img",{src:e.imgUrl,alt:"",className:"w-100"})})]})},e.id)}))}))})})},x=c.p+"static/media/food_paneer_butter_masala.25ce4a91.png",O=c.p+"static/media/food_chicken_lolipop.ba6a8608.png",p=c.p+"static/media/food_crispy_chicken.788e929b.png",g=c.p+"static/media/food_veg_kadai.78cbbd87.png",f=(c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,[{id:"01",name:"Paneer Butter Masala",price:95,image:x},{id:"02",name:"Chicken Lollypop",price:90,image:O},{id:"03",name:"Crispy Chicken",price:125,image:p},{id:"04",name:"Veg Kadai",price:75,image:g}]),v=[{id:"12",title:"Fried Rice",price:95,imgUrl:b},{id:"14",title:"Vegetable",price:250,imgUrl:b},{id:"15",title:"Vegetable Salad",price:195,imgUrl:b},{id:"16",title:"Meal",price:275,imgUrl:b},{id:"17",title:"Fried Rice",price:95,imgUrl:b},{id:"18",title:"Vegetable",price:250,imgUrl:b},{id:"19",title:"Vegetable Salad",price:195,imgUrl:b},{id:"20",title:"Meal",price:275,imgUrl:b}],_=c(19),N=c(1),y=c(4),w=c(15),k=c(44);c(80),c(92);k.a.initializeApp({apiKey:"AIzaSyCsF5sBuYQql_gvgoif9KchKM5xQmoxIrw",authDomain:"hotel-masterchef.firebaseapp.com",projectId:"hotel-masterchef",storageBucket:"hotel-masterchef.appspot.com",messagingSenderId:"292612180399",appId:"1:292612180399:web:dcd7b5525825f58d90075a",measurementId:"G-JMCPW0VP2J"});k.a.auth();var C=k.a.firestore(),S=C.collection("Food"),I=C.collection("Menu"),M=i.a.createContext(),P=function(){return Object(s.useContext)(M)},L=function(e){var t=e.children,c=Object(s.useState)(!1),i=Object(w.a)(c,2),a=i[0],n=i[1],r=Object(s.useState)({}),j=Object(w.a)(r,2),d=j[0],o=j[1],b=Object(s.useState)({flag:!1,type:"",msg:""}),m=Object(w.a)(b,2),u=m[0],x=m[1],O=Object(s.useState)(!1),p=Object(w.a)(O,2),g=p[0],f=p[1],v=Object(s.useState)([]),k=Object(w.a)(v,2),C=k[0],P=k[1],L=Object(s.useState)([]),F=Object(w.a)(L,2),T=F[0],A=F[1],E=Object(s.useState)([]),D=Object(w.a)(E,2),U=D[0],R=D[1];Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cart"));e&&R(Object(_.a)(e))}),[]),Object(s.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(U))}),[U]);var H=Object(s.useState)([]),W=Object(w.a)(H,2),q=W[0],B=W[1],V=function(){var e=Object(y.a)(Object(N.a)().mark((function e(){var t;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(!0),t=[],I.get().then((function(e){e.forEach((function(e){t.push(Object(l.a)(Object(l.a)({},e.data()),{},{food:[]}))})),P([].concat(t)),f(!1),f(!0);var c=[];S.get().then((function(e){e.forEach((function(e){c.push(e.data())})),A([].concat(c));var s=[].concat(t);null===t||void 0===t||t.forEach((function(e,t){var i=null===c||void 0===c?void 0:c.filter((function(t){return(null===t||void 0===t?void 0:t.menu)===(null===e||void 0===e?void 0:e.name)}));s[t]=Object(l.a)(Object(l.a)({},e),{},{food:i})})),P(Object(_.a)(s)),f(!1)})).catch((function(e){x({flag:!0,type:"error",msg:e.message}),f(!1)}))})).catch((function(e){x({flag:!0,type:"error",msg:e.message}),f(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(M.Provider,{value:{foods:T,setFoods:A,isLoggedIn:a,setIsLoggedIn:n,user:d,setUser:o,alert:u,setAlert:x,loading:g,setLoading:f,menus:C,setMenus:P,fetchAll:V,cartProduct:U,setCartProduct:R,removeFromCart:function(e){var t=null===U||void 0===U?void 0:U.filter((function(t){return(null===t||void 0===t?void 0:t._id)!==e}));R(Object(_.a)(t))},locaitonList:q,setLocationList:B},children:t})},F=(c(83),function(e){var t=e.item,c=t.name,s=t.image,i=t.price,a=t._id,n=P(),r=n.cartProduct,j=n.setCartProduct;return Object(h.jsxs)("div",{className:"single__product",children:[Object(h.jsx)("div",{className:"product__img",children:Object(h.jsx)("img",{src:s,alt:"",className:"w-100 card_food_img"})}),Object(h.jsxs)("div",{className:"product__content",children:[Object(h.jsxs)("div",{className:"rating text-center",children:[Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"ri-star-s-fill"})}),Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"ri-star-s-fill"})}),Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"ri-star-s-fill"})}),Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"ri-star-s-fill"})}),Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"ri-star-s-fill"})})]}),Object(h.jsx)("h6",{children:c}),Object(h.jsxs)("div",{className:" d-flex align-items-center justify-content-between",children:[Object(h.jsxs)("span",{className:"price d-flex align-items-center",children:["Price: \u20b9",Object(h.jsx)("span",{children:i})]}),Object(h.jsxs)("span",{className:"shopping__icon",onClick:function(){var t=null===r||void 0===r?void 0:r.filter((function(e){return(null===e||void 0===e?void 0:e._id)===a}));0===(null===t||void 0===t?void 0:t.length)?(j([].concat(Object(_.a)(r),[Object(l.a)(Object(l.a)({},e.item),{},{quantity:1})])),alert("Item successfully added to cart.")):alert("Item already added to cart.")},children:["+",Object(h.jsx)("i",{className:"ri-shopping-cart-line"})]})]})]})]})}),T=(c(84),function(){return Object(h.jsx)("section",{className:"pt-0",children:Object(h.jsx)(r.d,{children:Object(h.jsxs)(r.i,{children:[Object(h.jsx)(r.c,{lg:"12",className:"mb-5",children:Object(h.jsx)("h2",{className:"popular__menu-title",children:"Popular food menu"})}),f.map((function(e){return Object(h.jsx)(r.c,{lg:"3",md:"4",sm:"6",xs:"6",className:"mb-4",children:Object(h.jsx)(F,{item:e})},e.id)}))]})})})}),A=(c(85),c.p+"static/media/pasta.0710b65f.png"),E=function(){return Object(h.jsx)("section",{children:Object(h.jsx)(r.d,{children:Object(h.jsxs)(r.i,{children:[Object(h.jsx)(r.c,{lg:"6",md:"6",children:Object(h.jsx)("img",{src:A,alt:"",className:"w-100"})}),Object(h.jsxs)(r.c,{lg:"6",md:"6",children:[Object(h.jsxs)("div",{className:"choose__content",children:[Object(h.jsx)("h4",{children:"Who we are?"}),Object(h.jsx)("h2",{children:"Take a look at the benefits we offer you"}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis impedit rem neque minus adipisci."})]}),Object(h.jsxs)("div",{className:"features mt-4",children:[Object(h.jsxs)("div",{className:"feature1 d-flex align-items-center gap-5",children:[Object(h.jsxs)("div",{className:"single__feature",children:[Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"ri-truck-line"})}),Object(h.jsx)("h6",{children:"Free Home Delivery"}),Object(h.jsx)("p",{children:"On order above \u20b9500."})]}),Object(h.jsxs)("div",{className:"single__feature",children:[Object(h.jsx)("span",{className:"feature__icon-two",children:Object(h.jsx)("i",{className:"ri-money-dollar-circle-line"})}),Object(h.jsx)("h6",{children:"Return & Refund"}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet."})]})]}),Object(h.jsxs)("div",{className:"feature1 mt-3 d-flex align-items-center gap-5",children:[Object(h.jsxs)("div",{className:"single__feature",children:[Object(h.jsx)("span",{className:"feature__icon-3",children:Object(h.jsx)("i",{className:"ri-secure-payment-line"})}),Object(h.jsx)("h6",{children:"Cash On Delivery"}),Object(h.jsx)("p",{children:"Pay after you get your order."})]}),Object(h.jsxs)("div",{className:"single__feature",children:[Object(h.jsx)("span",{className:"feature__icon-4",children:Object(h.jsx)("i",{className:"ri-24-hours-line"})}),Object(h.jsx)("h6",{children:"10 Hours Delivery Support"}),Object(h.jsx)("p",{children:"11 AM to 10 PM delivery support."})]})]})]})]})]})})})},D=(c(86),function(){var e=Object(s.useState)({name:"Veg",idx:0}),t=Object(w.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(v),n=Object(w.a)(a,2),l=n[0],j=n[1],d=P().menus;return Object(s.useEffect)((function(){var e;(null===d||void 0===d?void 0:d.length)>0&&i({name:null===(e=d[0])||void 0===e?void 0:e.name,idx:0})}),[d]),Object(s.useEffect)((function(){var e;void 0!==d[null===c||void 0===c?void 0:c.idx]&&j(Object(_.a)(null===(e=d[null===c||void 0===c?void 0:c.idx])||void 0===e?void 0:e.food))}),[c]),Object(h.jsx)("section",{children:Object(h.jsx)(r.d,{children:Object(h.jsxs)(r.i,{children:[Object(h.jsx)(r.c,{lg:"12",className:"text-center mb-4",children:Object(h.jsx)("h3",{className:"menu__title",children:"Our Menu Pack"})}),Object(h.jsx)(r.c,{lg:"12",className:"text-center mb-5",children:null===d||void 0===d?void 0:d.map((function(e,t){return Object(h.jsx)("button",{className:"filter-btn ".concat((null===c||void 0===c?void 0:c.name)===(null===e||void 0===e?void 0:e.name)?"active__btn":""),onClick:function(){return i({name:null===e||void 0===e?void 0:e.name,idx:t})},children:null===e||void 0===e?void 0:e.name})}))}),l.map((function(e){return Object(h.jsx)(r.c,{lg:"3",md:"4",sm:"6",xs:"6",className:"mb-4",children:Object(h.jsx)(F,{item:e})},e.id)}))]})})})}),U=(c(87),c.p+"static/media/review1.a68aedcf.svg"),R=function(){return Object(h.jsx)("section",{children:Object(h.jsx)(r.d,{children:Object(h.jsx)(r.i,{children:Object(h.jsx)(r.c,{lg:"8",sm:"12",md:"12",className:"m-auto",children:Object(h.jsxs)("div",{className:"slider__wrapper d-flex align-items-center gap-5  ",children:[Object(h.jsxs)("div",{className:"slider__content w-50",children:[Object(h.jsx)("h2",{className:"mb-4 ps-3",children:"What our customers are saying"}),Object(h.jsxs)(d.a,Object(l.a)(Object(l.a)({},{infinite:!0,dots:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3}),{},{children:[Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"single__testimonial",children:[Object(h.jsx)("p",{className:"review__content",children:'"We really enjoyed the evening at MasterChef. The food was delicious and beautifully presented. The service was excellent.The atmosphere and lighting was exactly what we would expect from a great restaurant."'}),Object(h.jsx)("h6",{children:"Partha Priyaranjan Panda"}),Object(h.jsx)("p",{children:"Biriput, Tigiria"})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"single__testimonial",children:[Object(h.jsx)("p",{className:"review__content",children:'"We had the most perfect dinner last night! Everything was magical, the food, service and overall ambience. Also the manager of the hotel was very friendly and polite."'}),Object(h.jsx)("h6",{children:"Bibhuprasad Mohapatra"}),Object(h.jsx)("p",{children:"Nuapatana, Tigiria"})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"single__testimonial",children:[Object(h.jsx)("p",{className:"review__content",children:'"My wife and I had a most enjoyable experience last night,the food was as usual excellent and the service was exemplary. I was particularly impressed that after I had made a stain on my shirt, one of your staff appeared with a glass of soda water and a napkin to help me clean the shirt."'}),Object(h.jsx)("h6",{children:"Sabyasachi Panda"}),Object(h.jsx)("p",{children:"Abhimanpur, Badamba"})]})})]}))]}),Object(h.jsx)("div",{className:"slider__img w-50",children:Object(h.jsx)("img",{src:U,alt:"",className:"w-100"})})]})})})})})},H=(c(88),c.p+"static/media/app.4e53622c.png"),W=function(){return Object(h.jsx)("section",{children:Object(h.jsx)(r.d,{className:"app__container",children:Object(h.jsxs)(r.i,{children:[Object(h.jsx)(r.c,{lg:"6",md:"6",children:Object(h.jsx)("div",{className:"app__img",children:Object(h.jsx)("img",{src:H,alt:""})})}),Object(h.jsx)(r.c,{lg:"6",md:"6",children:Object(h.jsxs)("div",{className:"app__content",children:[Object(h.jsx)("h5",{children:"Download our app"}),Object(h.jsx)("h2",{className:"mb-4",children:"Never Feel Hungry! Download Our Mobile App Order Delicious Food"}),Object(h.jsx)("p",{children:"If food is your question, our answer is yes! Choose your favorite dishes from our menu at great prices."}),Object(h.jsxs)("div",{className:"app__btns d-flex align-items-center gap-5 mt-4",children:[Object(h.jsxs)("button",{className:"btn__apple d-flex align-items-center gap-3",onClick:function(){return alert("We are working on it.You can order through our website too.")},children:[Object(h.jsx)("i",{className:"ri-apple-line"})," Apple Store"]}),Object(h.jsxs)("button",{onClick:function(){return alert("We are working on it.You can order through our website too.")},className:"btn__google d-flex align-items-center gap-3",children:[Object(h.jsx)("i",{className:"ri-google-play-line"}),"Google Play"]})]})]})})]})})})},q=function(){return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)(u,{}),Object(h.jsx)(T,{}),Object(h.jsx)(E,{}),Object(h.jsx)(D,{}),Object(h.jsx)(R,{}),Object(h.jsx)(W,{})]})},B=c(49),V=c.n(B),G=function(){var e=Object(s.useState)(""),t=Object(w.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(0),n=Object(w.a)(a,2),l=n[0],j=n[1],d=P(),o=d.foods,b=d.menus,m=Object(s.useState)([]),u=Object(w.a)(m,2),x=u[0],O=u[1],p=Object(s.useState)("null"),g=Object(w.a)(p,2),f=g[0],v=g[1];Object(s.useEffect)((function(){O(Object(_.a)(o))}),[o]),Object(s.useEffect)((function(){O("null"===f?Object(_.a)(o):Object(_.a)(null===o||void 0===o?void 0:o.filter((function(e){return(null===e||void 0===e?void 0:e.menu)===f}))))}),[f]);var N=x.filter((function(e){return""===c.value||e.name.toLowerCase().includes(c.toLowerCase())?e:console.log("not found")})),y=12*l,k=N.slice(y,y+12),C=Math.ceil(N.length/12);return Object(h.jsx)("section",{style:{marginTop:"80px"},children:Object(h.jsx)(r.d,{children:Object(h.jsxs)(r.i,{children:[Object(h.jsx)(r.c,{lg:"6",md:"6",sm:"6",xs:"12",children:Object(h.jsxs)("div",{className:"search__widget d-flex align-items-center justify-content-between ",children:[Object(h.jsx)("input",{autoFocus:!0,type:"text",placeholder:"I'm looking for....",value:c,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"ri-search-line"})})]})}),Object(h.jsx)(r.c,{lg:"6",md:"6",sm:"6",xs:"12",className:"mb-5",children:Object(h.jsx)("div",{className:"sorting__widget text-end",children:Object(h.jsxs)("select",{className:"w-50  text-white",onChange:function(e){return v(e.target.value)},children:[Object(h.jsx)("option",{value:"null",children:"All Foods"}),null===b||void 0===b?void 0:b.map((function(e){return Object(h.jsx)("option",{value:null===e||void 0===e?void 0:e.name,children:null===e||void 0===e?void 0:e.name})}))]})})}),k.map((function(e){return Object(h.jsx)(r.c,{lg:"3",md:"4",sm:"6",xs:"6",className:"mb-4",children:Object(h.jsx)(F,{item:e})},e._id)})),Object(h.jsx)("div",{children:Object(h.jsx)(V.a,{pageCount:C,onPageChange:function(e){var t=e.selected;j(t)},previousLabel:"Prev",nextLabel:"Next",containerClassName:" paginationBttns "})})]})})})},J=c(35),Y=c(18),z=(c(89),c.p+"static/media/chef_hat.118716b1.png"),K=[{display:"Home",url:"/"},{display:"Menu",url:"/menu"},{display:"About",url:"/about"},{display:"Contact",url:"/contact"}],Q=function(){var e=Object(s.useRef)(),t=Object(Y.l)(),c=P().cartProduct,i=function(){return e.current.classList.toggle("active__menu")};return Object(h.jsx)("header",{className:"header",children:Object(h.jsx)(r.d,{children:Object(h.jsxs)("div",{className:"navigation",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsxs)("h2",{className:" d-flex align-items-center gap-1",children:[Object(h.jsx)("span",{children:Object(h.jsx)("img",{src:z,alt:"logo",className:"logo_img"})}),"MasterChef"]})}),Object(h.jsx)("div",{className:"nav__menu ",ref:e,children:Object(h.jsxs)("div",{className:"nav__list__wrapper d-flex align-items-center gap-5",children:[Object(h.jsx)("ul",{className:"nav__list",children:K.map((function(e,t){return Object(h.jsx)("li",{className:"nav__item",onClick:i,children:Object(h.jsx)(J.b,{to:e.url,children:e.display})},t)}))}),Object(h.jsx)("div",{className:"menu__right",children:Object(h.jsxs)("div",{className:"custom__search ",children:[Object(h.jsx)("input",{type:"text",placeholder:"search item...."}),Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"ri-search-line"})})]})})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:"cart__icon cp",onClick:function(){return t("/cart")},children:[Object(h.jsx)("i",{className:"ri-shopping-basket-line",style:{color:"#dcd9d9"}}),Object(h.jsx)("span",{className:"badge",style:{color:"#fff"},children:null===c||void 0===c?void 0:c.length})]})}),Object(h.jsx)("div",{className:"mobile__menu",children:Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"ri-menu-line",onClick:i})})})]})})})},X=(c(90),["Monday - Saturday","11:00am - 09:00pm","Sunday - Off Day"]),Z=function(){return Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsx)("div",{className:"footer__top",children:Object(h.jsx)(r.d,{children:Object(h.jsxs)(r.i,{children:[Object(h.jsx)(r.c,{lg:"4",md:"4",sm:"6",children:Object(h.jsxs)("div",{className:"logo",children:[Object(h.jsxs)("h2",{className:" d-flex align-items-center gap-1 mb-4",children:[Object(h.jsx)("span",{children:Object(h.jsx)("img",{src:z,alt:"logo",className:"logo_img_footer"})}),"MasterChef"]}),Object(h.jsx)("p",{children:'MasterChef is based on the principle "Indian food, infused with spices and delicate flavours made from the right ingredients, delights not just the taste buds but that something more".'})]})}),Object(h.jsxs)(r.c,{lg:"3",md:"4",sm:"6",children:[Object(h.jsx)("h5",{className:"footer__link-title",children:"Delivery Time"}),Object(h.jsx)(r.g,{children:X.map((function(e,t){return Object(h.jsx)(r.h,{className:"link__item",children:e},t)}))})]}),Object(h.jsxs)(r.c,{lg:"2",md:"4",sm:"6",children:[Object(h.jsx)("h5",{className:"footer__link-title",children:"Follow us"}),Object(h.jsxs)(r.g,{children:[Object(h.jsx)(r.h,{className:"link__item",children:Object(h.jsxs)("a",{href:"#",target:"_blank",className:" link_hover d-flex align-items-center gap-3",children:[Object(h.jsx)("i",{className:"ri-facebook-circle-line link_hover"})," Facebook"]})}),Object(h.jsx)(r.h,{className:"link__item",children:Object(h.jsxs)("a",{href:"#",target:"_blank",className:"link_hover d-flex align-items-center gap-3",children:[Object(h.jsx)("i",{className:"ri-instagram-line link_hover"})," Instagram"]})}),Object(h.jsx)(r.h,{className:"link__item",children:Object(h.jsxs)("a",{href:"#",target:"_blank",className:"link_hover d-flex align-items-center gap-3",children:[Object(h.jsx)("i",{className:"ri-youtube-line link_hover"})," Youtube"]})})]})]}),Object(h.jsxs)(r.c,{lg:"3",md:"4",sm:"6",children:[Object(h.jsx)("h5",{className:"footer__link-title",children:"Contact"}),Object(h.jsxs)(r.g,{children:[Object(h.jsx)(r.h,{className:"link__item",children:Object(h.jsxs)("a",{className:"d-flex align-items-center gap-3 link_hover",target:"_blank",href:"https://maps.app.goo.gl/2GxjA7c2SHFhGGow9",children:[Object(h.jsx)("i",{className:"ri-map-pin-line"})," Hotel MasterChef, Tigiria"]})}),Object(h.jsx)(r.h,{className:"link__item d-flex align-items-center gap-3",children:Object(h.jsxs)("a",{className:"d-flex align-items-center gap-3 link_hover",href:"mailto:hotelmasterchef1@gmail.com",children:[Object(h.jsx)("i",{className:"ri-mail-line"})," hotelmasterchef1@gmail.com"]})}),Object(h.jsxs)(r.h,{className:"link__item  gap-3",children:[Object(h.jsxs)("a",{className:"d-flex align-items-center gap-3 link_hover",href:"tel:+918378938837",children:[Object(h.jsx)("i",{className:"ri-phone-line"})," +91 8378938837"]}),Object(h.jsx)("a",{className:"d-flex align-items-center gap-4 link_hover",href:"tel:+919130328398",children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0+91 9130328398"})]})]})]})]})})}),Object(h.jsx)("div",{className:"footer__bottom",children:Object(h.jsx)(r.d,{children:Object(h.jsx)(r.i,{children:Object(h.jsx)(r.c,{lg:"12",children:Object(h.jsxs)("p",{children:["copyright 2022, developed by",Object(h.jsx)("a",{style:{textDecoration:"underline"},href:"https://www.instagram.com/_sahoochinmay/",target:"_blank",children:"Sahoochinmay"}),". All rights reserved"]})})})})})]})},$=c.p+"static/media/restaurant.a3525228.png",ee=c.p+"static/media/owner.69d924ee.jpeg",te=function(){return Object(h.jsx)("section",{style:{marginTop:"80px"},children:Object(h.jsxs)(r.d,{children:[Object(h.jsxs)(r.i,{children:[Object(h.jsxs)(r.c,{lg:"6",sm:"12",children:[Object(h.jsx)("h1",{children:"About Us..."}),Object(h.jsx)("p",{className:"mt-5",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),Object(h.jsx)(r.c,{lg:"6",sm:"12",className:"d-flex justify-content-center justify-center align-center ",children:Object(h.jsx)("img",{src:$,alt:"Restaurant",className:"about_restaurant_img"})})]}),Object(h.jsxs)(r.i,{style:{marginTop:"100px"},children:[Object(h.jsx)(r.c,{lg:"6",sm:"12",className:"d-flex justify-content-center justify-center align-center ",children:Object(h.jsx)("img",{src:ee,alt:"Restaurant",className:"about_restaurant_img"})}),Object(h.jsx)(r.c,{lg:"6",sm:"12",children:Object(h.jsxs)("p",{className:"mt-5",children:[Object(h.jsx)("h1",{children:"Hi..."}),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]})})]})]})})},ce=function(){return Object(h.jsx)("section",{style:{marginTop:"80px"},children:Object(h.jsxs)(r.d,{children:[Object(h.jsxs)(r.i,{children:[Object(h.jsxs)(r.c,{lg:"6",sm:"12",children:[Object(h.jsx)("h2",{children:"Contact Us"}),Object(h.jsxs)("div",{className:"mt-md-5 mt-3",children:[Object(h.jsxs)("p",{className:"contact_info",children:[Object(h.jsx)("i",{className:"ri-map-pin-line"}),"\xa0\xa0\xa0Hotel MasterChef, Tigiria"]}),Object(h.jsxs)("p",{className:"contact_info",children:[Object(h.jsx)("i",{className:"ri-mail-line"}),"\xa0\xa0\xa0hotelmasterchef1@gmail.com"]}),Object(h.jsxs)("p",{className:"contact_info",children:[Object(h.jsx)("i",{className:"ri-phone-line"}),"\xa0\xa0\xa0+91 8378938837"]})]})]}),Object(h.jsx)(r.c,{lg:"6",sm:"12",children:Object(h.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.0474208982555!2d85.5164868!3d20.463245399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18fb4208c5fda9%3A0xe79d145fcadc654b!2sHotel%20Master%20chef!5e0!3m2!1sen!2sin!4v1663646945327!5m2!1sen!2sin",className:"map_embed",allowfullscreen:"true",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})})]}),Object(h.jsxs)("form",{action:"",style:{marginTop:"100px"},children:[Object(h.jsx)("h2",{className:"text-center mt-5 mb-sm-5 mb-3",children:"Contact Form"}),Object(h.jsxs)(r.i,{children:[Object(h.jsx)(r.c,{lg:"6",sm:"12",children:Object(h.jsx)("input",{type:"text",placeholder:"Name",className:"contact_form_input"})}),Object(h.jsx)(r.c,{lg:"6",sm:"12",children:Object(h.jsx)("input",{type:"text",placeholder:"Mobile",className:"contact_form_input"})}),Object(h.jsx)(r.c,{children:Object(h.jsx)("textarea",{rows:7,placeholder:"Message...",className:"contact_form_input"})})]}),Object(h.jsx)("button",{type:"button",className:"button_p",children:"Submit"})]})]})})},se=function(e){var t=e.data,c=e.d_idex,i=Object(s.useState)(null===t||void 0===t?void 0:t.quantity),a=Object(w.a)(i,2),n=a[0],r=a[1],j=P(),d=j.removeFromCart,o=j.cartProduct,b=j.setCartProduct;return Object(s.useEffect)((function(){var e=o;e[c]=Object(l.a)(Object(l.a)({},e[c]),{},{quantity:n}),b(Object(_.a)(e))}),[n]),Object(h.jsxs)("div",{className:"cp_p",children:[Object(h.jsx)("img",{src:null===t||void 0===t?void 0:t.image,className:"p_img",alt:"food_image"}),Object(h.jsxs)("div",{className:"detail_cp",children:[Object(h.jsx)("h6",{children:null===t||void 0===t?void 0:t.name}),Object(h.jsxs)("h3",{children:["\u20b9",(null===t||void 0===t?void 0:t.price)*n]}),Object(h.jsxs)("div",{className:"quant_btn",children:[Object(h.jsx)("button",{onClick:function(){n>1&&r(n-1)},children:"-"}),Object(h.jsx)("span",{children:n}),Object(h.jsx)("button",{onClick:function(){n<=9&&r(n+1)},children:"+"})]})]}),Object(h.jsx)("div",{className:"delte_bt_p",children:Object(h.jsx)("i",{className:"ri-delete-bin-5-line",onClick:function(){return d(null===t||void 0===t?void 0:t._id)},style:{color:"red"}})})]})},ie=c.p+"static/media/map.73948584.png",ae=function(){var e=Object(Y.l)(),t=P(),c=t.cartProduct,i=(t.setCartProduct,t.locaitonList),a=(t.setLocationList,Object(s.useState)(0)),n=Object(w.a)(a,2),l=n[0],j=n[1],d=Object(s.useState)(0),o=Object(w.a)(d,2),b=o[0],m=(o[1],Object(s.useState)(20)),u=Object(w.a)(m,2),x=u[0],O=u[1],p=Object(s.useState)(!0),g=Object(w.a)(p,2),f=g[0],v=g[1],_=Object(s.useState)(!1),N=Object(w.a)(_,2),y=N[0],k=N[1],C=Object(s.useState)(!1),S=Object(w.a)(C,2),I=S[0],M=S[1];return Object(s.useEffect)((function(){j(0),O(20);var e=0;null===c||void 0===c||c.map((function(t){var c=(null===t||void 0===t?void 0:t.quantity)*parseInt(null===t||void 0===t?void 0:t.price);console.log(c),e+=c})),j(e),e>499&&O(0)}),[c]),Object(h.jsxs)(r.d,{style:{marginTop:"80px",paddingTop:"0px"},children:[Object(h.jsx)("div",{className:"cart_top",children:Object(h.jsx)("h2",{children:"My Cart"})}),Object(h.jsxs)(r.i,{children:[Object(h.jsxs)(r.c,{sm:"8",xs:"12",children:[Object(h.jsxs)("div",{className:"clickable_label",onClick:function(){return v(!f)},children:[Object(h.jsxs)("h3",{children:["Items(",c.length,")"]}),Object(h.jsx)("span",{style:{transform:f?"rotate(90deg)":"rotate(-90deg)"},children:Object(h.jsx)("i",{class:"ri-play-mini-fill"})})]}),f?Object(h.jsxs)(h.Fragment,{children:[c.map((function(e,t){return Object(h.jsx)(se,{data:e,d_idex:t})})),0===c.length?Object(h.jsxs)("section",{className:"empty_section",children:[Object(h.jsx)("i",{className:"ri-shopping-basket-line",style:{fontSize:"50px"}}),Object(h.jsx)("h3",{children:"Your Cart is Empty"}),Object(h.jsx)(r.a,{className:"shop_button",onClick:function(){return e("/menu")},children:"Check Menu"})]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{className:"conntinue_btn",onClick:function(){v(!1),k(!0)},children:"Continue"})})]}):null,Object(h.jsxs)("div",{className:"clickable_label",style:{marginTop:f?"70px":"30px"},onClick:function(){return k(!y)},children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)("img",{src:ie,alt:"address",style:{height:"30px"}}),"\xa0Deliver to"]}),Object(h.jsx)("span",{style:{transform:y?"rotate(90deg)":"rotate(-90deg)"},children:Object(h.jsx)("i",{class:"ri-play-mini-fill"})})]}),y?Object(h.jsxs)(h.Fragment,{children:[null===i||void 0===i?void 0:i.map((function(e,t){return Object(h.jsxs)("div",{className:"address_options",children:[Object(h.jsx)("input",{type:"radio",id:t,name:"age",value:"30"}),Object(h.jsx)("label",{for:t,children:null===e||void 0===e?void 0:e.address})]})})),Object(h.jsxs)("div",{className:"address_options",children:[Object(h.jsx)("input",{type:"radio",id:"age1",name:"age",value:"30"}),Object(h.jsx)("label",{for:"age1",children:"0 - 30"})]}),Object(h.jsxs)("div",{className:"address_options",children:[Object(h.jsx)("input",{type:"radio",id:"age2",name:"age",value:"60"}),Object(h.jsx)("label",{for:"age2",children:"31 - 60"})]}),Object(h.jsx)("div",{style:{padding:"0px 20px "},children:I?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:"cp",onClick:function(){return M(!1)},style:{color:"white",float:"right",marginTop:"20px"},children:"X"}),Object(h.jsxs)(r.e,{style:{padding:"20px"},children:[Object(h.jsxs)(r.f,{children:[Object(h.jsx)("label",{htmlFor:"",style:{color:"white"},children:"Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter your name",className:"address_input"})]}),Object(h.jsxs)(r.f,{children:[Object(h.jsx)("label",{htmlFor:"",style:{color:"white"},children:"Mobile Number"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter your Mobile Number",className:"address_input"})]}),Object(h.jsxs)(r.f,{children:[Object(h.jsx)("label",{htmlFor:"",style:{color:"white"},children:"Address"}),Object(h.jsx)("textarea",{placeholder:"Enter your full address",className:"address_input"})]}),Object(h.jsx)(r.a,{type:"button",children:"Submit"})]})]}):Object(h.jsx)("button",{style:{padding:"5px",border:"1px solid white",borderRadius:"6px",background:"none",color:"white",margin:"10px 0px 0px 20px"},type:"button",onClick:function(){return M(!0)},children:"+ Add New"})})]}):null]}),Object(h.jsx)(r.c,{sm:"4",xs:"12",children:Object(h.jsxs)(r.b,{className:"p_detail_c",children:[Object(h.jsx)("h3",{className:"title",children:"PRICE DETAILS"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[" Price (",c.length," item)"]}),Object(h.jsxs)("td",{align:"right",children:["\u20b9",l]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"GST"}),Object(h.jsxs)("td",{align:"right",children:["\u20b9",b]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Delivery Charges"}),Object(h.jsx)("td",{align:"right",children:l>499?"FREE":"\u20b9".concat(x)})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("table",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Total Amount"}),Object(h.jsxs)("td",{align:"right",children:["\u20b9",l+x]})]})}),Object(h.jsx)("hr",{}),l<500&&Object(h.jsx)("p",{className:"saving",children:"You will get free delivery if you order above \u20b9500"}),Object(h.jsx)("button",{children:"PLACE ORDER"}),Object(h.jsx)("p",{style:{marginTop:"20px"},children:"Want to order manually ? Please call to bellow mention number."})]})})]})]})};var ne=function(){var e=P(),t=e.loading,c=e.fetchAll;return Object(s.useEffect)((function(){c()}),[]),Object(h.jsxs)(J.a,{children:[Object(h.jsx)(Q,{}),t?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"loader_home",children:Object(h.jsx)(r.j,{color:"primary",children:"Loading..."})})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(Y.c,{children:[Object(h.jsx)(Y.a,{exact:!0,path:"/",element:Object(h.jsx)(q,{})}),Object(h.jsx)(Y.a,{exact:!0,path:"/menu",element:Object(h.jsx)(G,{})}),Object(h.jsx)(Y.a,{exact:!0,path:"/about",element:Object(h.jsx)(te,{})}),Object(h.jsx)(Y.a,{exact:!0,path:"/contact",element:Object(h.jsx)(ce,{})}),Object(h.jsx)(Y.a,{exact:!0,path:"/cart",element:Object(h.jsx)(ae,{})})]}),Object(h.jsx)(Z,{})]})]})};n.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(L,{children:Object(h.jsx)(ne,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.7a3d4bcd.chunk.js.map