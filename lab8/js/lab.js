//declare an array of numbers
let arr = [1, 2, 3, 4, 5];

//square a parameter num
function square(num) {
   return num * num 
}

//apply the function square to each element of our array
arr.map(square);

//do the same but using an anonymous function
arr.map(function(num){
    return num * num;});

//declare the variable mapResults with the output of our function   
let mapResults = arr.map(square);

//Task X: Output the result with JQuery
$("#output").append(mapResults.join(" "));