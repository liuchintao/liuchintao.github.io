"use strict";(self.webpackChunkcabin=self.webpackChunkcabin||[]).push([[608,8],{1347:function(e,t,a){a.r(t);var n=a(7294);t.default=()=>{var e=0,t=0;"undefined"!=typeof window&&(e=window.innerWidth,t=window.innerHeight,window.addEventListener("resize",(()=>{e=window.innerWidth,t=window.innerHeight;const a=document.getElementById("fireworks");a.width=window.innerWidth,a.height=window.innerHeight}),!1));const a=new Date("2023-01-07"),i=e=>{const t=document.getElementById("fireworks").getContext("2d"),{clientX:a,clientY:n}=e;r(t,a,n)},o=(a,n)=>{(a=>{a.fillStyle="#000000",a.fillRect(0,0,e,t)})(a);for(var i=0;i<n.length;i++){var o=n[i];o.x+=Math.cos(o.radians)*o.radius,o.y+=Math.sin(o.radians)*o.radius+.4,o.radius*=1-o.speed/512,o.alpha-=.005,a.beginPath(),a.arc(o.x,o.y,o.size,0,2*Math.PI,!1),a.closePath(),a.fillStyle="hsla("+o.hue+", 100%, "+o.brightness+"%, "+o.alpha+")",a.fill()}},r=(a,n,i)=>{var r;const l=((e,t)=>{const a=[];for(var n=Math.floor(361*Math.random()),i=0;i<100;i++){var o={},r=Math.floor(360*Math.random());o.radians=r*Math.PI/180,o.x=e,o.y=t,o.speed=10*Math.random(),o.radius=o.speed,o.size=Math.floor(3*Math.random())+1,o.hue=Math.floor(Math.random()*(n+30-(n-30)))+(n-30),o.brightness=Math.floor(31*Math.random())+50,o.alpha=(Math.floor(61*Math.random())+40)/100,a.push(o)}return a})(n,i),s=()=>{a.globalCompositeOperation="destination-out",a.fillStyle="rgba(0,0,0,0.1)",a.fillRect(0,0,e,t),a.globalCompositeOperation="lighter",o(a,l),r=requestAnimationFrame(s)};cancelAnimationFrame(r),s()};return n.createElement("div",{className:"fireworks",style:{width:"100vw",height:"100vh",margin:"-8px",position:"absolute",background:"#000000",zIndex:-1},onClick:i,onKeyDown:()=>{}},n.createElement("div",{style:{width:"100vw",height:"100vh",color:"#ffffff",position:"absolute"},onClick:i},n.createElement("h1",null,"Dear my lover Huan"),n.createElement("h2",null,"We have been seperated fo ",(()=>{const e=(new Date).getTime()-a.getTime();return Math.floor(e/1e3/3600/24)})()," days."),n.createElement("h2",null,"I miss you!"),n.createElement("p",null,"I miss you all the time, so I want to do something memorable for us.I think about what can I do for us, and this blog is the result."),n.createElement("p",null,'Before you going to New Zealand, you said "You can write letter to me". I always remeber it, but you are a traveler in New Zealand, without a permanent address.'),n.createElement("p",null,"This is my first letter to you, I will keep writing to you this way."),n.createElement("p",null,"By the way, I write this website by"," ",n.createElement("a",{href:"https://www.gatsbyjs.com/"},"GatsbyJS")," and",n.createElement("a",{href:"https://reactjs.org/"},"ReactJS"),". They are easy to learn. And it is worth mentioning that GatsbyJS is a web framework for static page website. It supports transfering markdown file to web page."),n.createElement("p",null,"I want to share my life, my thinking, my English level and all of mine with you. This letter is completed with the help of Google..."),n.createElement("p",null,"At last, I love you and I leave an egg for you, maybe you have found it XD. Do you like it?"),n.createElement("h3",null,"DO NOT JUDGE UI! I WILL DO IT BETTER IN FUTURE!!!!")),n.createElement("canvas",{width:e,height:t,id:"fireworks"}))}},3502:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var n=a(7294),i=a(1347);t.default=()=>n.createElement("main",{style:{}},n.createElement(i.default,null));const o=()=>n.createElement("title",null,"I Miss You")}}]);
//# sourceMappingURL=component---src-pages-i-miss-you-js-4a5416d10a447f52ed04.js.map