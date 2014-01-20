$(document).ready(function() {
  var videobackground = new $.backgroundVideo($('.video-container'), {
    "align": "centerXY",
    "width": 1280,
    "height": 720,
    "path": "assets/videos/",
    "filename": "croissant",
    "types": ["mp4","webm"]
  });
});