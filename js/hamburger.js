'use strict';

$('.menu-toggle').click(() => {
  $('.menu-toggle').toggleClass('change');

  if ($('.hamburger-nav-menu').is(':hidden')) {
    $('.hamburger-nav-menu').slideDown('slow');
  } else {
    $('.hamburger-nav-menu').slideUp('slow');
  }

});

$('.nav-link').click(() => {
	$('.menu-toggle').toggleClass('change');
	$('.hamburger-nav-menu').slideUp('slow');
});
