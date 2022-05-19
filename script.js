const rps = ["rock", "paper", "scissors"];
let userSelection;
let computerSelection;

function computerPlay() {
    let rpsIndex = Math.floor(Math.random() * 3);
    computerSelection = rps[rpsIndex];
    console.log(computerSelection);
    userPlay();
}

function userPlay() {
    userSelection = prompt('Rock, paper, scissors, SHOOT:');
    userSelection.toLowerCase();

    if (computerSelection == userSelection) {
        alert('We both threw ' + computerSelection + '.');
    } else if (computerSelection == "rock" && userSelection == "scissors") {
        alert ("Rock crushes scissors! You Lose!");
    } else if (computerSelection == "rock" && userSelection == "paper") {
        alert("Paper covers rock! You Win!");
    } else if (computerSelection == "paper" && userSelection == "scissors") {
        alert("Scissors cut paper! You Win!");
    } else if (computerSelection == "paper" && userSelection == "rock") {
        alert("Paper covers rock! You Lose!");
    } else if (computerSelection == "scissors" && userSelection == "rock") {
        alert("Rock crushes scissors! You Win!");
    } else if (computerSelection == "scissors" && userSelection == "paper") {
        alert("Scissors cut paper! You Lose!");
    } else {
        alert ("That is not a rock, paper, or scissors");
    }
}