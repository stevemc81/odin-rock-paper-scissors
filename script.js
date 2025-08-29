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

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function playRound(humanChoice, computerChoice) {
    const round = document.querySelector("#round");
    const score = document.querySelector("#score");
    const winner = document.querySelector("#winner");

    console.log(`Computer chose: ${computerChoice}`);
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        round.textContent = `It's a tie! You both chose ${humanChoice}.`;
        return;
    }

    switch (humanChoice.toLowerCase()) {
        case "rock":
            if (computerChoice === "paper") {
                round.textContent = "You lost! Rock loses to paper.";
                computerScore++;
                break;
            } else {
                round.textContent = "You won! Rock beats scissors.";
                humanScore++;
                break;
            }
        case "paper":
            if (computerChoice === "rock") {
                round.textContent = "You won! Paper beats rock.";
                humanScore++;
                break;
            } else {
                round.textContent = "You lost! Paper loses to scissors.";
                computerScore++;
                break;
            }
        case "scissors":
            if (computerChoice === "rock") {
                round.textContent = "You lost! Scissors loses to rock.";
                computerScore++;
                break;
            } else {
                round.textContent = "You won! Scissors beats paper.";
                humanScore++;
                break;
            }
        default:
            round.textContent = "You didn't choose rock, paper or scissors :-(";
    }


    // while (rounds < 5) {
    //     cpuChoice = getComputerChoice();
    //     playRound(getHumanChoice(), cpuChoice);
    //     rounds++;
    // }

    console.log(`The final score:
        Human: ${humanScore}
        Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Humans won! Quick, unplug Skynet while you still can.");
    } else if (humanScore < computerScore) {
        console.log("Hasta la vista, baby! The robots won this time.")
    } else {
        console.log("It was a draw this time.")
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const cpuChoice = getComputerChoice();
        playRound(button.value, cpuChoice);
    });
});

