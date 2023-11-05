function getComputerChoice(){
    let randomValue = Math.floor(Math.random() * 3);
    if(randomValue === 0){
        return "Rock";
    }
    else if(randomValue === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You Win! ${capitalize(playerSelection)} beats ${computerSelection}`;
    } else {
        return `You Lose! ${capitalize(computerSelection)} beats ${playerSelection}`;
    }
}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    while(playerScore < 5 && computerScore < 5){
        playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = getComputerChoice();
        let returnedString = playRound(playerSelection,computerSelection);
        if(returnedString.startsWith("You Win")){
            playerScore++;
        }
        else if(returnedString.startsWith("You Lose")){
            computerScore++;
        }
    }
    if(playerScore === 5){
        return "Congratulations, you won!"
    }
    else{
        return "You lost, computer reached 5 points before you."
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));