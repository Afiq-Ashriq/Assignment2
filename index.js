function getCookie(){
    alert(document.cookie);
}



var difficulty = null;
var genre = null;

$(".diffbtn").click(function() {
    $(".diffbtn").css("color", "whitesmoke");
    $(this).css("color", "rgb(255, 74, 19)");

    difficulty = $(this).val();
    $(".diffbtn").not(this).addClass('highlight');
    $("#diffmsg p").text(`${difficulty} is selected`);
    $("#diffmsg p").fadeIn().delay(2000).fadeOut();
    console.log(difficulty);
    sessionStorage.setItem("difficulty",difficulty);
})

$(".gbtn").click(function(){
    genre = $(this).text();
    console.log(genre);
    sessionStorage.setItem("genre",genre)

})






