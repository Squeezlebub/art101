$("#submit").click(function(){
    
    $.ajax({
        url: "https://yesno.wtf/api",
        data: {},
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);
            $("#output1").html(data.answer);
            $("#output2").html("<br><img src=\""+data.image+"\"></img>");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    })
})



