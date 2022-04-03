// Generate a random number and assign that random number to either scissors, paper or stone.

var randomNumber = function () {
  var randomInteger = Math.ceil(Math.random() * 3);
  if (randomInteger == 1) {
    return "scissors";
  }
  if (randomInteger == 2) {
    return "paper";
  }
  if (randomInteger == 3) {
    return "stone";
  }
};

var drawCondition = function (playerThrows, computerThrows) {
  return playerThrows == computerThrows;
};

var winningCondition = function (playerThrows, computerThrows) {
  return (
    (playerThrows == "scissors" && computerThrows == "paper") ||
    (playerThrows == "paper" && computerThrows == "stone") ||
    (playerThrows == "stone" && computerThrows == "scissors")
  );
};

var outputMessage = function (playerThrows, computerThrows) {
  return (
    "you threw " + playerThrows + " computer threw " + computerThrows + "."
  );
};
// Input Validation
// If the word is not scissors, paper nor stone, let the user know that there are only three input options: scissors, paper and stone, please try again.

// The output should be something like you threw scissors and the computer threw paper. You won!

// There are 9 different cases and three different outcomes
// Draw situation
// If both user and computer throw the same

// User Win situation
// If user throws scissors, computer throws paper
// If user throws stone, computer throws scissors
// If user throws paper, computer throws stone

// User Lose situation
// If user throws scissors, computer throws stone
// If user throws stone, computer throws paper
// If user throws paper, computer throws scissors

var main = function (input) {
  var computerThrows = randomNumber();
  var playerThrows = input;
  var message = outputMessage(playerThrows, computerThrows);

  if (drawCondition(playerThrows, computerThrows)) {
    return `it's a draw!`;
  }

  if (winningCondition(playerThrows, computerThrows)) {
    return message + " you won!";
  }

  return message + " you lost!";
};
