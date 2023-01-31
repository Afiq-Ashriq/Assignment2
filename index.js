function getCookie(){
    alert(document.cookie);
}

console.log(getCookie());

var difficulty = null;

$(".btn").click(function() {
    difficulty = $(this).val();
    $(".btn").not(this).addClass('highlight')
    console.log(difficulty);
})






