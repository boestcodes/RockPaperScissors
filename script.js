const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const roundResults = document.querySelector("#roundResults");
const pointsPlayer = document.querySelector("#pointsPlayer");
const pointsCom = document.querySelector("#pointsCom");
const buttons = document.querySelectorAll("button");

let humanScore = 0;
let computerScore = 0;

alert("Welcome to boestcodes R-P-S Game");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      roundResults.textContent("Error");
  }
}

function playRound(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    roundResults.textContent = "It's a tie";
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore += 1;
      alert("output")
      roundResults.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore += 1;
      roundResults.textContent = `You loose, ${computerChoice} beats ${humanChoice}`;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore += 1;
      roundResults.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore += 1;
      roundResults.textContent = `You loose, ${computerChoice} beats ${humanChoice}`;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore += 1;
      roundResults.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore += 1;
      roundResults.textContent = `You loose, ${computerChoice} beats ${humanChoice}`;
    }
  }
  pointsCom.textContent = "Computer point: " + computerScore;
  pointsPlayer.textContent = "Player point: " + humanScore;
}

/*
if (humanScore > computerScore) {
  alert(`You won with ${humanScore} Points`);
} else if (humanScore < computerScore) {
  alert(`Computer won with ${computerScore} Points`);
} else {
  alert(`No Winner, you both have ${humanScore} Points`);
}
  */

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id){
      case "btnRock":
        playRound("rock", getComputerChoice());
        break;
      case "btnPaper":
        playRound("paper", getComputerChoice());
        break;
      case "btnScissors":
        playRound("scissors", getComputerChoice());
        break;
    }
  });
});
