//click listener
$("#submit").click(function(){
    let input = $("#input").val().trim();
    //function to obtain our bending style based on name length
    function sortInput(input){
    //create our array
        let bender=["Water", "Earth", "Fire", "Air"];
    
        //return an element from the array based on the length of the inputted name
        return bender[(input.length)%4];
    };
//conditional for outputting the correct information
if(input){
    $("#output").html("<p>Your bending style is " +sortInput(input)+"!</p>");
}
else {
    $("#output").html("<p>You need to enter a name.</p>");
}
});

