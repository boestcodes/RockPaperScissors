

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1;
    
    switch (choice){
        case 1:
            return "rock"
        break;
        case 2:
            return "paper"
        break;
        case 3:
            return "scissors"
        break;
        default:
            console.log("Error");
    }
}

function getUserChoice(){
    let choiceRaw = prompt("Choose Rock, Paper or Scissors")
    let choice = choiceRaw.toLowerCase()
    return choice
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (computerChoice === humanChoice){
            console.log("It's a tie")
        }
        else if (humanChoice === "rock"){
           if (computerChoice === "scissors"){
            humanScore += 1
            console.log(`You win, ${humanChoice} beats ${computerChoice}`)
           } else {
            computerScore += 1
            console.log(`You loose, ${computerChoice} beats ${humanChoice}`)
           }
        }
        else if (humanChoice === "paper"){
            if (computerChoice === "rock"){
             humanScore += 1
             console.log(`You win, ${humanChoice} beats ${computerChoice}`)
            } else {
             computerScore += 1
             console.log(`You loose, ${computerChoice} beats ${humanChoice}`)
            }
         }
         else if (humanChoice === "scissors"){
            if (computerChoice === "paper"){
             humanScore += 1
             console.log(`You win, ${humanChoice} beats ${computerChoice}`)
            } else {
             computerScore += 1
             console.log(`You loose, ${computerChoice} beats ${humanChoice}`)
            }
         }
        
    }

    for(i=0; i<5; i++){
        playRound(getUserChoice(), getComputerChoice())

    }

    if (humanScore>computerScore){
        alert(`You won with ${humanScore} Points`)
    }
    else if (humanScore<computerScore){
        alert(`Computer won with ${computerScore} Points`)
    }
    else{
        alert(`No Winner, you both have ${humanScore} Points`)
    }

}

playGame()

