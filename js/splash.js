'use strict';
$( document ).ready(function() {
    $(".splash-arrow").click(function() {
        $(".splash").slideUp("800", function() {
              $(".content").css({"display":"initial"});
         });
    });

    $(window).scroll(function() {
          $(window).off("scroll");
          $(".splash").slideUp("800", function() {
            $("html, body").animate({"scrollTop":"0px"},100);
            $(".content").css({"display":"initial"});
          });
     });
});