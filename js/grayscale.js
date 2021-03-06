$(window).on('scroll', function () {
        var LvlTrig = 0 + $(window).scrollTop() / 700;
        if (LvlTrig > 0.3) {
            $('#commuterow').fadeIn({queue: false, duration: 'slow'});
            $('#commuterow').animate({ top: "60%" }, 'slow');
            $('#builttolast').fadeIn({queue: false, duration: 'slow'});
            $('#builttolast').animate({ top: "-10%" }, 'slow');
            $('#hydration').fadeIn({queue: false, duration: 'slow'});
            $('#hydration').animate({ top: "20%" }, 'slow');
        }
});

// $(".circlewhite").click(function(){
//     console.log("memes");
//     $('.img').addClass('new-masthead2').removeClass('masthead2')
// });
$(function() {
    $('.circlewhite').on('click', function() {
        $('.masthead2').css('background-image', 'url("img/whiteheader.png")');
    });
    $('.circlerose').on('click', function() {
        $('.masthead2').css('background-image', 'url("img/roseheader.png")');
    });
    $('.circlerosemobile').on('click', function() {
        $('.masthead2').css('background-image', 'url("img/roseheader.png")');
    });
    $('.circlewhitemobile').on('click', function() {
        $('.masthead2').css('background-image', 'url("img/whiteheader.png")');
    });
});



(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
