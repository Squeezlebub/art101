$("#submit").click(function(){
    
    $.ajax({
        url: "https://yesno.wtf/api",
        data: {},
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);
            $("#output").html(data.answer + "<br><img src=\""+data.image+"\"></img>");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    })
})



