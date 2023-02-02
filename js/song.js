  

  const title = ['Bohemian Rhapsody','Down Under','Karma Chameleon','Africa','Billie Jean', 'Losing My Religion', 'Take on me', 'Rock With You','Another One Bites the Dust'];
  const songs = ['Bohemian Rhapsody','Down Under','Karma Chameleon','Africa','Billie Jean','Losing My Religion','Take on Me', 'Rock With You','Another One Bites the Dust'];
  let timeout;
  let round = 1;
  $(".homebtn").hide();
  $(".song-button").hide();
  $("#endscreen").hide();
  let durationofsong = 10000;
  let usedSongs = [];
  var points = 0;
  const rounds = 5;
  var songindex = Math.floor(Math.random() * songs.length);
  const audio = document.querySelector('#audio');
  let correctAns = title[songindex];
  let htmlans;
  var timeleft = 5;
  $(document).ready(function() {
    var timerStart = setInterval(function(){
      if(timeleft <= 0){
        $("#time").hide();
        startGame(songindex);
        $(".song-button").show();
        clearInterval(timerStart);
        $(".option").click(function(){
          if(this.innerHTML === correctAns){
            clearTimeout(timeout);
            let timetaken = audio.currentTime;
            points += 150 - (timetaken * 5);
            console.log(timetaken.toFixed(2));
            $(this).addClass("correct");
            if(round < rounds){
              clearTimeout(timeout);
              setTimeout(newRound, 2000);
            }
            else {
              setTimeout(endGame, 2000);
            } 
            
          }
          else {
            $(this).addClass("wrong");
            clearTimeout(timeout);
            let options = document.getElementsByClassName("option");
            for (var i=0;i<options.length;i++){
              if (options[i].textContent === correctAns) {
                options[i].classList.add("correct");

              }

            }
            setTimeout(newRound, 2000);
          }
          //Disable other buttons when user clicks on one
          $(".option").not(this).prop("disabled",true);
        })
      }
      else {
          $("#time").html("Playing song in " + timeleft);
      }
      timeleft -= 1;
    }, 1000
    )




    function startGame(songindex) {
      if (round > rounds) {
        endGame();
        return true;
      }
      console.log(round);
      usedSongs.push(songs[songindex]);
      loadSong(songs[songindex]);
      audio.play();
      timeout = setTimeout(function(){
          audio.pause();
          if (round <= rounds) {
            $(".option").each(function() { //If user does not click any option within duration
              if ((this).innerHTML === correctAns) {
                $(this).addClass('correct');
              }
              else {
                $(this).prop('disabled',true);
              }
              setTimeout(newRound,2000);


            })
            console.log("Timeout expired!");
          }
      },
      durationofsong);

      //use algorithm to shuffle array and print out options with the correctAns included
      let options = [title[songindex]]; // create array called options with correct answer inside and push possible options so it can be printed to html
      while (options.length < 4) {
        let randomIndex = Math.floor(Math.random() * songs.length);
        if (!options.includes(title[randomIndex])) {
          options.push(title[randomIndex]);
        }
      }
  
      for (let i = options.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
  
      $("#btn1").text(options[0]);
      $("#btn2").text(options[1]);
      $("#btn3").text(options[2]);
      $("#btn4").text(options[3]);

      //Show options when loaded
      $(".song-button").show();
      
    }

    function loadSong(song) {
    
      audio.src = `../music/${song}.mp3`
  
    };


  
    function newRound() {
    console.log("new");
    round++;
    clearTimeout(timeout);
    // To get new and different song check if it is inside usedSongs array
    while(usedSongs.includes(songs[songindex])){
        songindex = Math.floor(Math.random() * songs.length);
    }
    // Change global variable correctAns
    correctAns = title[songindex];
    resetGame();
    startGame(songindex);
    return songindex;
  };
  
  //To reset to default
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

  function endGame() {
    resetGame();
    clearTimeout(timeout);
    $("#endscreen").text(`Points: ${points.toFixed()}`)
    $("#endscreen").show();
    $(".homebtn").show();
  };

  })
















  
