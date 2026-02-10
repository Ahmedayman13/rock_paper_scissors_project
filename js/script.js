console.log('hello world')
// create function called getComputerChoice that return one of [rock, paper, scissors]
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) ;
    if (computerChoice === 0) {
        computerChoice = 'scissors'
    } else if (computerChoice === 1){
        computerChoice = 'rock'
    }
    else {
        computerChoice = 'paper'
    }
    return computerChoice; 
}

console.log(getComputerChoice());

/*  function that takes user input and prints it */ 
function  getHumanChoice (){
    humanChoice = prompt('choose sth',"");
    return humanChoice;
}
console.log(getHumanChoice())