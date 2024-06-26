const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const roundResults = document.querySelector("#roundResults");
const pointsPlayer = document.querySelector("#pointsPlayer");
const pointsComputer = document.querySelector("#pointsComputer");
const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results")
const rockImg = "images/rock.png";
const paperImg = "images/copy.png";
const scissorsImg = "images/scissors.png";

let humanScore = 0;
let computerScore = 0;

alert("Welcome to boestcodes R-P-S Game");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      setRightChoice(rockImg);
      return "rock";
      break;
    case 2:
      setRightChoice(paperImg);
      return "paper";
      break;
    case 3:
      setRightChoice(scissorsImg);
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
  pointsComputer.textContent = computerScore;
  pointsPlayer.textContent = humanScore;
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
        setLeftChoice(rockImg);
        break;
      case "btnPaper":
        playRound("paper", getComputerChoice());
        setLeftChoice(paperImg);
        break;
      case "btnScissors":
        playRound("scissors", getComputerChoice());
        setLeftChoice(scissorsImg);
        break;
    }
  });
});

function setLeftChoice(choice){
  if(results.childElementCount>1){
    results.removeChild(results.childNodes[0])
  }
 
  const leftChoice = document.createElement("img")
  leftChoice.setAttribute("src", choice)
  leftChoice.setAttribute("height", "80px")
  leftChoice.setAttribute("width", "80px")
  results.insertAdjacentElement("afterbegin",leftChoice)
  
  
}

function setRightChoice(choice){
  if(results.childElementCount>1){
    results.removeChild(results.childNodes[2])
  }
  const rightChoice = document.createElement("img")
  rightChoice.setAttribute("src", choice)
  rightChoice.setAttribute("height", "80px")
  rightChoice.setAttribute("width", "80px")
  results.insertAdjacentElement("beforeend",rightChoice)
}
