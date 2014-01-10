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
});