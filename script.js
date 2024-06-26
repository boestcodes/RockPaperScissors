const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const roundResults = document.querySelector("#roundResults");
const pointsPlayer = document.querySelector("#pointsPlayer");
const pointsComputer = document.querySelector("#pointsComputer");
const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
const sliderWins = document.querySelector("#sliderWins");
const showRounds = document.querySelector("#showRounds");
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

const resetPoints = () => {
  computerScore = 0;
  humanScore = 0;
  pointsComputer.textContent = computerScore;
  pointsPlayer.textContent = humanScore;
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

  if (humanScore >= sliderWins.value) {
    roundResults.textContent = `!!! You won with ${humanScore} Points !!!`;
    resetPoints()
  }
  if (computerScore >= sliderWins.value) {
    roundResults.textContent = `!!! Computer won with ${computerScore} Points !!!`;
    resetPoints()
  } 
}

sliderWins.addEventListener("input", () => {
  showRounds.textContent = sliderWins.value
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id){
      case "btnRock":
        setLeftChoice(rockImg);
        playRound("rock", getComputerChoice());
        break;
      case "btnPaper":
        setLeftChoice(paperImg);
        playRound("paper", getComputerChoice());  
        break;
      case "btnScissors":
        setLeftChoice(scissorsImg);
        playRound("scissors", getComputerChoice()); 
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

