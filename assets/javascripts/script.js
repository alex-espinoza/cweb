$(document).ready(function() {
  $('#js-down-button').on('click', function() {
    $.scrollTo($('section.about-us'), {
      axis : 'y',
      duration : 500
    });
    return false;
  });

  $('#js-about-link').on('click', function() {
    $.scrollTo($('section.about-us'), {
      axis : 'y',
      duration : 500
    });
    return false;
  });

  $('#js-process-link').on('click', function() {
    $.scrollTo($('section.our-process'), {
      axis : 'y',
      duration : 500
    });
    return false;
  });

  $('.contact-us-button').on('click', function() {
    $.scrollTo($('section.get-started'), {
      axis: 'y',
      duration : 500
    });
    $('.contact-form').bPopup();
    return false;
  });

  $('#js-show-menu').click(function(){ setTimeout(function() {
    $('nav').removeClass('hide').addClass('show');}, 100);
    return false;
  });

  $('#js-close-link').click(function(){ setTimeout(function() {
    $('nav').removeClass('show').addClass('hide');}, 100);
    return false;
  });

  $(window).resize(function(){
     console.log('resize called');
     var width = $(window).width();
     if(width >= 960){

      $(window).scroll(function() {
        $('#fly-left').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+880) {
            $(this).addClass("slideRight");
          }
        });
      });

      $(window).scroll(function() {
        $('#fly-right').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+880) {
            $(this).addClass("slideLeft");
          }
        });
      });

      $(window).scroll(function() {
        $('#fly-left-double').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+760) {
            $(this).addClass("slideRight");
          }
        });
      });

      $(window).scroll(function() {
        $('#fly-right-double').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+760) {
            $(this).addClass("slideLeft");
          }
        });
      });

      $(window).scroll(function() {
        $('#button-animate').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+900) {
            $(this).addClass("slideUp");
          }
        });
      });

     }
     else{
      }
    })
    .resize();

  $('.get-started-button').click(function() {
    $('.contact-form').bPopup({
      positionStyle: 'fixed'
    });
  });

  $('.close-contact-form').click(function() {
    $('.contact-form').bPopup().close();
  });

  $('.contact-send-button').click(function() {
    validateContactForm();
  });

  function validateContactForm() {
    var contactData = {
      name: $('#contact-form-name').val(),
      email: $('#contact-form-email').val(),
      message: $('#contact-form-message').val()
    };

    if (contactData.name === '' || contactData.email === '' || contactData.message === '') {
      $('.contact-form-error').fadeIn();
    }
    else {
      $('.contact-send-button').prop('disabled', true);
      $('.close-contact-form').hide();
      $('.contact-send-button').attr('value', 'Sending...');

      $.ajax({
        type: 'POST',
        url: 'contact.php',
        data: contactData,
        success: function(){
          $('.before-send-form-container').fadeOut(function() {
            $('.close-contact-form').show();
            $('.after-send-form-container').fadeIn();
          });
        }
      });
    }
    return false;
  }
});
