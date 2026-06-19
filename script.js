/** declare player score variables */
let humanScore = 0;
let computerScore = 0;

/** get computer choice */

function getComputerChoice () {
    let computerChoice = Math.floor((Math.random() * 3) );

       if (computerChoice === 0) {
    return "rock"
   } else if(computerChoice === 1) {
    return "paper"
   } else {
    return "scissors"
   }  
}

/** get human choice */

function getHumanChoice () {
    let humanChoice = prompt("Enter rock, paper, or scissors")
        return humanChoice
    
}

/** Write logic to play a single round */
function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice?.toLowerCase()
    /**
     * if (humanChoice === "rock" && computerChoice === "rock") {
        return console.log (`Tie\n${humanScore}\ncomputerScore:  ${computerScore}`)
    } else  if (humanChoice === "paper" && computerChoice === "paper") {
        return console.log (`Tie\nhumanScore: ${humanScore}\ncomputerScore:  ${computerScore}`)
    } else  if (humanChoice === "scissors" && computerChoice === "scissors") {
        return console.log (`Tie\nhumanScore: ${humanScore}\ncomputerScore:  ${computerScore}`)
    } else  if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        return console.log (`You win!!\nhumanScore: ${humanScore}\ncomputerScore:  ${computerScore}`)
    }
    else  if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        return console.log (`You win!!\nhumanScore: ${humanScore}\ncomputerScore:  ${computerScore}`)
    }
    else  if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        return console.log (`You win!!\nhumanScore: ${humanScore}\ncomputerScore:  ${computerScore}`)
    }
    else  if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++
        return console.log (`Computer wins!!\ncomputerScore:  ${computerScore}\ncomputerScore:  ${computerScore}`)
    }
    else  if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++
        return console.log (`Computer wins!!\nhumanScore: ${humanScore}\ncomputerScore:  ${computerScore}`)
    }
    else  if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++
        return console.log (`Computer wins!!\nhumanScore: ${humanScore}\ncomputerScore:  ${computerScore}`)
    }*/
    if (computerChoice === humanChoice) {
        console.log(`Tie\nhumanScore: ${humanScore}\ncomputerScore: ${computerScore}`)
    } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "rock") {
        computerScore++
        console.log(`Computer wins\nhumanScore: ${humanScore}\ncomputerScore: ${computerScore}`)
    } else {
        humanScore++
        console.log(`You win\nhumanScore: ${humanScore}\ncomputerScore: ${computerScore}`)
    }
    }

/** write the logic to play the entire game */
function playGame () {
    for(let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`)
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
    console.log("Game over")
    console.log(`Final Score`);
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`)
    if (humanScore > computerScore) {
    console.log("You won the game!");
}
else if (computerScore > humanScore) {
    console.log("Computer won the game!");
}
else {
    console.log("The game is a tie!");
}
}
playGame();
