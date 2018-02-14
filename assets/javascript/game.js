
var computerChoices = 'abcdefghijklmnopqrstuvwxyz'.split('');
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = []

// Resets the guessesLeft, guessesMade, and sets a new ComputerGuess // 
function resetGuess() {
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  guessesMade.splice(0)
  guessesLeft = 9;
  
}

document.onkeyup = function(event) {
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
  if ((guessesMade.indexOf(playerGuess) === -1) && (computerChoices.indexOf(playerGuess) !== -1)) {
    guessesMade.push(playerGuess)
    console.log(guessesMade)
  } else if (guessesMade.indexOf(playerGuess) > -1) {
    alert("You already guessed me! Try another letter")
  } else if (computerChoices.indexOf(playerGuess) === -1) {
    alert("You picked an invalid character! Pick a letter")
  } 

  if (playerGuess === computerGuess) {
    alert("You won!");
    wins++;
    resetGuess()
  } if (playerGuess !== computerGuess) {
    guessesLeft--
  } if (guessesLeft === 0) {
    alert("You lost :( - better luck next time! Click OK to reset");
    losses++;
    resetGuess()
  }

  var html = 
  '<h1>Psychic Game</h1>' +
  '<h2>Press any letter key to start!</h2>'+
  '<p>Wins: ' + wins + '</p>' +
  '<p>Losses: ' + losses + '</p>' +
  '<p>Guesses Remaining: ' + guessesLeft + '</p>' +
  '<p>Your Previous Guesses: ' + guessesMade + '</p>'

  document.querySelector('#psychic-game').innerHTML = html;
}


