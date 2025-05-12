//add a button to our minor sections
$(".minor-section").append("<button class ='button-minor-section'>Make Special</button>"); 

//add a click listener
$(".button-minor-section").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).parent().toggleClass("special");
});