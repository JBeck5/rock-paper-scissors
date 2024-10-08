let humanScore = 0;
let computerScore = 0;

function playGame() {
    let gameEnd = false;
    let round = 1;
    while (gameEnd != true) {
        console.log("Round: " + round);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Player: " + humanScore + " || CPU: " + computerScore + "\n\n");
        round ++;

        if (humanScore === 5 || computerScore === 5) {
            gameEnd = true;
        }
    }

    if (humanScore === 5) {
        console.log("Game End:");
        console.log("You Win!");
    } else console.log("You Lost.");
}

function playRound(humanChoice, computerChoice) {
    console.log("Player: " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1));
    switch(humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("CPU: Rock");
                console.log("Tie!");
            } else if (computerChoice === "paper") {
                console.log("CPU: Paper");
                console.log("CPU Wins!");
                computerScore ++;
            } else if (computerChoice === "scissors") {
                console.log("CPU: Scissors");
                console.log("You Win!");
                humanScore ++;
            }
            break;
        case "paper":
            if (computerChoice === "paper") {
                console.log("CPU: Paper");
                console.log("Tie!");
            } else if (computerChoice === "scissors") {
                console.log("CPU: Scissors");
                console.log("CPU Wins!");
                computerScore ++;
            } else if (computerChoice === "rock") {
                console.log("CPU: Rock");
                console.log("You Win!");
                humanScore ++;
            }
            break;
        case "scissors":
            if (computerChoice === "scissors") {
                console.log("CPU: Scissors");
                console.log("Tie!");
            } else if (computerChoice === "rock") {
                console.log("CPU: Rock");
                console.log("CPU Wins!");
                computerScore ++;
            } else if (computerChoice === "paper") {
                console.log("CPU: Paper");
                console.log("You Win!");
                humanScore ++;
            }
            break;
    }
}

function getHumanChoice() {
    let response = prompt("Select (Rock), (Paper), or (Scissors)").toLowerCase();
    if (response === "rock" || response === "paper" || response === "scissors") {
        return response;
    } else return getHumanChoice();
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
