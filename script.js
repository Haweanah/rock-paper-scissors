/** get computer choice */
let choice = Math.floor((Math.random() * 10) + 1);

function getComputerChoice (choice) {
       if (choice <= 3) {
    return "rock"
   } else if(choice > 3 && choice <=6) {
    return "paper"
   } else {
    return "scissors"
   }  
}
console.log(choice)
console.log(getComputerChoice())