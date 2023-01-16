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
  $(".song-button").hide();
  $("#endscreen").hide();
  var points = 0
  const rounds = 5;
  let songindex = Math.floor(Math.random() * 4);
  const title = Math.floor(Math.random() * 4);
  const songs = ['caramelldansen','toothache','getlucky','nooneknows']
  const audio = document.querySelector('#audio');
  let correctAns = songs[songindex];
  var timeleft = 5;
  $("#startbtn").click(function() {
    var timerStart = setInterval(function(){
      if(timeleft <= 0){
        $("#time").hide();
        startGame();
        $(".song-button").show();
        clearInterval(timerStart);
        $(".option").click(function(){
          if(this.innerHTML === correctAns){
            $(this).addClass("correct");
            if(round < rounds){
              points += 150;
              setTimeout(newRound, 2000);
            } else {
              setTimeout(resetGame,3000);
              $("#startbtn").hide()
              setTimeout($("#endscreen").text(points),3000);
              $("#endscreen").show();
            }
            
          }
          else {
            $(this).addClass("wrong");
            $("#btn4").addClass("correct");
            setTimeout(newRound, 2000);
          }
          $(".option").not(this).prop("disabled",true);
        })
      }
      else {
          $("#time").html(timeleft);
      }
      timeleft -= 1;
    }, 1000
    )


    function startGame() {
      loadSong(songs[songindex]);
      playSong();
      let opt1 = Math.floor(Math.random() * 4);
      $("#btn1").text(songs[opt1]);
      let opt2 = Math.floor(Math.random() * 4);
      $("#btn2").text(songs[opt2]);
      let opt3 = Math.floor(Math.random() * 4);
      $("#btn3").text(songs[opt3]);
      let opt4 = Math.floor(Math.random() * 4);
      $("#btn4").text(songs[opt4]);
    }

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
    };

  })


  let round = 1;
  function newRound() {
  round++;
  resetGame();
  selectNewSong();
  startGame();
  $(".song-button").show();
}

function resetGame() {
  audio.src = ""
  $(".song-button").hide();
  $(".option").prop("disabled",false);
  $(".option").removeClass("correct");
  $(".option").removeClass("wrong");
  $("#btn1").text("");
  $("#btn2").text("");
  $("#btn3").text("");
  $("#btn4").text("");
}





  document.getElementsByClassName("song-button").addEventListener("submit",function(event){
    event.preventDefault();
  })










  
