/* Test Account: test@icle.com test12345 */

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
        for (var i = 0; i < response.length && i < limit; i++) {
            if (response[i].email == email && response[i].password == password)
            {
                login1 = true;
            }
        }
        if (login1)
        {
            accountemail = email;
            accountpw = password;
            console.log("Log-in successful");
        }
        else 
        {
            console.log("Log-in unsuccessful");
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