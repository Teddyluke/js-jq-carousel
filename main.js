$(document).ready( function () {
  var nextButton = $(".next");
  var prevButton = $(".prev");
  nextButton.click(function () {
    var imgActive = $(".slider-wrapper img.active");
    imgActive.removeClass("active");
    if (imgActive.hasClass("last") == true) {
      $(".slider-wrapper img.first").addClass("active");
    } else {
      imgActive.next().addClass("active");
    }
    var marker = $(".nav i.active");
    marker.removeClass("active");
    if (marker.hasClass("last") == true) {
      $(".nav i.first").addClass("active");
    } else {
      marker.next().addClass("active");
    }
  })
  prevButton.click(function () {
    var imgActive = $(".slider-wrapper img.active");
    imgActive.removeClass("active");
    if (imgActive.hasClass("first") == true) {
      $(".slider-wrapper img.last").addClass("active");
    } else {
      imgActive.prev().addClass("active");
    }
    var marker = $(".nav i.active");
    marker.removeClass("active");
    if (marker.hasClass("first") == true) {
      $(".nav i.last").addClass("active");
    } else {
      marker.prev().addClass("active");
    }
  })
});
