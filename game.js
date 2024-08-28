"use strict";

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const roundStatus = document.querySelector("#roundStatus");
const container = document.querySelector("#container");
const humanScoreBoard = document.querySelector("#humanScore");
const computerScoreBoard = document.querySelector("#computerScore");
const buttonsDiv = document.querySelector("#buttons");
const buttons = document.querySelectorAll("button");
const resetButton = document.createElement("button");

const clearGame = () => {
    roundStatus.textContent = `Game Over! You ${humanScore > computerScore ? 'won' : 'lost'} this round!`

    buttons.forEach(button => {
        button.style.display = "none";
    })

    buttonsDiv.append(resetButton);
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice == computerChoice) {
        roundStatus.textContent = `Draw! You both drew ${humanChoice}.`;
    } else if (humanChoice == ROCK && computerChoice == PAPER) {
        computerScore++;
        roundStatus.textContent = `You lose! Paper beats Rock`;
    } else if (humanChoice == ROCK && computerChoice == SCISSORS) {
        humanScore++;
        roundStatus.textContent = `You win! Rock beats Scissors`;
    } else if (humanChoice == PAPER && computerChoice == ROCK) {
        humanScore++;
        roundStatus.textContent = `You win! Paper beats Rock`;
    } else if (humanChoice == PAPER && computerChoice == SCISSORS) {
        computerScore++
        roundStatus.textContent = `You lose! Scissors beats Paper`;
    } else if (humanChoice == SCISSORS && computerChoice == PAPER) {
        humanScore++;
        roundStatus.textContent = `You win! Scissors beats Paper`;
    } else if (humanChoice == SCISSORS && computerChoice == ROCK) {
        computerScore++;
        roundStatus.textContent = `You lose! Rock beats Scissors`;
    } else {
        roundStatus.textContent = `Oops, something went wrong`;
    }

    computerScoreBoard.textContent = computerScore;
    humanScoreBoard.textContent = humanScore;

    if (computerScore === 5 || humanScore === 5) {
        clearGame()
    }
}


const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        default:
            return SCISSORS;
    }
}

const resetGame = () => {
    roundStatus.innerHTML = "&nbsp;";

    computerScore = humanScore = 0;

    computerScoreBoard.textContent = computerScore;
    humanScoreBoard.textContent = humanScore;

    buttons.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = "darkslategray";
        button.style.display = "inline";
    })

    resetButton.remove();
}

let humanScore = 0;
let computerScore = 0;

resetButton.innerText = "Reset Game";
resetButton.style.backgroundColor = "red";
resetButton.onclick = resetGame;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.innerText.toLowerCase(), getComputerChoice())
    })
})