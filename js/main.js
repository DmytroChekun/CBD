// Navbar script
$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 100) {
    $('.navbar-wrap').addClass('nav-scroll-script');
    if (window.innerWidth <= 1200) {
    $(".navbar__nav-section").addClass('nav-scroll-script--bottom-nav');
  }
    } else {
    $('.navbar-wrap').removeClass('nav-scroll-script');
    $(".navbar__nav-section").removeClass('nav-scroll-script--bottom-nav');
    }
  });

// About tabs
let tab = function() {
  let tabName;
  $(".about__bar-item").on('click', function(){
      $(".about__bar-item").removeClass("is-active");
      $(this).addClass("is-active");
      tabName = $(this).attr('tab');
      selectTab(tabName);
  });
function selectTab(tabName){
    $(".about__content-box").removeClass("is-active-content");
    $("#" + tabName).addClass("is-active-content");
}
}
tab();

// Slick-Slider
$(document).ready(function() {
  $('.products__slider').slick({
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 400,
  easing: 'ease',
  arrows: true,
  prevArrow: $('.products__arrow-left'),
  nextArrow: $('.products__arrow-right'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
})
$('.testimonals').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 3500,
  fade: true,
  cssEase: 'linear',
  prevArrow: $('.testimonals__arr-prev'),
  nextArrow: $('.testimonals__arr-next')
});
});

// Questions tabs
$(document).ready(function() {
	$('.questions__question').on('click', f_acc);
});
 
function f_acc(){
  $('.questions__answer').not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
}




// Smooth-scroll
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();
      var target = this.hash;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop':  $target.offset().top //no need of parseInt here
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});


// arrowscr
let arrow = "M0.327454 11.727H45.3275M45.3275 11.727L33.8621 1.72697M45.3275 11.727L33.8621 21.727";
let line = "M0.735229 1.70964L45.6519 1.70964L32.9503 1.70964";
$(function(){
  $('.arr-anim').hover(function() {
    $(this).find(".line-transform").attr('d', arrow);
    $(this).find(".line").css("margin-bottom", '20px');
  }, function() {
    $(".line-transform").attr('d', line);
    $(".line").css("margin-bottom", '0px');
  })
})



$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  if ($('#header').isInViewport()) {
    $(".nav-header").css("background-color", 'rgba(53, 85, 41, 0.568)');
  } else {
    $(".nav-header").css("background-color", 'transparent');
  }

  if ($('#products').isInViewport()) {
    $(".nav-products").css("background-color", 'rgba(53, 85, 41, 0.568)');
  } else {
    $(".nav-products").css("background-color", 'transparent');
  }

  if ($('#questions').isInViewport()) {
    $(".nav-questions").css("background-color", 'rgba(53, 85, 41, 0.568)');
  } else {
    $(".nav-questions").css("background-color", 'transparent');
  }

  if ($('#footer').isInViewport()) {
    $(".nav-footer").css("background-color", 'rgba(53, 85, 41, 0.568)');
  } else {
    $(".nav-footer").css("background-color", 'transparent');
  }
});