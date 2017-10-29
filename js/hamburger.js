'use strict';
$('.menu-toggle').click(() => {

  $(this).toggleClass('change');
  $('.nav-menu').toggleClass('show');

});

$('.nav-link').click(() => {
	$('.nav-menu').toggleClass('show');
});