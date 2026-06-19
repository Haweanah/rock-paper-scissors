/** get computer choice */
let computerChoice = Math.floor((Math.random() * 10) + 1);

function getComputerChoice (computerChoice) {
       if (computerChoice <= 3) {
    return "rock"
   } else if(computerChoice > 3 && computerChoice <=6) {
    return "paper"
   } else {
    return "scissors"
   }  
}
console.log(computerChoice)
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