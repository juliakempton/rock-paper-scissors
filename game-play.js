function computerPlay() {
    let selections = ["rock", "paper", "scissors"];
    let randomSelection = selections[Math.floor(Math.random() * selections.length)];
    return randomSelection;
}

function playRound() {
    const playerSelection = window.prompt("Enter rock, paper, or scissors: ").toLowerCase();
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } 
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock";
        } else {
            return "You lose! Scissors beats Paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        } else {
            return "You win! Scissors beats Paper";
        }
    } /*else {
        console.log('Please enter rock, paper, or scissors')
        playRound()
    } */
}

function calcWinner(computerScore, playerScore) {
    if (computerScore > playerScore) {
        return `You lost the game. The final score is \nComputer: ${computerScore} \nPlayer: ${playerScore}`;
    } else if (playerScore > computerScore) {
        return `You won the game! The final score is \nComputer: ${computerScore} \nPlayer: ${playerScore}`;
    } else {
        return `The game ended in a tie. The final score is \nComputer: ${computerScore} \nPlayer: ${playerScore}`;
    }
}

function game () {
    let computerScore = 0;
    let playerScore = 0;
    for (let i=0; i<5; ++i) {
        let result = playRound();
        console.log(result);
        if (result.includes("win")) {
            playerScore += 1;
        } else if (result.includes("lose")) {
            computerScore += 1;
        }
        console.log(`Computer: ${computerScore} \nPlayer: ${playerScore}`);
        
    }
    console.log(calcWinner(computerScore, playerScore));
}

game();