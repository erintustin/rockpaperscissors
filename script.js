const rps = ["rock", "paper", "scissors"];

function computerPlay() {
    let rpsIndex = Math.floor(Math.random() * 3);
    let computerSelection = rps[rpsIndex];
    console.log(computerSelection);

    let playerSelection = prompt('Rock, paper, scissors, SHOOT:');
    playerSelection.toLowerCase();
    if (computerSelection = playerSelection) {
        alert('We both threw ' + computerSelection + '. Best 2/3?');
        
    }

}