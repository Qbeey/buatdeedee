/*===================services=========================*/
$(function() {
  new WOW().init();  
});
/*===================magnific pop up=========================
$(function() {
    $("#gallery").magnificPopup({
        delegate: 'a',
        type: 'image',  
    });
});*/

/*===================owl=========================*/
$(function() {
    $("#portofolio-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            0 : {
                items : 1  
            },
            480 : {
                items : 2
            },
            768 : {
                items : 3
            },
            992 : {
                items : 3
            },
        }
        
    });
});
/*==========slick=============*/
$(document).ready(function() {
  $(".testimonial-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: $(".testimonial-carousel-controls .prev"),
    nextArrow: $(".testimonial-carousel-controls .next")
  });
});
/*================counter up=======================*/
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
/*===================navigation=========================
$(function() {
   $(window).scroll(function() {
      if($(this).scrollTop() < 61 ) {
          $("nav").removeClass("klik-navbar");
          $("#back-to-top").fadeOut();
         } else {
          $("nav").addClass("klik-navbar");
             $("#back-to-top").fadeIn();
         } 
   }); 
    
});*/
//=============smooth scrolling===============//

$(function() {
   $("a.smooth-scroll").click(function(event) {
       event.preventDefault();
       
       var section = $(this).attr("href");
       
       $('html, body').animate({
          scrollTop: $(section).offset().top - 50
       }, 1250, "easeInOutExpo");
   }); 
});

// Close mobile menu at click//
$(function() {
   $(".navbar-collapse ul li a").on("click touch", function() {
       $(".navbar-toggler").click();
   }); 
});
