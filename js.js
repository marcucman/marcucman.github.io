$(function() {

  // SCROLL POSITION INDICATOR
  var pageHeight = $(document).height() - $(window).height();
  var scrollDistance = window.scrollY;
  var progress = Math.ceil(scrollDistance / pageHeight * 100);
  progress = progress + '%';
  $('#scroll-progress').animate({
    width: progress
  }, {
    duration: 1,
    easing: 'linear'
  });

  $(window).resize(function() {
    pageHeight = $(document).height() - $(window).height();
  });

  $(document).scroll(function() {
    scrollDistance = window.scrollY;
    progress = Math.ceil(scrollDistance / pageHeight * 100);
    progress = progress + '%';
    $('#scroll-progress').animate({
      width: progress
    }, {
      duration: 5,
      easing: 'linear'
    });
  });

  // SET CAROUSEL HEIGHT
  setCarouselHeight('#carousel1');
  setCarouselHeight('#carousel2');
  setCarouselHeight('#carousel3');

  function setCarouselHeight(id) {
    var slideHeight = [];
    $(id + ' .item').each(function() {
      // add all slide heights to an array
      slideHeight.push($(this).height());
    });

    // find the tallest item
    max = Math.max.apply(null, slideHeight);

    // set the slide's height
    $(id + ' .carousel-content').each(function() {
      $(this).css('height', max + 'px');
    });
  }

});
