(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},8:function(t,e,a){t.exports=a(9)},9:function(t,e,a){"use strict";a.r(e);var n=a(2),o=a(3),r=a(6),u=a(4),c=a(7),i=a(0),s=a.n(i),l=a(5),F=a.n(l),d=(a(14),["#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300","#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC","#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999","#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC","#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF"]);function h(t){return s.a.createElement("div",null,s.a.createElement("h1",{id:"category"},t.category),s.a.createElement("p",{id:"text"},s.a.createElement("i",{class:"fas fa-quote-left"})," "+t.text+" ",s.a.createElement("i",{class:"fas fa-quote-right"})),s.a.createElement("p",{id:"author"},"-- ",t.author," --"))}function m(t){return s.a.createElement("div",{id:"quote-btns"},s.a.createElement("button",{id:"tweet-quote",className:"btn rounded animated",onClick:t.tweetQuote},s.a.createElement("i",{class:"fab fa-twitter"})),s.a.createElement("button",{id:"new-quote",className:"btn rounded animated",onClick:t.getQuote},s.a.createElement("i",{class:"fas fa-plus"})))}var E=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={text:null,author:null,category:null},a}return Object(c.a)(e,t),Object(o.a)(e,[{key:"getQuote",value:function(){var t=this;fetch("https://talaikis.com/api/quotes/random/").then(function(t){return t.json()}).then(function(e){t.setState({text:e.quote,author:e.author,category:e.cat})}),function(){var t=Math.floor(Math.random()*d.length),e=document.body,a=document.getElementsByClassName("btn");e.style.background=d[t],e.style.color=d[t];for(var n=0;n<a.length;n++)a[n].style.background=d[t]}()}},{key:"tweetQuote",value:function(){window.open("https://twitter.com/intent/tweet?text="+escape(this.state.text+"\n- "+this.state.author))}},{key:"componentDidMount",value:function(){this.getQuote()}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{id:"quote-box",className:"white-background box rounded"},s.a.createElement(h,{author:this.state.author,text:this.state.text,category:this.state.category}),s.a.createElement(m,{getQuote:function(){return t.getQuote()},tweetQuote:function(){return t.tweetQuote()}}))}}]),e}(s.a.Component);F.a.render(s.a.createElement(E,null),document.getElementById("root"))}},[[8,2,1]]]);
//# sourceMappingURL=main.ef09f9ef.chunk.js.map