'use strict';

$('.menu-toggle').click(() => {
  $('.menu-toggle').toggleClass('change');

  if ($('.nav-menu').is(':hidden')) {
    $('.nav-menu').slideDown('slow');
  } else {
    $('.nav-menu').slideUp('slow');
  }

});

$('.nav-link').click(() => {
	$('.menu-toggle').toggleClass('change');
	$('.nav-menu').slideUp('slow');
});


// $( "#clickme" ).click(function() {
//   $( "#book" ).slideDown( "slow", function() {
//     // Animation complete.
//   });
// });
