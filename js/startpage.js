$("#gameplaybtn").on("click",function(e){
    if ($(".popupdisplay").css("display") == "none")
    {
        $(".popupdisplay").css("display", "block");
    }
});

$("#popupclose").on("click",function(e){
    $(".popupdisplay").css("display", "none");
})


