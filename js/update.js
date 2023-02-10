const apikey = "63b70aaf969f06502871aa9e";
$(".alert").hide();
let id = getCookie("name");
// $("#updatesubmit").prop("disable", true);

let settingsGet = {
    "async": true,
    "crossDomain": true,
    "url": `https://interactivedev-ab73.restdb.io/rest/account/${id}`,
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "x-apikey": apikey,
        "cache-control": "no-cache"
    },
}
$.ajax(settingsGet).done(function (response) {
    $("#email-update").val(response.email);
    $("#pw-update").val(response.password);


    let escore = response.easyscore;
    let mscore = response.mediumscore;
    let hscore = response.hardscore;
    let aone = response.achievement1;
    let atwo = response.achievement2;
    let athree = response.achievement3;

    // $("#updatesubmit").prop("disable", false);

    $("#updatesubmit").on("click", function (e) {
        e.preventDefault();
        let email = $("#email-update").val();
        let password = $("#pw-update").val();
    
        let existingemail = [];
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
          updateForm(id, email, password, escore, mscore, hscore, aone, atwo, athree);
          }
        });
        
    });
});




function updateForm(id, email, pw, escore, mscore, hscore, aone, atwo, athree) {
    var jsondata = {"email": email, "password": pw, "easyscore": escore, "mediumscore": mscore, "hardscore": hscore,"achievement1": aone,"achievement2": atwo,"achievement3": athree};
    let settingsPut = {
        "async": true,
        "crossDomain": true,
        "url": `https://interactivedev-ab73.restdb.io/rest/account/${id}`,
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": apikey,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
            $("#updatesubmit").prop("disabled", true);
        }
      
    };
    $.ajax(settingsPut).done(function (response) {
        console.log("success");
    });
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }