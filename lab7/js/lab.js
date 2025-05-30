//tells our function what to do and what parameters are passed to it
let sortUserName = function () {

    //create a variable assigned to user inputs
    var userName = window.prompt("What is your name?");

    //transform that string into an array, then sort it, then rejoin it and return the variable again
    console.log("userName assigned value " + userName);

    return userName.split('').sort().join('');
};

$("#output").append("Here is your better name: " + sortUserName() + "!");


