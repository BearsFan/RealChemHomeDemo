import $ from "jquery";
import 'slick-carousel';

window.jQuery = window.$ = $; 


// Main JS file

var ME = {};

(function($) {

	ME._init = function() {	    
    ME.startListeners();      
	}
  
	ME.startListeners = function() {         
    
    gsap.utils.toArray(".parallax").forEach(section => {
    	let tl = gsap.timeline({
    			scrollTrigger: {
    				trigger: section,
    				start: "top top",
            // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
    				end: () => "+=" + section.offsetWidth, 
    				scrub: true,
    				pin: true,
            anticipatePin: 1
    			},
    			defaults: {ease: "none"}
    		});
    	// animate the container one way...
    	tl.fromTo(section.querySelector("#slide2"), { xPercent: 100, x: 0}, {xPercent: 0})
    	  // ...and the image the opposite way (at the same time)
    	  .fromTo(section.querySelector("#slide2 .slide-wrapper"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
    });
    
	}
  

  
	

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