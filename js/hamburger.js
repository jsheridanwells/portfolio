'use strict';

$('.menu-toggle').click(() => {

  $('.menu-toggle').toggleClass('change');
  $('.nav-menu').toggleClass('show');

});

$('.nav-link').click(() => {
	$('.menu-toggle').toggleClass('change');
	$('.nav-menu').toggleClass('show');
});