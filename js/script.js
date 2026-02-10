console.log('hello world')
// create function called getrandomNum that return one of [rock, paper, scissors]
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

console.log(getComputerChoice());

/*  function that takes user input and prints it */ 
function  getHumanChoice(){
    zaza = prompt('choose sth',"");
    return zaza;
}
console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice){
    
if (humanChoice.toLowerCase() === computerChoice ){
     console.log('It is a tie');
}
else if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
    humanScore++ ;
    return'you win';
}else if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock'){
    computerScore++
    return 'You lose';
        
}
 else if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper'){
    computerScore++
    return 'You lose';
}
 else if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'scissors'){
    humanScore++ ;
    return'you win';
    } else if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors'){
   computerScore++
    return 'You lose';
}  else if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock'){
 humanScore++ ;
    return'you win';
}
}
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));