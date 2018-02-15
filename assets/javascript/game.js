
var computerChoices = 'abcdefghijklmnopqrstuvwxyz'.split('');
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = []


// Resets the guessesLeft, guessesMade, and sets a new ComputerGuess // 
function resetGuess() {
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  guessesMade.splice(0, guessesMade.length)
  guessesLeft = 9;
}



document.onkeyup = function(event) {
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

  if ((guessesMade.indexOf(playerGuess) === -1) && (computerChoices.indexOf(playerGuess) !== -1)) {
    guessesMade.push(playerGuess);
    if (playerGuess === computerGuess) {
      alert("You won!");
      wins++;
      resetGuess()
    } else if (playerGuess !== computerGuess) {
      guessesLeft--
    } if (guessesLeft === 0) {
      alert("You lost :( - better luck next time! Click OK to reset");
      losses++;
      resetGuess()
    }
  } else if (guessesMade.indexOf(playerGuess) > -1) {
    alert("You already guessed me! Try another letter")
  } else if (computerChoices.indexOf(playerGuess) === -1) {
    alert("You picked an invalid character! Pick a letter")
  } 



  var html = 
  '<p>Wins: ' + wins + '</p>' +
  '<p>Losses: ' + losses + '</p>' +
  '<p>Guesses Remaining: ' + guessesLeft + '</p>' +
  '<p>Your Previous Guesses: ' + guessesMade.join(' -- ') + '</p>'

  document.querySelector('#game-content').innerHTML = html;
}


