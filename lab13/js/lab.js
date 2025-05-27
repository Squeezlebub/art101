//click listener for our button
$("#submit").click(function() {
     let output = "";
    //loop through numbers 1 through 200
    for (let i = 1; i <= 200; i++) {
        //if statements that add Fizz, Buzz, and Boom to the string based on what the numbers are divisible by
        if (i % 3 === 0) {
            output += "Fizz";
        }
        if (i % 5 === 0) {
            output += "Buzz";
        }
        if (i % 7 === 0) {
            output += "Boom";
        }
        if (!output) {
            output = i;
        }
        //output our string
         $("#output").append("" + output + "<br>");
        output = "";
    };   
    });

