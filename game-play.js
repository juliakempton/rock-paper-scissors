function computerPlay() {
    let selections = ["rock", "paper", "scissors"];
    let randomSelection = selections[Math.floor(Math.random() * selections.length)];
    return randomSelection;
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower === computerSelection) {
        return "It's a tie!"
    } 
    if (playerSelectionLower === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    } else if (playerSelectionLower === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock";
        } else {
            return "You lose! Scissors beats Paper";
        }
    } else if (playerSelectionLower === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        } else {
            return "You win! Scissors beats Paper";
        }
    }
}

const playerSelection = window.prompt("Enter your selection: ");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));