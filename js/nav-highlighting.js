'use strict';

var navHighlighter = function(){

  window.addEventListener('scroll', () => {
    let buffer = 100;

    let aboutTop = $('#about').offset().top - buffer;
    let techTop = $('#tech').offset().top - buffer;
    let projectsTop = $('#projects').offset().top - buffer;
    let contactTop = $('#contact').offset().top - buffer;
    let top = $(window).scrollTop();

    if (top >= aboutTop && top <= techTop) {
      $('li').removeClass('active');
      $('#about-nav').addClass('active');
    } else if (top >= techTop && top <= projectsTop) {
      $('li').removeClass('active');
      $('#tech-nav').addClass('active');
    } else if (top >= projectsTop && top <= contactTop) {
      $('li').removeClass('active');
      $('#projects-nav').addClass('active');
    } else if (top >= contactTop) {
      $('li').removeClass('active');
      $('#contact-nav').addClass('active');
    }

  });

}();
