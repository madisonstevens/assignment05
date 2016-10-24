function setFallTheme(){
    "use strict";
    $("nav").css("background-color","#FF8C00");
    $("body").css("background-color", "#800000");
};

function setSpringTheme(){
    "use strict";
    $("nav").css("background-color","#1C4905");
    $("body").css("background-color", "#D8ECC3");
};


$(document).ready(function () {
    "use strict";


$("#cab").click(function() {
    $(this).animate({left: "80%"},1000);
    });
    //this makes the cab move to the right of the screen
    
$("#ghostLink").click(function(){
    $("#ghost").fadeToggle(1500);  
    });
    //on "oooh" click, toggels ghost appearance
    
$("#foot").click(function() {
    $("footer").hide();
    });
    //on link click, hides footer
});