let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



// Write your code below:
// Return a random integer
function generateTarget(){
  return Math.floor(Math.random() * 10)
  
}

// Get the distance between target and guessed numbers
function getAbsoluteDistance(number_guessed, target_number){
    
    return Math.abs(number_guessed - target_number)
  }
 // Compare guesses and return true if player wins
function compareGuesses(human, computer, target){
    const human_difference = getAbsoluteDistance(human, target)
    const computer_difference = getAbsoluteDistance(computer, target)
    alert(human)
    return human_difference <= computer_difference

}
// Update scores of player accordingly
function updateScore(winner){
  if (winner === 'human') {
    humanScore += 1
  }else if (winner === 'computer') {
    computerScore += 1
  }
}

// Update number of rounds
function advanceRound() {
  currentRoundNumber += 1
}

// Give feeback. Make sure user's guess is within range
function alert(user_guess){
    if (user_guess < 0 ||  user_guess > 10) {
        return 'Your number is out of range'
    }
}

