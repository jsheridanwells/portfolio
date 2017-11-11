'use strict';

$('.toggle-more-sm').click(() => {
  $('.about-more').slideDown();
  $('.toggle-more-sm').css({'display' : 'none'});
});

$('.toggle-more-lg').click(() => {
  $('.about-more').slideDown();
  $('.toggle-more-lg').css({'display' : 'none'});
});
