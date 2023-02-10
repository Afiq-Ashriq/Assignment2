// function getCookie(){
//     alert(document.cookie);
// }


let difficulty = "Easy";
var genre = null;

$(".diffbtn").click(function() {

    $(".diffbtn").css("color", "whitesmoke");
    $(this).css("color", "rgb(255, 74, 19)");

    difficulty = $(this).val();
    $(".diffbtn").not(this).addClass('highlight');
    $("#diffmsg p").text(`${difficulty} is selected`);
    $("#diffmsg p").fadeIn().delay(2000).fadeOut();
    sessionStorage.setItem("difficulty",difficulty);
    console.log(difficulty);

})





$(".gbtn").click(function(){

    genre = $(this).text();
    console.log(genre);
    sessionStorage.setItem("genre",genre)

})










