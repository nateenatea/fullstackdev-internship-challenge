(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(t,e,a){t.exports=a(44)},36:function(t,e,a){},37:function(t,e,a){},44:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),i=(a(35),a(36),a(37),a(48)),c=a(49),s=a(20),h=a(21),m=a(28),u=a(27),d=a(46),y=a(47),v=a(7),f=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={data:[],total:0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://www.mocky.io/v2/5c77c5b330000051009d64c9").then((function(t){return t.json()})).then((function(e){return t.setState({data:e.data})}))}},{key:"addmoney",value:function(){this.setState({total:this.state.total+1})}},{key:"addmoney2",value:function(){this.setState({total:this.state.total+2})}},{key:"addmoney5",value:function(){this.setState({total:this.state.total+5})}},{key:"addmoney10",value:function(){this.setState({total:this.state.total+10})}},{key:"cancel",value:function(){var t,e,a,n,r=this.state.total;t=Math.floor(r/10),e=Math.floor((r-10*t)/5),a=Math.floor((r-10*t-5*e)/2),n=Math.floor(r-10*t-5*e-2*a),alert("\u0e40\u0e07\u0e34\u0e19\u0e17\u0e2d\u0e19 "+this.state.total+" \u0e1a\u0e32\u0e17 \n \u0e40\u0e2b\u0e23\u0e35\u0e22\u0e0d 10 : "+t+"\n \u0e40\u0e2b\u0e23\u0e35\u0e22\u0e0d 5 : "+e+"\n \u0e40\u0e2b\u0e23\u0e35\u0e22\u0e0d 2 : "+a+"\n \u0e40\u0e2b\u0e23\u0e35\u0e22\u0e0d 1 : "+n),this.setState({total:0})}},{key:"render",value:function(){var t=this,e=this.state.data,a=this.state.total;return r.a.createElement("div",null,r.a.createElement(d.a,null,Object.keys(e).map((function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{style:{width:"10.16rem"}},r.a.createElement(v.a.Img,{variant:"top",src:e[n].image,style:{width:"10rem",height:"10rem"}}),r.a.createElement(v.a.Body,null,r.a.createElement(y.a,{variant:"outline-primary",onClick:function(){return 0==e[n].in_stock?alert("\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e2b\u0e21\u0e14"):e[n].price>a?alert("\u0e40\u0e07\u0e34\u0e19\u0e44\u0e21\u0e48\u0e1e\u0e2d \u0e01\u0e23\u0e38\u0e13\u0e32\u0e2b\u0e22\u0e2d\u0e14\u0e40\u0e07\u0e34\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21"):alert("\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a "+e[n].name)+t.setState({total:t.state.total-e[n].price})}},e[n].name),r.a.createElement(v.a.Text,null,"\u0e23\u0e32\u0e04\u0e32 ",e[n].price," \u0e1a\u0e32\u0e17"))))}))),r.a.createElement(v.a,{style:{width:"60rem"}},r.a.createElement(v.a.Header,null,"\u0e2b\u0e22\u0e2d\u0e14\u0e40\u0e2b\u0e23\u0e35\u0e22\u0e0d"),r.a.createElement(v.a.Body,null,r.a.createElement(y.a,{variant:"secondary",onClick:this.addmoney.bind(this)},"1 \u0e1a\u0e32\u0e17")," ",r.a.createElement(y.a,{variant:"secondary",onClick:this.addmoney2.bind(this)},"2 \u0e1a\u0e32\u0e17")," ",r.a.createElement(y.a,{variant:"secondary",onClick:this.addmoney5.bind(this)},"5 \u0e1a\u0e32\u0e17")," ",r.a.createElement(y.a,{variant:"secondary",onClick:this.addmoney10.bind(this)},"10 \u0e1a\u0e32\u0e17")," ",r.a.createElement(v.a.Text,null,"\u0e40\u0e07\u0e34\u0e19\u0e23\u0e27\u0e21 : ",a),r.a.createElement(y.a,{variant:"secondary",onClick:this.cancel.bind(this)},"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01")," ")))}}]),a}(r.a.Component);var E=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{bg:"dark",variant:"dark"},r.a.createElement(i.a.Brand,{href:"#home"},"Vending Manchine"),r.a.createElement(c.a,null,r.a.createElement(c.a.Link,{href:"https://github.com/nateenatea/fullstackdev-internship-challenge"},"Github"))),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.47429b28.chunk.js.map