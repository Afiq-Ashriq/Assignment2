const apikey = "63b70aaf969f06502871aa9e";
$(".alert").hide()

$("#signupsubmit").on("click",function(e){
    e.preventDefault();
    let email = $("#email-signup").val();
    let password = $("#pw-signup").val();
    let confirmpassword = $("#cpw-signup").val();
    let existingemail = [];

    if (password != confirmpassword)
    {
        $("#password-issue").fadeIn().delay(3000).fadeOut();
    }
    else
    {
        let newpassword = password;
        let settingsGet = {
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
        $.ajax(settingsGet).done(function (response) {
            for (var i = 0; i < response.length; i++) 
            {
                let item = response[i].email;
                existingemail.push(item);
            }
        
        if (existingemail.includes(email))
        {  
            $("#email-issue").fadeIn().delay(3000).fadeOut();
        }
        else
        {
            let newaccountdata = {
                "email" : email,
                "password" : newpassword,
                "easyscore" : 0,
                "mediumscore" : 0,
                "hardscore" : 0,
                "achievement1" : false,
                "achievement2" : false,
                "achievement3" : false,

            };
            let settingsPost = {
                "async": true,
                "crossDomain": true,
                "url": "https://interactivedev-ab73.restdb.io/rest/account",
                "method": "POST",
                "headers": {
                  "content-type": "application/json",
                  "x-apikey": apikey,
                  "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(newaccountdata),
                "beforeSend": function(){
                    $("#signupsubmit").prop( "disabled", true);
                }
              
            };
            $.ajax(settingsPost).done(function (response) {
                window.location.href = '../html/login.html';
            });

        }
        });
    }
});