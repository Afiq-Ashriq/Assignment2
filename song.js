$(document).ready(function() {
    //what kind of interface we want at the start 
    const APIKEY = "63bf64bd969f06502871adbe";
    getsongs();


    //[STEP] 6
    //let's create a function to allow you to retrieve all the information in your students
    //by default we only retrieve 10 results
    function getsongs(limit = 10, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://assignment2-6397.restdb.io/rest/songs",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      //[STEP 8]: Make our AJAX calls
      //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
      //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
      $.ajax(settings).done(function(response) {
  
        let content = "";
  
          content = `${content}<tr id='${response[0]._id}'>
          <td>${response[0].songid}</td>
          <td>${response[0].songurl}</td>
          <td>${response[0].songname}</td>`
  
        
  
        //[STEP 9]: Update our HTML content
        //let's dump the content into our table body
        // $("#student-list tbody").html(content);
        $("#songs").html(content);
  
        // $("#total-students").html(response.length);
      });
  
  
    }
  
    //[STEP 10]: Create our update listener
    //here we tap onto our previous table when we click on update
    //this is a delegation feature of jquery
    //because our content is dynamic in nature, we listen in on the main container which is "#student-list". For each row we have a class .update to help 
  

    
  
  })
  

  $("#startbtn").click(function() {
    let songindex = Math.floor(Math.random() * 2);
    const title = Math.floor(Math.random() * 2);
    const songs = ['caramelldansen','toothache']
    const audio = document.querySelector('#audio');
    var timeleft = 5;
    var timerStart = setInterval(function(){
      if(timeleft <= 0){
        $("#time").hide();
        clearInterval(timerStart);
        loadSong(songs[songindex])
        playSong();
  
      }
      else {
          $("#time").html(timeleft);
      }
      timeleft -= 1;
    }, 1000
    )

  })






  //To get a random mp3 title and play it
  function loadSong(song) {
    
    audio.src = `music/${song}.mp3`

  };

  //To play the song
  function playSong() {
    audio.play();
    setTimeout(function(){
        audio.pause();
    },
    10000);
  }


  
