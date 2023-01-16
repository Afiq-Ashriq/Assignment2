
  $(".song-button").hide();
  $("#endscreen").hide();
  var points = 0
  var coins = 0
  const rounds = 5;
  var songindex = Math.floor(Math.random() * 4);
  const title = Math.floor(Math.random() * 4);
  const songs = ['caramelldansen','toothache','getlucky','nooneknows']
  const audio = document.querySelector('#audio');
  let correctAns = songs[songindex];
  var timeleft = 5;
  $(document).ready(function() {
    var timerStart = setInterval(function(){
      if(timeleft <= 0){
        $("#time").hide();
        let test = startGame(songindex);
        $(".song-button").show();
        clearInterval(timerStart);
        $(".option").click(function(){
          if(this.innerHTML === correctAns){
            let timetaken = audio.currentTime;
            $(this).addClass("correct");
            if(round < rounds){
              points += 150*timetaken;
              coins = points * 0.10;
              console.log(timetaken.toFixed(2));
              clearTimeout(test);
              var songindex = setTimeout(newRound, 2000);
            } else {
              setTimeout(resetGame,3000);
              $("#startbtn").hide()
              setTimeout($("#endscreen").text(points),3000);
              setTimeout($("#endscreen").text(coins.toFixed()),3000);
              $("#endscreen").show();
            }
            
          }
          else {
            clearTimeout(test);
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


    function startGame(songindex) {
      loadSong(songs[songindex]);
      audio.play();
      let timeoutId = setTimeout(function(){
          audio.pause();
      },
      10000);
      let opt1 = Math.floor(Math.random() * 4);
      $("#btn1").text(songs[opt1]);
      let opt2 = Math.floor(Math.random() * 4);
      $("#btn2").text(songs[opt2]);
      let opt3 = Math.floor(Math.random() * 4);
      $("#btn3").text(songs[opt3]);
      let opt4 = Math.floor(Math.random() * 4);
      $("#btn4").text(songs[opt4]);
      
      return timeoutId;
    }

    function loadSong(song) {
    
      audio.src = `../music/${song}.mp3`
  
    };


    let round = 1;
    function newRound() {
    let songindex = Math.floor(Math.random() * 4);
    round++;
    resetGame();
    startGame(songindex);
    $(".song-button").show();
    return songindex;
  };
  
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
  };

  })













  
