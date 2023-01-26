/* Test Account: test@icle.com test12345 */
$(".alert").hide()
const apikey = "63b70aaf969f06502871aa9e";
let login1 = false;
let accountemail = null;
let accountpw = null;

$("#signinsubmit").on("click",function(e){
    e.preventDefault();
    let email = $("#email-login").val();
    let password = $("#pw-login").val();

    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-ab73.restdb.io/rest/account",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        },
    }
    $.ajax(settings).done(function (response) {
        for (var i = 0; i < response.length; i++) {
            if (response[i].email == email && response[i].password == password)
            {
                login1 = true;
            }
        }
        if (login1 == true)
        {
            accountemail = email;
            accountpw = password;
            console.log("Log-in successful");
            //var date = new Date();
            //date.setTime(date.getTime() + (1 * 60 * 60 * 1000));
            //var expires = "expires=" + date.toUTCString();
            //document.cookie = "session_id=12345;" + expires + ";path=/";
            // Redirect to index page
            window.location.href = '../html/gamehome.html';
            // window.location.href = "#" //redirect user to "homepage" after successful login
        }
        else 
        {
            console.log("Log-in unsuccessful");
            $(".alert").fadeIn().delay(3000).fadeOut();
        }
    });
});



    // var settings = {
    // "async": true,
    // "crossDomain": true,
    // "url": "https://interactivedev-ab73.restdb.io/rest/account",
    // "method": "GET",
    // "headers": {
    //   "content-type": "application/json",
    //   "x-apikey": apikey,
    //   "cache-control": "no-cache"
    // }
    // }
  
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });