!function(){"use strict";window.jQuery=window.$=$;var e={};!function($){e._init=function(){e.startListeners()},e.startListeners=function(){let e=gsap.utils.toArray(".slide");document.getElementById("#group1"),document.getElementById("footer").clientHeight,e.shift(),document.querySelector("#group1");let t=gsap.timeline({scrollTrigger:{trigger:"#group1",end:"+=300%",start:"top top",scrub:!0,pin:!0},defaults:{ease:"none"}});e.forEach(((e,r)=>{1==r?t.fromTo(e,{xPercent:100,x:0},{xPercent:0}).fromTo(e.querySelector(".slide-wrapper"),{xPercent:-100,x:0},{xPercent:0},"<"):t.fromTo(e,{xPercent:-100,x:0},{xPercent:0}).fromTo(e.querySelector(".slide-wrapper"),{xPercent:100,x:0},{xPercent:0},"<")}))};setTimeout((async()=>{gsap.to("h1",{y:"0%",duration:.5})}),[2e3])}($),$().ready((function(){e._init()}))}();
//# sourceMappingURL=main-min.js.map