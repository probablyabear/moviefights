(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(86),a(122)),i=a(160),m=a(161),s=a(125),u=a(169),f=a(20),p=a(162),h=Object(l.a)(function(e){return{root:{flexGrow:1},appBar:{backgroundColor:"transparent",boxShadow:"none"},button:{color:"#ffffff"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},link:{color:"#ffffff"}}}),d=function(){var e=h();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{position:"static",className:e.appBar},r.a.createElement(m.a,null,r.a.createElement(s.a,{variant:"h6",className:e.title},r.a.createElement(p.a,{component:f.b,to:"/",className:e.link},"Moviefights")),r.a.createElement(p.a,{component:f.b,to:"/fight",underline:"none"},r.a.createElement(u.a,{className:e.button},"Fight")),r.a.createElement(p.a,{component:f.b,to:"/about",underline:"none"},r.a.createElement(u.a,{className:e.button},"About")),r.a.createElement(p.a,{component:f.b,to:"/github",underline:"none"},r.a.createElement(u.a,{className:e.button},"Github")))))},g=a(24),E=a(79),b=a(167),v=a(165),w=a(46),y=a(166),x=(a(100),a(163)),O=a(124),N=Object(l.a)(function(e){return{root:{padding:e.spacing(3,2),marginTop:"5rem"}}}),j=function(){var e=N();return r.a.createElement(x.a,null,r.a.createElement(O.a,{className:e.root,elevation:12},r.a.createElement(s.a,{variant:"h5",component:"h3",gutterBottom:!0},"MovieFights"),r.a.createElement(s.a,{component:"p"}),r.a.createElement(s.a,{component:"p"},"MovieFights is a small hobby project built to settle arguments about which movies are rated better than others. And to explore"," ",r.a.createElement(p.a,{href:"https://reactjs.org/"},"ReactJS"),". It was built with"," ",r.a.createElement(p.a,{href:"https://reactjs.org/"},"ReactJS"),","," ",r.a.createElement(p.a,{href:"https://reacttraining.com/react-router/web/guides/quick-start"},"react-router-dom"),", ",r.a.createElement(p.a,{href:"https://material-ui.com/"},"Material-UI"),", and"," ",r.a.createElement(p.a,{href:"https://github.com/axios/axios"},"Axios"),"."),r.a.createElement(s.a,{component:"p",gutterBottom:!0}),r.a.createElement(s.a,{component:"p",gutterBottom:!0},"Movie data comes from the awesome"," ",r.a.createElement(p.a,{href:"https://www.themoviedb.org/"},"TheMovieDB API")," -"," ",r.a.createElement("span",{style:{fontStyle:"italic"}},"Thanks!")),r.a.createElement(s.a,{component:"p"},"The project is available on GitHub if you'd like to mess around with it.")))},k=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Github"))},T=a(164),F=a(76),S=a.n(F),B=(a(101),Object(l.a)(function(e){return{root:{flexGrow:1,marginTop:"2rem",textAlign:"center"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},title:{color:"#ffffff",fontWeight:"bold"}}})),Q=function(){var e=B();return r.a.createElement(x.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(T.a,{container:!0,spacing:3},r.a.createElement(T.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(s.a,{variant:"h3",gutterBottom:!0,className:e.title},"Pick your movies."),r.a.createElement(s.a,{variant:"h5",gutterBottom:!0,className:e.title},"Watch them fight."),r.a.createElement("div",{className:"headline-image"},r.a.createElement("img",{src:S.a,alt:""})),r.a.createElement(p.a,{component:f.b,to:"/fight",underline:"none"},r.a.createElement(u.a,{variant:"contained",color:"secondary"},"Start a fight"))))))},C=a(53),A=a.n(C),P=a(77),W=a(44),q=a(47),G=a(33),I=a(78),M=a.n(I),_=a(168),J=Object(l.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},dense:{marginTop:16},menu:{width:200},search:{backgroundColor:"#ffffff",background:"#ffffff"},button:{backgroundColor:"#4CAF50",color:"#ffffff"}}}),R=function(e){var t=e.onChange,a=e.name,n=e.onSubmit,o=e.value,c=e.label,l=J();return r.a.createElement("form",{className:l.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){return n(o,a,e)}},r.a.createElement(_.a,{id:"filled-full-width",label:c,placeholder:"Search for a movie...",fullWidth:!0,margin:"normal",variant:"filled",name:a,className:l.search,InputLabelProps:{shrink:!0},InputProps:{classes:{input:l.search}},value:o,onChange:t}),r.a.createElement(u.a,{variant:"contained",color:"secondary",fullWidth:!0,type:"submit"},"Search"))},D=(a(120),function(e){var t=e.movie;return r.a.createElement("div",{className:"movie-container"},r.a.createElement("div",{className:"movie-info-wrapper"},r.a.createElement("h3",{className:"movie-title"},t.original_title," -",r.a.createElement("span",{className:"movie-year"},t.release_date.substring(0,4))),r.a.createElement("p",null,t.overview)),r.a.createElement("div",{className:"movie-rating-wrapper"},r.a.createElement("h1",null,t.vote_average),r.a.createElement("p",{className:"movie-votes"},t.vote_count," Votes")))}),L={marginTop:"20px"},V=function(e){var t=e.results;return r.a.createElement("div",{style:L},t&&t.map(function(e){return r.a.createElement(D,{movie:e,key:e.id})}))},H=Object(l.a)(function(e){return{root:{textAlign:"center",marginBottom:"5rem"},title:{color:"#ffffff"},error:{textAlign:"center",color:"#ffffff"}}}),U=function(){var e=H(),t=Object(n.useState)({contenderOneQuery:"",contenderTwoQuery:""}),a=Object(G.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)([]),i=Object(G.a)(l,2),m=i[0],s=i[1],u=Object(n.useState)([]),f=Object(G.a)(u,2),p=f[0],h=f[1],d=Object(n.useState)({contenderOneFormError:"",contenderTwoFormError:""}),g=Object(G.a)(d,2),E=g[0],b=g[1],v=function(e){c(Object(q.a)({},o,Object(W.a)({},e.target.name,e.target.value))),"contenderOneQuery"===e.target.name&&e.target.value.length>2?b({contenderOneFormError:""}):"contenderTwoQuery"===e.target.name&&e.target.value.length>2&&b({contenderTwoFormError:""})},w=function(){var e=Object(P.a)(A.a.mark(function e(t,a,n){var r,o,c;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!(t.length<2&&"contenderOneQuery"===a)){e.next=8;break}return(r=Object(q.a)({},E)).contenderOneFormError="Please enter a query",b(r),e.abrupt("return");case 8:if(!(t.length<2&&"contenderTwoQuery"===a)){e.next=15;break}return(o=Object(q.a)({},E)).contenderTwoFormError="Please enter a query",b(o),e.abrupt("return");case 15:return e.next=17,M.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("b5c77b8ec9dc66e249342f6184b836e6","&query=").concat(t));case 17:c=e.sent,"contenderOneQuery"===a?s(c.data.results):"contenderTwoQuery"===a&&h(c.data.results);case 19:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}();return r.a.createElement(x.a,null,r.a.createElement("div",{className:e.root},r.a.createElement("h1",{className:e.title},"Pick a Fight")),r.a.createElement(T.a,{container:!0,spacing:3},r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6},r.a.createElement(R,{name:"contenderOneQuery",value:o.contenderOneQuery,onChange:v,label:"Contender 1",onSubmit:w}),E.contenderOneFormError&&r.a.createElement("p",{className:e.error},"Please enter a query"),0!==m.length?r.a.createElement(V,{results:m}):null),r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6},r.a.createElement(R,{name:"contenderTwoQuery",value:o.contenderTwoQuery,onChange:v,label:"Contender 2",onSubmit:w}),E.contenderTwoFormError&&r.a.createElement("p",{className:e.error},"Please enter a query"),0!==p.length?r.a.createElement(V,{results:p}):null)))},$=Object(E.a)({palette:{primary:v.a,secondary:w.a}});var z=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(y.a,null),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement(b.a,{theme:$},r.a.createElement(d,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:Q}),r.a.createElement(g.a,{exact:!0,path:"/fight",component:U}),r.a.createElement(g.a,{exact:!0,path:"/about",component:j}),r.a.createElement(g.a,{exact:!0,path:"/github",component:k}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,a){e.exports=a.p+"static/media/fight-white.e8278b94.png"},81:function(e,t,a){e.exports=a(121)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.f9203c0b.chunk.js.map