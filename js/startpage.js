$("#gameplaybtn").on("click",function(e){
    if ($(".popupdisplay").css("display") == "none")
    {
        $(".popupdisplay").css("display", "block");
    }
    console.log("1");
});

$("#popupclose").on("click",function(e){
    $(".popupdisplay").css("display", "none");
})


