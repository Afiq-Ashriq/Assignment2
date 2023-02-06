function getCookie(){
    alert(document.cookie);
}



var difficulty = null;

$(".diffbtn").click(function() {
    $(".diffbtn").css("color", "whitesmoke");
    $(this).css("color", "red");

    difficulty = $(this).val();
    $(".diffbtn").not(this).addClass('highlight');
    $("#diffmsg").text(`You have selected ${difficulty}`);
    $("#diffmsg").fadeIn().delay(2000).fadeOut();
    console.log(difficulty);
    sessionStorage.setItem("difficulty",difficulty);
})






