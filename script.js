/** declare player score variable */
let humanScore = 0;
let computerScore = 0;

/** get computer choice */
const choice =  Math.floor(Math.random() * 10);
let getComputerChoice = (choice) => {
    if (choice <= 3) {
        return "rock"
    } else if (choice > 3 && choice <=6 ) {
        return "paper"
    } else return "scissors"
};
console.log(choice)

/** get human choice */

function getHumanChoice () {
    let choice = prompt("Enter rock, paper, or scissors")
    return choice
}

console.log(getHumanChoice());

function playRound (humanChoice, computerChoice) {
    humanChoice(getHumanChoice => getHumanChoice.lowerCase)
    if (computerChoice === rock && humanChoice === rock) {
        console.log(`Tie!! \n${humanScore + 0}\n${computerScore + 0}`) 
    } else if (computerChoice === paper && humanChoice === paper) {
        console.log(`Tie!! \n${humanScore + 0}\n${computerScore + 0}`) 
    } else if (computerChoice === scissors && humanChoice === scissors) {
        console.log(`Tie!! \n${humanScore + 0}\n${computerScore + 0}`)
    }
    else if (computerChoice === scissors && humanChoice === scissors) {
        console.log(`Tie!! \n${humanScore + 0}\n${computerScore + 0}`)
    }
}