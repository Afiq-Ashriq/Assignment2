/* Test Account: test@icle.com test12345 */
$(".alert").hide()
const apikey = "63b70aaf969f06502871aa9e";
let login = false;
let accountemail = null;
let accountpw = null;

let accountdata = {
    "login" : login,
    "email" : accountemail,
    "password" : accountpw
};

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
            var userid = response[i]._id
            console.log(response[i]._id)
            if (response[i].email == email && response[i].password == password)
            {
                accountdata['login'] = true;
            }
        }
        if (accountdata['login'] == true)
        {
            accountdata['email'] = email;
            accountdata['password'] = password;
            console.log("Log-in successful");
            console.log(accountdata);
            var date = new Date();
            date.setTime(date.getTime() + (1 * 60 * 60 * 1000));
            var expires = "expires=" + date.toUTCString();
            document.cookie = "name" + "=" + userid + ";" + expires + ";path=/";
            // Redirect to index page
            window.location.href = '../html/gamehome.html';
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