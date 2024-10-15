"use strict";

let pSelection = document.querySelector("#playerSelection img");
let cSelection = document.querySelector("#computerSelection img");
let pScore = document.querySelector("#playerScore");
let cScore = document.querySelector("#computerScore");
let playBtn = document.querySelectorAll('.pBtn');

playBtn.forEach((btn) => btn.addEventListener("click", playGame));

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let playerPoint = 0;
    let computerPoint = 0;
    
    switch(humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("CPU: Rock");
                console.log("Tie!");
            } else if (computerChoice === "paper") {
                console.log("CPU: Paper");
                console.log("CPU Wins!");
                computerPoint ++;
            } else if (computerChoice === "scissors") {
                console.log("CPU: Scissors");
                console.log("You Win!");
                playerPoint ++;
            }
            return ["somethingsomething", playerPoint, computerPoint];

        case "paper":
            if (computerChoice === "paper") {
                console.log("CPU: Paper");
                console.log("Tie!");
            } else if (computerChoice === "scissors") {
                console.log("CPU: Scissors");
                console.log("CPU Wins!");
                computerPoint ++;
            } else if (computerChoice === "rock") {
                console.log("CPU: Rock");
                console.log("You Win!");
                playerPoint ++;
            }
            return ["somethingsomething", playerPoint, computerPoint];

        case "scissors":
            if (computerChoice === "scissors") {
                console.log("CPU: Scissors");
                console.log("Tie!");
            } else if (computerChoice === "rock") {
                console.log("CPU: Rock");
                console.log("CPU Wins!");
                computerPoint ++;
            } else if (computerChoice === "paper") {
                console.log("CPU: Paper");
                console.log("You Win!");
                playerPoint ++;
            }
            return ["somethingsomething", playerPoint, computerPoint];
    }
}

function updateGame(player, computer, result) {
    let playerScore = parseInt(pScore.textContent);
    let computerScore = parseInt(cScore.textContent);

    if(playerScore < 5 && computerScore < 5) {
        pScore.textContent = playerScore += result[1];
        cScore.textContent = computerScore += result[2];
        pSelection.src = `images/${player}.png`;
        cSelection.src = `images/${computer}.png`;
    }
}

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else if (num === 2) {
        return "scissors";
    }
}

function playGame() {
    let playerSelection = `${this.id}`;
    let computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);
    updateGame(playerSelection, computerSelection, outcome);
}