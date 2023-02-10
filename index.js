// function getCookie(){
//     alert(document.cookie);
// }


var genre = null;


$(".gbtn").each(function() {
    
    $(this).prop('disabled',true);
})

$(".diffbtn").click(function() {
    $(".gbtn").each(function() {
        $(this).prop('disabled',false);
    })
    $(".diffbtn").css("color", "whitesmoke");
    $(this).css("color", "rgb(255, 74, 19)");
    difficulty = $(this).val();
    $(".diffbtn").not(this).addClass('highlight');
    $("#diffmsg p").text(`${difficulty} is selected`);
    $("#diffmsg p").fadeIn().delay(2000).fadeOut();
    sessionStorage.setItem("difficulty",difficulty)
})







$(".gbtn").click(function(){

    genre = $(this).text();
    sessionStorage.setItem("genre",genre)

})










