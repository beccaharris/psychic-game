
// Creates an alphabet array for the computer to choose from - all possible letter choices // 
var computerChoices = 'abcdefghijklmnopqrstuvwxyz'.split('');
// Makes computer pick a letter and store it as "computerGuess" variable // 
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// Creates variables for the number of wins, losses, and guesses left (beginning with 9) //
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// creates empty array to push new guesses to
var guessesMade = []

document.onkeyup = function(event) {
  // Determines the key pressed by the player & converts it to lowercase //
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
  // Alert the player if they are guessing something other than a-z // 
  if (computerChoices.indexOf(playerGuess) === -1 && guessesMade.indexOf(playerGuess) > -1) {
    alert("This is an invalid key! Please choose a letter")
  // If the guess 
  } if (guessesMade.indexOf(playerGuess) > -1) {
    alert("You already guessed this letter! Try another one!")
  } 
  if (guessesMade.indexOf(playerGuess) === -1 && computerGuess.indexOf(playerGuess) >= 0) {
    guessesMade.push(playerGuess);
    console.log("New guessesMade array is: " + guessesMade)
  } 
   
  // Chooses a letter from the computerChoices array


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
  '<p>Wins: ' + wins + '</p>' +
  '<p>Losses: ' + losses + '</p>' +
  '<p>Guesses Remaining: ' + guessesLeft + '</p>' +
  '<p>Your Previous Guesses: ' + guessesMade + '</p>'

  document.querySelector('#psychic-game').innerHTML = html;



}