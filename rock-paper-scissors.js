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
        console.log("You win! Paper beats rock.");
        let score = `human score: ${++humanScore}`;
        return ++humanScore;
    }
    else if (computerChoice == 'paper' && userInputLower == 'rock') {
        console.log("You loose. Paper beats rock.");
        let score = `computer score: ${++computerScore}`;
        return score;
    }
    else if (computerChoice == 'paper' && userInputLower == 'scissors') {
        console.log("You win! Scissors beats paper.");
        let score = `human score: ${++humanScore}`;
        return score;
    }
    else if (computerChoice == 'scissors' && userInputLower == 'paper') {
        console.log("You loose. Scissors beats paper.");
        let score = `computer score: ${++computerScore}`;
        return score;
    }
    else if (computerChoice == 'rock' && userInputLower == 'scissors') {
        console.log("You loose. Rock beats scissors.");
        let score = `computer score: ${++computerScore}`;
        return score;
    }
    else if (computerChoice == 'scissors' && userInputLower == 'rock') {
        console.log("You win! Rock beats scissors.");
        let score = `human score: ${++humanScore}`;
        return score; 
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
// console.log(humanScore);
// console.log(computerScore)