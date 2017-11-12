'use strict';

$('.toggle-more').click(() => {
  $('.about-more').slideDown();
  $('.toggle-more').css({'display' : 'none'});
});
