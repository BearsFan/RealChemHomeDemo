//import $ from "jquery";

window.jQuery = window.$ = $; 

// Main JS file

var ME = {};

(function($) {

	ME._init = function() {	    
    ME.startListeners();  
	}
  
  ME.startListeners = function() {         
    

    let slides = gsap.utils.toArray(".slide");
    
    let container = document.getElementById("#group1");
    
    let footerHeight = document.getElementById('footer').clientHeight;
         
    //gsap.set(slides, {xPercent: -100, x: 0});
    
    slides.shift(); // leave the first slide alone (remove it from the Array)
        
    let section = document.querySelector("#group1"),
      
    tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#group1",    
          end: "+=300%",          
          start: "top top",
          scrub: true,
          pin: true,

        },
        defaults: {ease: "none"}
    });
      
    slides.forEach((slide, i) => {
      if ( i == 1) { // check if first slide
        tl.fromTo(slide, {
          xPercent: 100,
          x: 0,
        }, {
          xPercent: 0,
        })
        .fromTo(slide.querySelector(".slide-wrapper"), {
          xPercent: -100,
          x: 0
        }, {
          xPercent: 0,
        }, "<");
      }
      else { // check if not first slide
        tl.fromTo(slide, {
          xPercent: -100,
          x: 0,
        }, {
          xPercent: 0,
        })
        .fromTo(slide.querySelector(".slide-wrapper"), {
          xPercent: 100,
          x: 0
        }, {
          xPercent: 0,
        }, "<");
      }
      
    });
    

  	}
    
   
    const animateText = () => {
        setTimeout(async () => {
           gsap.to("#slide1 h1", {y: "0%", opacity: "1",  duration: 0.5})
           gsap.to("#slide1 .content div", {y: "0%", opacity: "1", duration: 0.5, delay: 0.8})  
        }, [1000])
    }
    
    animateText();    
  

})($);

$().ready(function() {
	ME._init(); 
});

