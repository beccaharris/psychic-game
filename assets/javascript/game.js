
var computerChoices = 'abcdefghijklmnopqrstuvwxyz'.split('');
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = []

// Resets the guessesLeft, guessesMade, and sets a new ComputerGuess // 
function resetGuess() {
  guessesMade.length = 0;
  guessesLeft = 9;
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

document.onkeyup = function(event) {
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

  
  // Alert the player if they are guessing something other than a-z // 
  //if (guessesMade.indexOf(playerGuess) >= 0 && computerGuess.indexOf(playerGuess) === -1) {
  //  alert("try again!")
  //}
  // If the guess 
  //if (guessesMade.indexOf(playerGuess) === -1 && computerGuess.indexOf(playerGuess) >= 0) {
  //  guessesMade.push(playerGuess);
  //  console.log("New guessesMade array is: " + guessesMade)
  //} 
//
  //if (playerGuess === computerGuess) {
  //  alert("You won!");
  //  wins++;
  //  resetGuess()
  ////} else if (playerGuess !== computerGuess) {
  ////  guessesLeft--;
  //} if (guessesLeft === 0) {
  //  alert("You lost! None of your guesses were correct");
  //  losses++;
  //  reset()
  //}
  //console.log(computerGuess + " Computer guess")
  //var html = 
  //'<h1>Psychic Game</h1>' +
  //'<h2>Press any letter key to start!</h2>'+
  //'<p>Wins: ' + wins + '</p>' +
  //'<p>Losses: ' + losses + '</p>' +
  //'<p>Guesses Remaining: ' + guessesLeft + '</p>' +
  //'<p>Your Previous Guesses: ' + guessesMade + '</p>'
//
  //document.querySelector('#psychic-game').innerHTML = html;



}