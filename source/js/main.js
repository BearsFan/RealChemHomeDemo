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
    slides.shift(); // leave the first slide alone (remove it from the Array)
    gsap.set(slides, {xPercent: -100, x: 0});
    let section = document.querySelector("#group1"),
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#group1",
          start: "top top",
          end: "max",
          scrub: true,
          pin: true,
          pinSpacing: false,
          //anticipatePin: 1
        },
        defaults: {ease: "none"}
      });
    slides.forEach((slide, i) => {
      if ( i == 1) {
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
      else {
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