$(document).ready(function() {
  var videobackground = new $.backgroundVideo($('.video-container'), {
    "align": "centerXY",
    "width": 1980,
    "height": 1080,
    "path": "assets/videos/",
    "filename": "croissant",
    "types": ["mp4","webm"]
  });

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

  // $(window).scroll(function() {
  //   var scrollTop = $(window).scrollTop();
  //   if (scrollTop >= 925) {
  //     $('#js-nav-slide').show();
  //   }
  //   else if (scrollTop < 925) {
  //     $('#js-nav-slide').hide();
  //   }
  // });

  $(window).scroll(function() {
    $('#fly-left').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+660) {
        $(this).addClass("slideRight");
      }
    });
  });

  $(window).scroll(function() {
    $('#fly-right').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+660) {
        $(this).addClass("slideLeft");
      }
    });
  });

  $(window).scroll(function() {
    $('#fly-left-double').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+540) {
        $(this).addClass("slideRight");
      }
    });
  });

  $(window).scroll(function() {
    $('#fly-right-double').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+540) {
        $(this).addClass("slideLeft");
      }
    });
  });

  $(window).scroll(function() {
    $('#button-animate').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+750) {
        $(this).addClass("slideUp");
      }
    });
  });
});
