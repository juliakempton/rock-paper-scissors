function computerPlay() {
    let selections = ["rock", "paper", "scissors"];
    let randomSelection = selections[Math.floor(Math.random() * selections.length)];
    return randomSelection;
}
const scoresDisplay = document.querySelector("#results-msg");
const youPick = document.querySelector("#you-pick");
const computerPick = document.querySelector("#computer-pick");
const youTxt = document.querySelector("#you");
const computerTxt = document.querySelector("#computer");
youTxt.textContent = "";
computerTxt.textContent = "";
const scoreTitle = document.querySelector("#score-title");
const playAgain = document.querySelector("#play-again")

function playRound(playerSelection) {
    const playerSelectionLower = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    
    
    youPick.src = `images/${playerSelectionLower}.jpg`;

    computerPick.src = `images/${computerSelection}.jpg`;

    let resultMsg = "";
    
    if (playerSelectionLower === computerSelection) {
        
        resultMsg = "It's a tie!";
        scoresDisplay.textContent = resultMsg;
        return "tie";
    } 
    if (playerSelectionLower === "rock") {
        if (computerSelection === "paper") {
            resultMsg = "You lose! Paper beats Rock";
            scoresDisplay.textContent = resultMsg;
            return "lose";
        } else {
            resultMsg = "You win! Rock beats Scissors";
            scoresDisplay.textContent = resultMsg;
            return "win";
        }
    } else if (playerSelectionLower === "paper") {
        if (computerSelection === "rock") {
            resultMsg = "You win! Paper beats Rock";
            scoresDisplay.textContent = resultMsg;
            return "win";
        } else {
            resultMsg = "You lose! Scissors beats Paper";
            scoresDisplay.textContent = resultMsg;
            return "lose";
        }
    } else if (playerSelectionLower === "scissors") {
        if (computerSelection === "rock") {
            resultMsg = "You lose! Rock beats Scissors";
            scoresDisplay.textContent = resultMsg;
            return "lose";
        } else {
            resultMsg = "You win! Scissors beats Paper";
            scoresDisplay.textContent = resultMsg;
            return "win";
        }
    } 

}

function calcWinner(computerScore, playerScore) {
    if (computerScore > playerScore) {
        return `You lost the game. The final score is 
        Player: ${playerScore}          Computer: ${computerScore}`;
    } else if (playerScore > computerScore) {
        return `You won the game! The final score is 
        Player: ${playerScore}          Computer: ${computerScore}`;
    } else {
        return `The game ended in a tie. The final score is  
        Player: ${playerScore}          Computer: ${computerScore}`;
    }
}

let computerScore = 0;
let playerScore = 0;

scoreMsg = document.querySelector("#scores");
let numRounds = 0;
const finalResultsMsg = document.querySelector("#final-results");


function game () {
    youTxt.textContent = "You";
    computerTxt.textContent = "Computer";
    scoreTitle.textContent = "Score";
   

    
    if (numRounds < 5) {
        numRounds += 1;
        let result = playRound(this.id);
        if (result == "win") {
            playerScore += 1;
        } else if (result == "lose") {
            computerScore += 1;
        }
        scoreMsg.textContent = `You: ${playerScore} \t\t Computer: ${computerScore}`
        console.log(`Computer: ${computerScore} \nPlayer: ${playerScore}`);
        console.log(numRounds)
    } else {
        finalResultsMsg.textContent = calcWinner(computerScore, playerScore);
        console.log(calcWinner(computerScore, playerScore))
        scoreMsg.textContent = "";
        let scoreTitle = document.querySelector("#score-title");
        scoreTitle.textContent = "";
        scoresDisplay.textContent = "";
        youPick.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        computerPick.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        youTxt.textContent = "";
        computerTxt.textContent = "";
        playAgain.style.display = "inline";
    }
}
function play() {
    console.log(this)
}

console.log(play)
const options = document.querySelectorAll(".option");
options.forEach(option => option.addEventListener("click", game));
const playAgainBtn = document.querySelector("#play-again");

function zero() {
    numRounds = 0;
    console.log(numRounds)
    finalResultsMsg.textContent = "";
    playAgainBtn.style.display = "none";
    computerScore = 0;
    playerScore = 0;
}
playAgainBtn.addEventListener("click", zero);
