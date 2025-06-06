$("#submit").click(function(){
// Using the core $.ajax() method
let id = Math.ceil(Math.random()*1025);
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://pokeapi.co/api/v2/pokemon/"+id+"/",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        $("#output").html(data.name+" #"+data.id);
        $("#output").append("<br><img style='width:200px' src="+data.sprites.front_default+"></img>");
        $("#output").append("<br>"+data.types[0].type.name+" ");
        $("#output").append(data.types[1].type.name);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
});
});
    
