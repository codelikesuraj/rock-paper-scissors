"use strict";

const Throw = Object.freeze({
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
});

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return Throw.ROCK;
        case 1:
            return Throw.PAPER;
        default:
            return Throw.SCISSORS;
    }
}

function getHumanChoice() {
    while (true) {
        let choice = prompt(`What do you want to throw? Rock, Paper or Scissors`);

        choice = choice.toLowerCase();

        if (choice == Throw.ROCK || choice == Throw.PAPER || choice == Throw.SCISSORS) {
            return choice
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Draw! You both drew ${humanChoice}.`);
    } else if (humanChoice == Throw.ROCK && computerChoice == Throw.PAPER) {
        computerScore++;
        console.log(`You lose! Paper beats Rock`);
    } else if (humanChoice == Throw.ROCK && computerChoice == Throw.SCISSORS) {
        humanScore++;
        console.log(`You win! Rock beats Scissors`);
    } else if (humanChoice == Throw.PAPER && computerChoice == Throw.ROCK) {
        humanScore++;
        console.log(`You win! Paper beats Rock`);
    } else if (humanChoice == Throw.PAPER && computerChoice == Throw.SCISSORS) {
        computerScore++
        console.log(`You lose! Scissors beats Paper`);
    } else if (humanChoice == Throw.SCISSORS && computerChoice == Throw.PAPER) {
        humanScore++;
        console.log(`You win! Scissors beats Paper`);
    } else if (humanChoice == Throw.SCISSORS && computerChoice == Throw.ROCK) {
        computerScore++;
        console.log(`You lose! Rock beats Scissors`);
    } else {
        console.log(`Oops, something went wrong`);
    }
}

function playGame() {
    console.log("Rock Paper Scissors Game")

    for (let i = 0; i < 5; i++) {
        console.log(`Game Round ${i + 1}`);
        playRound(getHumanChoice(), getComputerChoice())
    }

    console.log("Final scores")
    console.log(`You: ${humanScore}`)
    console.log(`Computer: ${computerScore}`)
    console.log(`You ${humanScore > computerScore ? "won" : "lost"} the game`)
}

playGame()