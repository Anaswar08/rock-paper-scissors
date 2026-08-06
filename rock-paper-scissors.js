let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3 );

    if (rand === 0) {
        return "rock";
    }
    else if (rand === 1) {
        return "paper";
    }
    else{
        return "scissors";
    }
};

function getHumanChoice() {
    let userInput = prompt("Enter rock, paper or scissors");
    return userInput;
};

function playRound(humanChoice, computerChoice) {
    let userInputLower = humanChoice.toLowerCase();

    if (computerChoice == userInputLower) {
        return "draw";
    } 
    else if (computerChoice == 'rock' && userInputLower == 'paper') {
        return "You win! Paper beats rock."
    }
    else if (computerChoice == 'paper' && userInputLower == 'rock') {
        return "You loose. Paper beats rock."
    }
    else if (computerChoice == 'paper' && userInputLower == 'scissors') {
        return "You win! Scissors beats paper."
    }
    else if (computerChoice == 'scissors' && userInputLower == 'paper') {
        return "You loose. Scissors beats paper."
    }
    else if (computerChoice == 'rock' && userInputLower == 'scissors') {
        return "You loose. Rock beats scissors."
    }
    else if (computerChoice == 'scissors' && userInputLower == 'rock') {
        return "You win! Rock beats scissors."
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));