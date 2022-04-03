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

  var myOutputValue = "hello world";

  if (input != "scissors" || input != "paper" || input != "stone") {
    myOutputValue = `Input invalid, please try again. Please type in scissors, paper, or stone to play the game.`;
  }
  if (input == computerThrows) {
    myOutputValue = `It's a draw! You threw ${input} and computerThrows ${computerThrows}.`;
  }
  if (
    (input == "scissors" && computerThrows == "stone") ||
    (input == "stone" && computerThrows == "paper") ||
    (input == "paper" && computerThrows == "scissors")
  ) {
    myOutputValue = `You lost! You threw ${input} and computer throws ${computerThrows}.`;
  }
  if (
    (input == "scissors" && computerThrows == "paper") ||
    (input == "stone" && computerThrows == "scissors") ||
    (input == "paper" && computerThrows == "stone")
  ) {
    myOutputValue = `You won! You threw ${input} and computer throws ${computerThrows}. `;
  }

  return myOutputValue;
};
