// Selecting dom elements
const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const message = document.querySelector(".message");
const resetBtn = document.querySelector(".reset");
// Variables
const PAPER = "paper";
const ROCK = "rock";
const SCISSORS = "scissors";

// Generation the computer guess
let computerGuess;
let comScore = 0;
let userScore = 0;
let description = "";
paperBtn.addEventListener("click", () => {
  play(computerGuess, PAPER);
});

rockBtn.addEventListener("click", () => {
  play(computerGuess, ROCK);
});

scissorsBtn.addEventListener("click", () => {
  play(computerGuess, SCISSORS);
});

// Play

const play = function (comChoice, playerChoice) {
  let random = Math.random();
  if (random > 0.66) {
    computerGuess = SCISSORS;
  } else if (random > 0.33) {
    computerGuess = ROCK;
  } else {
    computerGuess = PAPER;
  }
  if (comChoice === playerChoice) {
    description = `You choosed ${playerChoice} and computer choosed ${comChoice} therefor that's a draw`;
    displayLog(description);
    return;
  }
  //   Computer wins
  if (
    (comChoice === PAPER && playerChoice === ROCK) ||
    (comChoice === SCISSORS && playerChoice === PAPER) ||
    (comChoice === ROCK && playerChoice === SCISSORS)
  ) {
    comScore++;
    description = `You choosed ${playerChoice} and computer choosed ${comChoice} therefor computer Won`;
    displayLog(description);
  } else {
    description = `You choosed ${playerChoice} and computer choosed ${comChoice} therefor you Won`;

    userScore++;
    displayLog(description);
  }
  updateScore();
};

const updateScore = function () {
  playerScore.textContent = userScore;
  computerScore.textContent = comScore;
};

const displayLog = function (text) {
  message.textContent = text;
};

resetBtn.addEventListener("click", function () {
  message.textContent = "";
  userScore = 0;
  comScore = 0;
  updateScore();
});
