'use strict';
//smooth scrolling
$(document).ready(() => {
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, () => {
        window.location.hash = hash;
      });
    }
  });
});