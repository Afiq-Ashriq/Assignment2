const apikey = "63b70aaf969f06502871aa9e";
$(".alert").hide()

$("#signupsubmit").on("click",function(e){
    console.log("submitted");
    e.preventDefault();
    let email = $("#email-signup").val();
    let password = $("#pw-signup").val();
    let confirmpassword = $("#cpw-signup").val();
    let existingemail = [];

    if (password != confirmpassword)
    {
        console.log("password does not match");
        $("#password-issue").fadeIn().delay(3000).fadeOut();
    }
    else
    {
        let newpassword = password;
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
            for (var i = 0; i < response.length; i++) 
            {
                let item = response[i].email;
                existingemail.push(item);
            }
        });
        console.log(existingemail);
        
        if (existingemail.includes(email))
        {  
            console.log("email is not unique");
            $("#email-issue").fadeIn().delay(3000).fadeOut();
        }
        else
        {
            let newaccountdata = {
                "email" : email,
                "password" : newpassword,
                "coins" : 0
            };
            let settings = {
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
            $.ajax(settings).done(function (response) {
                console.log("Account successfully created");
            });

        }
    }
});