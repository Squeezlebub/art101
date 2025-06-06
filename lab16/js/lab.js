$("#submit").click(function(){
    
    $.ajax({
        url: "https://xkcd.com/info.0.json",
        data: {},
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);
            $("#output").html(data.month + data.year + data.title + "<br><img src=\""+data.img+"\"></img>");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    })
})
