/**
* Template Name: Vesperr - v2.0.0
* Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }



const progress = document.querySelector('.progress-done');
setTimeout(() => {
  progress.style.opacity = 1;
  progress.style.width = progress.getAttribute('data-done') + '%';
}, 500)


const progress1 = document.querySelector('.progress-done-1');
setTimeout(() => {
  progress1.style.opacity = 1;
  progress1.style.width = progress1.getAttribute('data-done-1') + '%';
}, 500)

const progress2 = document.querySelector('.progress-done-2');
setTimeout(() => {
  progress2.style.opacity = 1;
  progress2.style.width = progress2.getAttribute('data-done-2') + '%';
}, 500)

const progress3 = document.querySelector('.progress-done-3');
setTimeout(() => {
  progress3.style.opacity = 1;
  progress3.style.width = progress3.getAttribute('data-done-3') + '%';
}, 500)

const progress4 = document.querySelector('.progress-done-4');
setTimeout(() => {
  progress4.style.opacity = 1;
  progress4.style.width = progress4.getAttribute('data-done-4') + '%';
}, 500)

const progress5 = document.querySelector('.progress-done-5');
setTimeout(() => {
  progress5.style.opacity = 1;
  progress5.style.width = progress5.getAttribute('data-done-5') + '%';
}, 500)

const progress6 = document.querySelector('.progress-done-6');
setTimeout(() => {
  progress6.style.opacity = 1;
  progress6.style.width = progress6.getAttribute('data-done-6') + '%';
}, 500)

const progress7 = document.querySelector('.progress-done-7');
setTimeout(() => {
  progress7.style.opacity = 1;
  progress7.style.width = progress7.getAttribute('data-done-7') + '%';
}, 500)

const progress8 = document.querySelector('.progress-done-8');
setTimeout(() => {
  progress8.style.opacity = 1;
  progress8.style.width = progress8.getAttribute('data-done-8') + '%';
}, 500)

const progress9 = document.querySelector('.progress-done-9');
setTimeout(() => {
  progress9.style.opacity = 1;
  progress9.style.width = progress9.getAttribute('data-done-9') + '%';
}, 500)


const progress10 = document.querySelector('.progress-done-10');
setTimeout(() => {
  progress10.style.opacity = 1;
  progress10.style.width = progress10.getAttribute('data-done-10') + '%';
}, 500)

const progress11 = document.querySelector('.progress-done-11');
setTimeout(() => {
  progress11.style.opacity = 1;
  progress11.style.width = progress11.getAttribute('data-done-11') + '%';
}, 500)

const progress12 = document.querySelector('.progress-done-12');
setTimeout(() => {
  progress12.style.opacity = 1;
  progress12.style.width = progress12.getAttribute('data-done-12') + '%';
}, 500)

const progress13 = document.querySelector('.progress-done-13');
setTimeout(() => {
  progress13.style.opacity = 1;
  progress13.style.width = progress13.getAttribute('data-done-13') + '%';
}, 500)

const progress14 = document.querySelector('.progress-done-14');
setTimeout(() => {
  progress14.style.opacity = 1;
  progress14.style.width = progress14.getAttribute('data-done-14') + '%';
}, 500)

const progress15 = document.querySelector('.progress-done-15');
setTimeout(() => {
  progress15.style.opacity = 1;
  progress15.style.width = progress15.getAttribute('data-done-15') + '%';
}, 500)

const progress16 = document.querySelector('.progress-done-16');
setTimeout(() => {
  progress16.style.opacity = 1;
  progress16.style.width = progress16.getAttribute('data-done-16') + '%';
}, 500)

const progress17 = document.querySelector('.progress-done-17');
setTimeout(() => {
  progress17.style.opacity = 1;
  progress17.style.width = progress17.getAttribute('data-done-17') + '%';
}, 500)




  

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 80;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });


//milestones
$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {
    
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }
  
  sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });


});



  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });

})(jQuery);