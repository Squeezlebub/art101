// index.js - Javascript file for Lab 6: Arrays and Objects
// Author: Ben Graham
// Date: 28 April 2025

//create an array
let myTransport = [" walking", " bus", " car"];

//create an object
let myMainRide = {
make: "Ford",
model: "Taurus",
color: "rusty",
year: 1995,
age: function() {
    return 2025 - year;
    }
}

//output the array
document.writeln("Transport I use: " + myTransport +"<br>");

//output the object
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");