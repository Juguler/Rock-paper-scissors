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
let roundWinner = ''
let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        roundWinner = "Tie"
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        roundWinner = "Player"
        playerScore++
    } else {
        roundWinner = "Computer"
        computerScore++
    }
    updateScoreNotification(roundWinner, playerSelection, computerSelection)
}
function updateScoreNotification(roundWinner, playerSelection, computerSelection) {
    if (roundWinner === 'Player') {
        description.textContent = `${capitalize(playerSelection)} beats ${computerSelection}`
      return
    }
    else if (roundWinner === 'Computer') {
        description.textContent = `${capitalize(computerSelection)} beats ${playerSelection}`
      return
    }
    description.textContent = `${capitalize(playerSelection)} ties with ${capitalize(computerSelection)}`
}
function updateScore() {
    if (roundWinner === 'Tie') {
        currState.textContent = "It's a tie!"
    } else if (roundWinner === 'Player') {
        currState.textContent = 'You won!'
    } else if (roundWinner === 'Computer') {
        currState.textContent = 'You lost!'
    }
  
    playerScoreContent.textContent = `Player: ${playerScore}`
    computerScoreContent.textContent = `Computer: ${computerScore}`
}
const currState = document.getElementById('currState')
const description = document.getElementById('description')
const playerScoreContent = document.getElementById('playerScore')
const computerScoreContent = document.getElementById('computerScore')
const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
rockButton.addEventListener('click', () => handleClick('Rock'))
paperButton.addEventListener('click', () => handleClick('Paper'))
scissorsButton.addEventListener('click', () => handleClick('Scissors'))

function handleClick(playerSelection) {
    if(playerScore === 5 || computerScore === 5) {
        disableButtons()
        if(playerScore === 5){
           currState.textContent = "Congratulations, you won!"
           description.textContent = "Refresh the page to play again." 
        }
        else {
            currState.textContent = "You lost, computer reached 5 points before you."
            description.textContent = "Refresh the page to try your chance again."
        }
    }

    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    updateScore()

    if(playerScore === 5 || computerScore === 5) {
        disableButtons()
        if(playerScore === 5){
           currState.textContent = "Congratulations, you won!"
           description.textContent = "Refresh the page to play again."
        }
        else {
            currState.textContent = "You lost, computer reached 5 points before you."
            description.textContent = "Refresh the page to try your chance again."
        }
    }
  }
  function disableButtons() {
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}