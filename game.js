const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper'||userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('ERROR - You need to choose from: rock, paper or scissors.')
    }
  };
  //console.log(getUserChoice('rock'));
  
const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
        return 'rock';
    case 1:
        return 'paper';
    case 2:
        return 'scissors';
    }
}
//console.log(getComputerChoice() + ' locked in by PC.');

function determineWinner(userChoice, ComputerChoice){
    if(userChoice === 'bomb'){
        return 'You detroyed your opponent! Congrats!';
    }
    if(userChoice === ComputerChoice){
       return 'The game is a tie.';
   }  if(userChoice === 'rock'){
        if(ComputerChoice === 'paper'){
            return 'Computer WON.';
       }
   } else {
         return 'You Won!';
   }
   if(userChoice === 'paper'){
       if(ComputerChoice === 'scissors'){
           return 'The computer won.';
       } 
   } else {
         return 'You won!';
   }
   if(userChoice === 'scissors'){
       if(ComputerChoice === 'rock'){
           return 'The computer won.';
       } else {
            return 'You won';
       }
   }
}
//console.log(determineWinner(getUserChoice('rock'), getComputerChoice()));
//console.log(determineWinner('rock','scissors'))

const playGame = () =>{
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log("Your choice is: " + userChoice);
    console.log("The computers choice is: " + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
}

playGame();
