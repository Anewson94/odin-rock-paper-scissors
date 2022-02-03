// Computers three choices
function computerPlay() {
    let oneToThree = Math.floor(Math.random() * 3 +1);
    if (oneToThree === 1) 
        return "rock";
    else if (oneToThree === 2)
        return "paper";
    else if (oneToThree === 3)
        return "scissors";
}
// Players choices
function playerPlay() {
    playerChoice = prompt("Rock, Paper or Scissors?")
    playerChoiceLower = playerChoice.toLowerCase()
    const choices = ["rock", "paper", "scissors"]
    if (playerChoiceLower == "rock") {
        playerChoiceLower = choices[0]
        return playerChoiceLower;
    }
    else if (playerChoiceLower == "paper") {
        playerChoiceLower = choices[1]
        return playerChoiceLower;
    }
    else if (playerChoiceLower == "scissors") {
        playerChoiceLower = choices[2]
        return playerChoiceLower;
    }
    else; 
        return "Please try again..."
    
}
// Win varialbles
let playerWins = 0;
let computerWins = 0;

// Single round of play with playerPlay and computerPlay
function playRound() {
    let playerTurns = playerPlay();
    const computerTurn = computerPlay();
    const loseMessage = "You lost this round!"
    const winMessage = "You won this round!"
    if (playerTurns == computerTurn) {
        return "It's a tie!";
    }
    else if (playerTurns == "rock" && computerTurn == "paper") {
        computerWins++
        return  loseMessage;
    }
    else if (playerTurns == "rock" && computerTurn == "scissors") {
        playerWins++
        return  winMessage;
    }
    else if (playerTurns == "paper" && computerTurn == "rock") {
        playerWins++
        return winMessage;
    }
    else if (playerTurns == "paper" && computerTurn == "scissors") {
        computerWins++
        return loseMessage
    }
    else if (playerTurns == "scissors" && computerTurn == "paper") {
        playerWins++
        return winMessage;
    }
    else if (playerTurns == "scissors" && compterTurn == "rock") {
        computerWins++
        return loseMessage;
    }
}

// Five Games total + Reuslts
function game() {
    let results = []
    for (i = 0; i < 5; i++) {
        results.push(playRound(i))
    }
    return [
        results,
        "Computer wins: "+computerWins,
        "Player wins "+playerWins
        ]
}

// console.log(computerPlay())
// console.log(playerTurn())
// console.log(playRound())
console.log(game())