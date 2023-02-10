const apikey = "63b70aaf969f06502871aa9e";

let id = getCookie("name");
let achievementone = false;
let achievementtwo = false;
let achievementthree = false;

$(".achone").hide();
$(".achtwo").hide();
$(".achthree").hide();

$(".achonelocked").show();
$(".achtwolocked").show();
$(".achthreelocked").show();

$(document).ready(function(){
    let settings = {
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
    $.ajax(settings).done(function (response) {
        
        achievementone = response["achievement1"];
        achievementtwo = response["achievement2"];
        achievementthree = response["achievement3"];

        if (achievementone == true)
        {
            $(".achone").show();
            $(".achonelocked").hide();
        };
        if (achievementtwo == true)
        {
            $(".achtwo").show();
            $(".achtwolocked").hide();
        };
        if (achievementthree == true)
        {
            $(".achthree").show();
            $(".achthreelocked").hide();
        };
        if (achievementthree != true && achievementtwo != true && achievementone != true)
        {
            $(".achievementblock").hide();
        }
    });
})

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