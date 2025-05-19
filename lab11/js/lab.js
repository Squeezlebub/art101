//This is a simple Javascript/JQuery gets a value from an input field and outputs a modified version
//Author: Ben Graham 
//Date: 2025

//sort the String input
function sortString(inputString) {

return inputString.split('').sort().join('');
}

//add a click listener
$("#submit").click(function(){
    //get the input field value
    const userName = $("#user-name").val()
    //sort the username
    userNameSorted = sortString(userName)
    //append a new div to our output
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>')
});









