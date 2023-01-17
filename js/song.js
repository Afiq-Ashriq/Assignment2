
  $(".song-button").hide();
  $("#endscreen").hide();
  let usedSongs = []
  var points = 0
  var coins = 0
  const rounds = 5;
  var songindex = Math.floor(Math.random() * 8);
  const title = Math.floor(Math.random() * 8);
  const songs = ['caramelldansen','toothache','getlucky','nooneknows','africa','billiejean','livinonaprayer','takeonme']
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
              coins = points * 0.01;
              console.log(timetaken.toFixed(2));
              clearTimeout(test);
              setTimeout(newRound, 2000);
            } else {
              setTimeout(resetGame,3000);
              $("#startbtn").hide()
              setTimeout($("#endscreen").text(coins.toFixed()),3000);
              $("#endscreen").show();
            }
            
          }
          else {
            clearTimeout(test);
            $(this).addClass("wrong");
            let options = document.getElementsByClassName("option");
            for (var i=0;i<options.length;i++){
              if (options[i].textContent === correctAns) {
                options[i].classList.add("correct");
                break;
              }
            }
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
      usedSongs.push(songs[songindex]);
      loadSong(songs[songindex]);
      audio.play();
      let timeoutId = setTimeout(function(){
          audio.pause();
      },
      30000);
      //use algorithm to shuffle array and print out options with the correctAns included
      let options = [songs[songindex]]; // create array called options with correct answer inside and push possible options so it can be printed to html
      while (options.length < 4) {
        let randomIndex = Math.floor(Math.random() * 8);
        if (!options.includes(songs[randomIndex])) {
          options.push(songs[randomIndex]);
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
      
    }

    function loadSong(song) {
    
      audio.src = `../music/${song}.mp3`
  
    };


    let round = 1;
    function newRound() {
    // To get new and different song check if it is inside usedSongs array
    while(usedSongs.includes(songs[songindex])){
        songindex = Math.floor(Math.random() * 8);
    }
    // Change global variable correctAns
    correctAns = songs[songindex];
    round++;
    resetGame();
    startGame(songindex);
    //To show options
    $(".song-button").show();
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

  })













  
