$(function() {


function scrollPane() {
  $('.wrapper').jScrollPane();
};

scrollPane();

$(window).resize(function(){
  scrollPane();
});
//-------------------slider-press-----------------------------
var swiper = new Swiper('.press__container', {
  slidesPerView: 3,
  spaceBetween: 35,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});

//-------------------slider-press-end----------------------------

$('.schedule__days-item').click(function(e) {
  e.preventDefault();
  if( $(this).hasClass('active') ) {
    return;
  }

  $('.schedule__days-item.active').removeClass('active');
  $(this).addClass('active');
});


$('.nav-toggle').click(function() {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('header__nav-active');
});

var swiper = new Swiper('.header-slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
    });

var swiper2 = new Swiper('.atrium-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

var swiper3 = new Swiper('.reviews-slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
    });

var swiper4 = new Swiper('.schedule-slider', {
      slidesPerView: 10,
      spaceBetween: 2,
      slidesPerGroup: 10,
      breakpoints: {
    // when window width is <= 320px
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 5
    },
    // when window width is <= 480px
    992: {
      slidesPerView: 5,
      slidesPerGroup: 5
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    },
      loop: true,
      pagination: {
        clickable: true,
      },

      navigation: {
        nextEl: '.first',
        prevEl: '.second',
      },
     
    });

  // var subscriptionSlider = new Swiper ('.subscription-slider', {
  //   // slidesPerView: 3,
  //   slidesPerView: 'auto',
  //   spaceBetween: -100,
  //   centeredSlides: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });




	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})




    $('ul.tabs-2 li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs-2 li').removeClass('current-2');
    $('.tab-content-2').removeClass('current-2');

    $(this).addClass('current-2');
    $("#"+tab_id).addClass('current-2');
  })


var flipContainer = $('.flipster'),
    flipItemContainer = flipContainer.find('.flip-items'),
    flipItem = flipContainer.find('.subscription-slider__item');

flipContainer.flipster({
  itemContainer: flipItemContainer,
  itemSelector: flipItem,
  loop: true,
  style: 'flat-spread',
  spacing: -0.2,
  start: 'center',
  scrollwheel: false,
  nav: 'after',
  buttons: 'custom',
  buttonPrev: $('.my-prev'),
  buttonNext: $('.my-next'),
});



////////////////Accordion////////////
var acc = $('.accordion__top');
  var accContent = $('.accordion__content');
  $('.accordion__title.active').next().slideDown(500);
  acc.on('click', function(e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp(500);
    }
    else {
      $(this).addClass('active');
      accContent.not($(this).next()).slideUp(500);
      acc.not($(this)).removeClass('active');
      $(this).next().slideDown(500);
    }
  });


  $("h4").click(function(){
  $(this).toggleClass('activ');
});



$('.example2').hide().before('');
    $('a#toggle-example2').click(function() {
        $('.example2').slideToggle(1000);
        return false;
    });

  $(function() {
  $('.blog__wrapper, .advantages__item').matchHeight();
});

$('.example3').hide().before('');
    $('a#toggle-example3').click(function() {
        $('.example3').slideToggle(1000);
        return false;
    });


jQuery.validator.addMethod("phoneno", function(phone_number, element) {
      return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
    }, "Введите Ваш телефон");

$('.modal').popup({ transition: 'all 0.3s' });

$(".callback-form").validate({
  messages: {
    name: "Введите Ваше имя",
    phone: "Введите Ваш телефон",
  },
  rules: {
    "phone": {
      required: true,
      phoneno: true
    }
  },
  submitHandler: function(form) {
    var t = {
      name: jQuery(".callback-form").find("input[name=name]").val(),
      phone: jQuery(".callback-form").find("input[name=phone]").val(),
      subject: jQuery(".callback-form").find("input[name=subject]").val()
    };
    ajaxSend('.callback-form', t);
  }
});

$(".enroll-form").validate({
  messages: {
    name: "Введите Ваше имя",
    phone: "Введите Ваш телефон",
  },
  rules: {
    "phone": {
      required: true,
      phoneno: true
    }
  },
  submitHandler: function(form) {
    var t = {
      name: jQuery(".enroll-form").find("input[name=name]").val(),
      phone: jQuery(".enroll-form").find("input[name=phone]").val(),
      subject: jQuery(".enroll-form").find("input[name=subject]").val()
    };
    ajaxSend('.enroll-form', t);
  }
});



$('.modal').popup({ transition: 'all 0.3s' });

//$(".modal").reset();

$(".modal .callback_close").click(function(){
  var form = $(this).parent().find("form"); 
  $(form).trigger('reset');
})



$('.partner').popup({ transition: 'all 0.3s' });

//$(".modal").reset();

$(".partner .callback-2_close").click(function(){
  var form = $(this).parent().find("form"); 
  $(form).trigger('reset');
})



$(".partner-form").validate({
  messages: {
    name: "Введите Ваше имя",
    phone: "Введите Ваш телефон",
  },
  rules: {
    "phone": {
      required: true,
      phoneno: true
    }
  },
  submitHandler: function(form) {
    var t = {
      name: jQuery(".partner-form").find("input[name=name]").val(),
      phone: jQuery(".partner-form").find("input[name=phone]").val(),
      subject: jQuery(".partner-form").find("input[name=subject]").val()
    };
    ajaxSend('.partner-form', t);
  }
});


function ajaxSend(formName, data) {
  jQuery.ajax({
    type: "POST",
    url: "sendmail.php",
    data: data,
    success: function() {
      $(".modal").popup("hide");
      $("#thanks").popup("show");
      setTimeout(function() {
        $(formName).trigger('reset');
      }, 2000);
    }
  });
}



$(".ask-form").validate({
  messages: {
    name: "Введите Ваше имя",
    phone: "Введите Ваш телефон",
  },
  rules: {
    "phone": {
      required: true,
      phoneno: true
    }
  },
  submitHandler: function(form) {
    var t = {
      name: jQuery(".ask-form").find("input[name=name]").val(),
      phone: jQuery(".ask-form").find("input[name=phone]").val(),
      subject: jQuery(".ask-form").find("input[name=subject]").val()
    };
    ajaxSend('.ask-form', t);
  }
});


$('input[type=tel]').mask('+7 (000) 000-00-00');



// $('.nav-list').on('click','a', function(event){
//     event.preventDefault();
//     var id = $(this).attr('href'),
//     top = $(id).offset().top;
//     $('body,html').animate({scrollTop: top -50}, 600);
//   });

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
        $(".header__nav").removeClass("header__nav-active");
        $(".nav-toggle").removeClass("active");
        $('html, body').animate({
          scrollTop: target.offset().top - $('.header').height()
        }, 1000, function() {
        });
      }
    }
  });

  var height = $('.header').innerHeight();
  $(window).scroll(function(){
    if($(this).scrollTop()>150){
      $('body').css('margin-top', height);
      $('.header').addClass('sticky');
    }
    else if ($(this).scrollTop()<150){
      $('body').css('margin-top', 0);
      $('.header').removeClass('sticky');
    }
  });


$(window).scroll(function() {

  var parallax = $(this).scrollTop();

  $('.parallax').css({
    'transform' : 'translate(0%, ' + parallax/20 + '%)'
  });
  
});

$(window).scroll(function() {

  var parallax = $(this).scrollTop();

  $('.parallax-thumb').css({
    'transform' : 'translate(0%, ' + parallax/20 + '%)'
  });
  
});

});
