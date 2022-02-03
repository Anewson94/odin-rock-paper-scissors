function computerPlay() {
    let oneToThree = Math.floor(Math.random() * 3 +1);
    if (oneToThree === 1) 
        return "rock";
    else if (oneToThree === 2)
        return "paper";
    else if (oneToThree === 3)
        return "scissors";
}
// console.log(computerPlay())



function playRound(playerSelection, computerSelection) {
    const playerLower = playerSelection.toLowerCase();
    if (playerLower === computerSelection)
        return "It was a tie!";
    else if (playerLower == "rock" && computerSelection == "scissors")
        return "Rock breaks scissors, You Win!";
    else if (playerLower == "rock" && computerSelection == "paper")
        return "Paper covers rock, you lose!";
    else if (playerLower == "paper" && computerSelection == "scissors")
        return "Scissors cuts paper, you lose!";
    else if (playerLower == "paper" && computerSelection == "rock")
        return "Paper covers rock, you win!";
    else if (playerLower == "scissors" && computerSelection == "rock")
        return "Rock breaks scissors, you lose!";
    else if (playerLower == "scissors" && computerSelection == "paper")
        return "Scissors cuts paper, you lose!";
    else;
        return "Please try again."
}
// const playerSelection = prompt("Rock, Paper or Scissors")
// const computerSelection = computerPlay()
// let playPlay = playRound(playerSelection, computerSelection)
// console.log(playRound(playerSelection, computerSelection))

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors")
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
        
        return playRound();
    }
}

console.log(game())

