const apikey = "63b70aaf969f06502871aa9e";

let id = getCookie("name");
$("#updatesubmit").prop("disable", true);

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

    console.log(response);

    let escore = response.easyscore;
    let mscore = response.mediumscore;
    let hscore = response.hardscore;
    let aone = response.achievement1;

    $("#updatesubmit").prop("disable", false);

    $("#updatesubmit").on("click", function (e) {
        e.preventDefault();
        let email = $("#email-update").val();
        let password = $("#pw-update").val();
    
        updateForm(id, email, password, escore, mscore, hscore, aone);
    });
});




function updateForm(id, email, pw, escore, mscore, hscore, aone) {
    var jsondata = {"email": email, "password": pw, "easyscore": escore, "mediumscore": mscore, "hardscore": hscore,"achievement1": aone};
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
        console.log(response);
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