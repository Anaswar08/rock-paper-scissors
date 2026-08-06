let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 );

    if (computerChoice === 0) {
        return "rock";
    }
    else if (computerChoice === 1) {
        return "paper";
    }
    else{
        return "scissors";
    }
};

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper or scissors");
    return humanChoice;
};

function playRound(computerChoice, humanChoice) {
    // humanChoice = humanChoice.toLowerCase();
    return humanChoice;
    // if (computerChoice == humanChoice) {
    //     return "draw";
    // } 
    // else if (computerChoice == rock && humanChoice == paper) {
    //     return "human wins"
    // }
    // else if (computerChoice == paper && humanChoice == rock) {
    //     return "computer wins"
    // }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));