//import $ from "jquery";

window.jQuery = window.$ = $; 


// Main JS file

var ME = {};

(function($) {

	ME._init = function() {	    
    ME.startListeners();  
	}
  
  ME.startListeners = function() {     
    
     let container = document.getElementById("#group1");    
    
      gsap.utils.toArray("#group1").forEach(section => {
      	
        let tl = gsap.timeline({
      			scrollTrigger: {
      				trigger: section,
      				start: "top top",
              // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
      				end: () => "+=" + section.offsetWidth , 
              x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      				scrub: true,
      				pin: true,
              anticipatePin: 1
      			},
      			defaults: {ease: "none"}
      		});
          
        let scrollTween2 = tl.fromTo(section.querySelector("#slide2 .slide-wrapper"), {xPercent: 100, x: 0}, {xPercent: 0}, 0);
        let scrollTween3 = tl.fromTo(section.querySelector("#slide3 .slide-wrapper"), {xPercent: 100, x: 0}, {xPercent: 0}, 0);
          
      	// animate the container one way...
      	//tl.fromTo(section.querySelector("#slide2"), { xPercent: -100, x: 0}, {xPercent: 0})
      	  // ...and the image the opposite way (at the same time)
      	  //.fromTo(section.querySelector("#slide2 .slide-wrapper"), {xPercent: 100, x: 0}, {xPercent: 0}, 0);
          
      	//tl.fromTo(section.querySelector("#slide3"), { xPercent: 100, x: 0}, {xPercent: 0})
      	  // ...and the image the opposite way (at the same time)
      	 // .fromTo(section.querySelector("#slide3 .slide-wrapper"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
         
        tl.fromTo("#slide2", {
           xPercent: -100, 
           x: 0,
           scrollTrigger: {
             trigger: "#slide2",
             containerAnimation: scrollTween2,
             start: "top top",
           }
         }, 
         {
           xPercent: 0
         }
        );
    
        tl.fromTo("#slide3", {
           xPercent: -100, 
           x: 0,
           scrollTrigger: {
             trigger: "#slide3",
             containerAnimation: scrollTween3,
             start: "top top",
           }
         }, 
         {
           xPercent: 0
         }
        );
          
      });
    
  	}
    

    
    const animateText = () => {
        setTimeout(async () => {
           gsap.to("h1", {y: "0%", duration: 0.5})
           //gsap.to(".introText", {y: "0%", duration: 0.4, delay: 0.8})  
        }, [2000])
    }
    
    animateText();    
  

})($);

$().ready(function() {
	ME._init(); 
});



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });