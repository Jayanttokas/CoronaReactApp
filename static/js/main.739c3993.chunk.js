(this.webpackJsonpcovidv2=this.webpackJsonpcovidv2||[]).push([[0],{140:function(e,t,a){e.exports=a(419)},419:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),s=a(15),i=a(16),o=a(18),m=a(17),u=function(){return r.a.createElement("div",{className:"container-fluid text-center bg-light p-2 border-bottom border-dark"},r.a.createElement("h1",null," CORONAVIRUS TRACKER "))},d=function(){return r.a.createElement("footer",{class:"footer"},"MADE BY JAYANT TOKAS")},p=a(41),v=function(){return r.a.createElement("nav",{class:"bg-dark navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav ml-auto mr-auto pl-5 pr-5 h5 "},r.a.createElement("li",{class:"nav-item active"},r.a.createElement(p.b,{class:"nav-link text-white",to:"/"},"Search By Countries")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(p.b,{class:"nav-link text-white",to:"/menuComp/indiaState"},"Search By Indian State")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(p.b,{class:"nav-link text-white",to:"/menuComp/total"},"Total Cases(World)")))))},b=a(3),h=a(27),f=a.n(h),E=a(39),g=(a(60),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid search"},r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",{class:"bg-primary rounded-lg p-4 form-group row justify-content-center"},r.a.createElement("label",{for:"inputEmail3",class:"col-sm-2 col-form-label"},"Enter Country"),r.a.createElement("div",{class:"col-sm-4"},r.a.createElement("input",{type:"text",class:"form-control",value:this.state.value,onChange:function(t){return e.setState({term:t.target.value})},placeholder:"Enter A Country"})),r.a.createElement("button",{type:"submit",class:"btn btn-dark"},"Search"))))}}]),a}(r.a.Component)),y=function(e){return r.a.createElement("div",{className:"container mt-5 mb-5 text-center"},r.a.createElement("h1",{className:"country-name"},e.name.toUpperCase()),r.a.createElement("div",{className:"d-flex container justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("ul",{class:"list-group text-center h4"},r.a.createElement("li",{class:"list-group-item bg-dark text-white"},"Confirmed: ",e.data.total_cases),r.a.createElement("li",{class:"list-group-item bg-success text-white"},"Recovered: ",e.data.recovered),r.a.createElement("li",{class:"list-group-item bg-warning text-white"},"Active: ",e.data.active_cases),r.a.createElement("li",{class:"list-group-item bg-danger text-white"},"Decieved: ",e.data.deaths)))))},S=a(40),x=a.n(S),w=x.a.create({baseURL:"https://coronavirus-map.p.rapidapi.com/v1/summary/region",headers:{"x-rapidapi-host":"coronavirus-map.p.rapidapi.com","x-rapidapi-key":"49ef0f8e77mshbd811e259c03534p1008b1jsn255efb4b64a2"}}),C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={result:[],name:""},e.onSearchSubmit=function(){var t=Object(E.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("",{params:{region:"".concat(a)}});case 2:(n=t.sent)?(e.setState({name:a}),e.setState({result:n.data.data.summary})):alert("Check Country Name");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"search"},r.a.createElement(g,{onSubmit:this.onSearchSubmit})),r.a.createElement("div",{className:"Result"},r.a.createElement(y,{name:this.state.name,data:this.state.result})))}}]),a}(r.a.Component),j=function(e){return r.a.createElement("div",{className:"container mt-5 mb-5 text-center"},r.a.createElement("h1",{className:"country-name"},e.name.toUpperCase()),r.a.createElement("div",{className:"d-flex container justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("ul",{class:"list-group text-center h4"},r.a.createElement("li",{class:"list-group-item bg-dark text-white"},"Confirmed: ",e.data.confirmed),r.a.createElement("li",{class:"list-group-item bg-success text-white"},"Recovered: ",e.data.recovered),r.a.createElement("li",{class:"list-group-item bg-warning text-white"},"Critical: ",e.data.critical),r.a.createElement("li",{class:"list-group-item bg-danger text-white"},"Decieved: ",e.data.deaths)))))},O=x.a.create({baseURL:"https://covid-19-data.p.rapidapi.com/totals",headers:{"x-rapidapi-host":"covid-19-data.p.rapidapi.com","x-rapidapi-key":"49ef0f8e77mshbd811e259c03534p1008b1jsn255efb4b64a2"}}),N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={result:[],name:""},e.onSearchSubmit=Object(E.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("",{params:{format:"json"}});case 2:(a=t.sent)?(e.setState({name:"world"}),console.log(a.data[0]),e.setState({result:a.data[0]})):alert("Check Country Name");case 4:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"Result"},r.a.createElement(j,{name:this.state.name,data:this.state.result,onLoad:this.onSearchSubmit()})))}}]),a}(r.a.Component),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid search"},r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",{class:"bg-primary rounded-lg p-4 form-group row justify-content-center"},r.a.createElement("label",{for:"inputEmail3",class:"col-sm-2 col-form-label"},"Enter State"),r.a.createElement("div",{class:"col-sm-4"},r.a.createElement("input",{type:"text",class:"form-control",value:this.state.value,onChange:function(t){return e.setState({term:t.target.value})},placeholder:"Enter A Country"})),r.a.createElement("button",{type:"submit",class:"btn btn-dark"},"Search"))))}}]),a}(r.a.Component),A=function(e){return r.a.createElement("div",{className:"container mt-5 mb-5 text-center"},r.a.createElement("h1",{className:"country-name"},e.name.toUpperCase()),r.a.createElement("div",{className:"d-flex container justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("ul",{class:"list-group text-center h4"},r.a.createElement("li",{class:"list-group-item bg-dark text-white"},"Confirmed: ",e.data.confirmed),r.a.createElement("li",{class:"list-group-item bg-success text-white"},"Recovered: ",e.data.recovered),r.a.createElement("li",{class:"list-group-item bg-warning text-white"},"Active: ",e.data.active),r.a.createElement("li",{class:"list-group-item bg-danger text-white"},"Decieved: ",e.data.deaths)))))},R=x.a.create({baseURL:"https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"}),U=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={result:[],name:""},e.onSearchSubmit=function(){var t=Object(E.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.get();case 2:(n=t.sent)?(n.data.data.statewise.forEach((function(t){t.state.toLowerCase()==a.toLowerCase()&&(console.log(t),e.setState({result:t}))})),e.setState({name:a})):alert("Check Country Name");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"search"},r.a.createElement(k,{onSubmit:this.onSearchSubmit})),r.a.createElement("div",{className:"Result"},r.a.createElement(A,{name:this.state.name,data:this.state.result})))}}]),a}(r.a.Component),D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(u,null)),r.a.createElement(p.a,null,r.a.createElement("div",{className:"menu"},r.a.createElement(v,null),r.a.createElement(b.a,{path:"/",exact:!0,component:C}),r.a.createElement(b.a,{path:"/menuComp/total",exact:!0,component:N}),r.a.createElement(b.a,{path:"/menuComp/indiaState",exact:!0,component:U}))),r.a.createElement("div",{className:"footer"},r.a.createElement(d,null)))}}]),a}(r.a.Component);l.a.render(r.a.createElement(D,null),document.querySelector("#root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.739c3993.chunk.js.map