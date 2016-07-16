var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var userGuesses = document.getElementById("guesses"); 
var winsCount = document.getElementById("wins");
var lossesCount = document.getElementById("losses");
var guessesCount = document.getElementById("remainingGuesses");
var options = 'abcdefghijklmnopqrstuvwxyz';
var sound1 = new Audio('assets/sound/Wrong-answer-sound-effect.mp3'); 
var sound2 = new Audio('assets/sound/Bing-sound.mp3'); 

document.getElementById('btn').onclick = function(){ 
  console.log('reset')
  remainingGuesses = 10;
  guessesCount.innerHTML = remainingGuesses;

  userGuesses.innerHTML = '';
  winsCount.innerHTML = '0';
  lossesCount.innerHTML = 0;
  losses = 0;
}

document.onkeyup = function(event) {

  if (remainingGuesses==0) {
    return;
  } 
  console.log('guess left::', remainingGuesses)
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  var computerGuess = options[Math.floor(Math.random()*options.length)];


  userGuesses.innerHTML += userGuess;
  if (userGuess===computerGuess) {
    console.log('Your a Winner');
    wins += 1;
    winsCount.innerHTML = wins;
    sound2.play();
  }
  else {
    losses +=1;
    lossesCount.innerHTML = losses;
    remainingGuesses--;
    guessesCount.innerHTML =  remainingGuesses;
    sound1.play();
    
  }
   
};
