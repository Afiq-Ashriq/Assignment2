$(".alert").hide();

$("#fbsubmit").on("click", function(e){
    e.preventDefault();
    $("#fbname").val("");
    $("#fbemail").val(""); 
    $("#fbtextarea").val("");

    $(".alert").show();
    $(".alert").fadeIn().delay(3000).fadeOut();
})
