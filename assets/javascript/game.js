
// Creates an alphabet array - all possible letter choices // 
var computerChoices = 'abcdefghijklmnopqrstuvwxyz'.split('');
// Creates variables for the number of wins, losses, and guesses left (beginning with 10) //
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// creates empty array to push new guesses to
var guessesMade = []

document.onkeyup = function(event) {
  // Determines the key pressed by the player //
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
  guessesMade.push(playerGuess);
  // Chooses a letter from the computerChoices array
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


  if (playerGuess === computerGuess) {
    alert("You won!");
    wins++;
    guessesMade.length = 0;
    guessesLeft = 9;
  } else if (playerGuess !== computerGuess) {
    guessesLeft--;
  } if (guessesLeft === 0) {
    alert("You lost! None of your guesses were correct");
    losses++;
    guessesMade.length = 0;
    guessesLeft = 9
  }

  var html = 
  '<h1>Psychic Game</h1>' +
  '<h2>Press any letter key to start!</h2>'+
  '<p>You chose: ' + playerGuess + '</p>' +
  '<p>Wins: ' + wins + '</p>' +
  '<p>Losses: ' + losses + '</p>' +
  '<p>Guesses Remaining: ' + guessesLeft + '</p>' +
  '<p>Your Previous Guesses: ' + guessesMade + '</p>'

  document.querySelector('#psychic-game').innerHTML = html;



}