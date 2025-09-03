function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Choose rock, paper or scissors!");
    return humanChoice;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    rounds = 0;
    buttons.forEach((button) => {
        button.disabled = false;
    });
    result.textContent = "";
    score.textContent = "";
    winner.textContent = "";
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        result.textContent = `It's a tie! You both chose ${humanChoice}.`;
        return;
    }

    switch (humanChoice.toLowerCase()) {
        case "rock":
            if (computerChoice === "paper") {
                result.textContent = "You lost! Rock loses to paper.";
                computerScore++;
                break;
            } else {
                result.textContent = "You won! Rock beats scissors.";
                humanScore++;
                break;
            }
        case "paper":
            if (computerChoice === "rock") {
                result.textContent = "You won! Paper beats rock.";
                humanScore++;
                break;
            } else {
                result.textContent = "You lost! Paper loses to scissors.";
                computerScore++;
                break;
            }
        case "scissors":
            if (computerChoice === "rock") {
                result.textContent = "You lost! Scissors loses to rock.";
                computerScore++;
                break;
            } else {
                result.textContent = "You won! Scissors beats paper.";
                humanScore++;
                break;
            }
        default:
            result.textContent = "You didn't choose rock, paper or scissors :-(";
    }

    score.innerHTML = `<h3>Score</h3> Human ${humanScore} - ${computerScore} Computer`;

    rounds++;

    if (humanScore === 5 || computerScore === 5) {
        const res = document.createElement("p");
        if (humanScore > computerScore) {
            res.textContent = "Humans won! Quick, unplug Skynet while you still can.";
        } else {
            res.textContent = "Hasta la vista, baby! The robots won this time.";
        }
        winner.appendChild(res);
        buttons.forEach((button) => {
            button.disabled = true;
        });
        const resetButton = document.createElement("button");
        resetButton.textContent = "Reset game";
        resetButton.addEventListener("click", () => {
            resetGame();
        });
        winner.appendChild(resetButton);
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const cpuChoice = getComputerChoice();
        playRound(button.value, cpuChoice);
    });
});

