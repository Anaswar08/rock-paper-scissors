let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    if (rand === 0) {
        return "rock";
    }
    else if (rand === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
};

function getHumanChoice() {
    let userInput = prompt("Enter rock, paper or scissors");
    return userInput;
};

// function playRound(humanChoice, computerChoice) {
//     // let userInputLower = humanChoice.toLowerCase();

//     let roundResult = "";

//     if (computerChoice == userInputLower) {
//         return "draw";
//     }
//     else if (computerChoice == 'rock' && userInputLower == 'paper') {
//         console.log("You win! Paper beats rock.");
//         let score = `human score: ${++humanScore}`;
//         return score;
//     }
//     else if (computerChoice == 'paper' && userInputLower == 'rock') {
//         console.log("You loose. Paper beats rock.");
//         let score = `computer score: ${++computerScore}`;
//         return score;
//     }
//     else if (computerChoice == 'paper' && userInputLower == 'scissors') {
//         console.log("You win! Scissors beats paper.");
//         let score = `human score: ${++humanScore}`;
//         return score;
//     }
//     else if (computerChoice == 'scissors' && userInputLower == 'paper') {
//         console.log("You loose. Scissors beats paper.");
//         let score = `computer score: ${++computerScore}`;
//         return score;
//     }
//     else if (computerChoice == 'rock' && userInputLower == 'scissors') {
//         console.log("You loose. Rock beats scissors.");
//         let score = `computer score: ${++computerScore}`;
//         return score;
//     }
//     else if (computerChoice == 'scissors' && userInputLower == 'rock') {
//         console.log("You win! Rock beats scissors.");
//         let score = `human score: ${++humanScore}`;
//         return score;
//     }

//     console.log("one round");
// }

// function playGame() {

//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();

//     console.log(playRound(humanSelection, computerSelection));

//     humanSelection=getHumanChoice();
//     computerSelection=getComputerChoice();

//     console.log(playRound(humanSelection, computerSelection));

//     humanSelection=getHumanChoice();
//     computerSelection=getComputerChoice();

//     console.log(playRound(humanSelection, computerSelection));

//     humanSelection=getHumanChoice();
//     computerSelection=getComputerChoice();

//     console.log(playRound(humanSelection, computerSelection));

//     humanSelection=getHumanChoice();
//     computerSelection=getComputerChoice();

//     console.log(playRound(humanSelection, computerSelection));

//     if (computerScore > humanScore) {
//         console.log("You loose!");
//     }
//     else if (humanScore > computerScore) {
//         console.log("You win!");
//     }
//     else {
//         console.log("Its a tie.");
//     }

// }

function playGame(humanChoice) {
    if (roundsPlayed == 5) return;

    const computerChoice = getComputerChoice();
    let roundResult = "";

    if (humanChoice === computerChoice) {
        roundResult = "Its a draw";
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        roundResult = "You win!";
    }
    else {
        computerScore++;
        roundResult = "You loose!";
    }

    roundsPlayed++;

    playerScore.textContent = `Human score: ${humanScore}`;
    compScore.textContent = `Computer score: ${computerScore}`;
    resultMessage.textContent = roundResult;

    if(roundsPlayed === 5){
        endGame();
    }
}

function endGame(){
    let roundResult = "";
    if(humanScore > computerScore){
        roundResult = "Human wins";
    }
    else if (computerScore > humanScore){
        roundResult = "Computer wins";
    }
    else{
        roundResult = "Its a draw";
    }

    resultMessage.textContent = roundResult;
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

let computerSelection = getComputerChoice();

rock.addEventListener('click', () => {
    const humanChoice = 'rock';
    playGame('rock');
})

paper.addEventListener('click', () => {
    const humanChoice = 'paper';
    playGame('paper');
})

scissors.addEventListener('click', () => {
    const humanChoice = 'scissors';
    playGame('scissors');
})

const resultMessage = document.createElement("div");
const playerScore = document.createElement("div");
const compScore = document.createElement("div");
const finalMessage = document.createElement("p");

document.body.appendChild(resultMessage);
document.body.appendChild(playerScore);
document.body.appendChild(compScore);
document.body.appendChild(finalMessage);

// playGame();

