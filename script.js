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
console.log(getComputerChoice())

/** get human choice */
let humanChoice = prompt("Enter rock, paper, or scissors")

function getHumanChoice () {
    if (humanChoice) {
        return humanChoice
    }
}
console.log(humanChoice)
console.log(getHumanChoice())

/** Write logic to play a single round */
function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === "rock" && computerChoice === "rock") {
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
    }
}

playRound(getHumanChoice(), getComputerChoice())