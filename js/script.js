function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3) ;
    if (randomNum === 0) {
        randomNum = 'scissors'
    } else if (randomNum === 1){
        randomNum = 'rock'
    }
    else {
        randomNum = 'paper'
    }
    return randomNum; 
}
function  getHumanChoice(){
    zaza = prompt('choose sth',"");
    return zaza.toLowerCase();
}

function playGame(){
        let humanScore = 0;
    let computerScore = 0;
    for (let i = 0 ; i < 5 ; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
    
function playRound(humanChoice,computerChoice){
    
if (humanChoice === computerChoice ){
     console.log(`Its's a tie! You both chose ${humanChoice}`);
}
else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++ ;
    console.log('You win! Scissors beats Paper');
}else if (humanChoice === 'scissors' && computerChoice === 'rock'){
    computerScore++
    console.log('You lose! Rock beats Scissors');
}
 else if (humanChoice === 'rock' && computerChoice === 'paper'){
    computerScore++
    console.log('You lose! Paper beats Rock');
}
 else if (humanChoice === 'rock' && computerChoice === 'scissors'){
    humanScore++ ;
    console.log('You win! Rock beats Scissors');
    } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
   computerScore++
    console.log('You lose! Scissors beats Paper');
}  else if (humanChoice === 'paper' && computerChoice === 'rock'){
 humanScore++ ;
    console.log('You win! Paper beats Rock');
}
}

console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);
if (humanScore > computerScore){
    console.log('CONGRATULATIONS! You won the game!')
} else if(humanScore < computerScore) {
    console.log('GAME OVER! You lost the game')
} else console.log('It`s a DRAW!!!')
}


playGame()