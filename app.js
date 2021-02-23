


// keeps track of numbers
let playerScore = 0;
let compScore = 0; 
let rounds = 0
let maxGames = 1;
let playerSelec;

const optnBtn = document.querySelectorAll('div.optnBtn button');
const reset = document.querySelector('#reset');
optnBtn.forEach(button => button.addEventListener('click',getPlayerselec))
reset.addEventListener('click', () => location.reload() )


function getPlayerselec(e) {

let NumplayerSelec = Number(e.target.id)
// gets the  number id of button and change them into designated string name
if (NumplayerSelec === 0) playerSelec = 'Rock'
if (NumplayerSelec === 1)  playerSelec = 'Paper'
if (NumplayerSelec === 2)  playerSelec = 'Scissors'

playRound(playerSelec, computerPlay())
    
}



function playRound (playerSelection, computerSelection) {
    let winner = 'Super Bot'
    
    if(playerSelection === computerSelection ) winner = 'Tie', playerTie(playerSelection, computerSelection)
    else if (playerSelection === 'Rock') {
        if(computerSelection === 'Paper') playerLose(playerSelection, computerSelection)
        else winner = 'Big Brain', playerWin(playerSelection, computerSelection)
    }
    else if(playerSelection === 'Paper') {
        if(computerSelection === 'Scissors') playerLose(playerSelection, computerSelection)
            else winner = 'Big Brain', playerWin(playerSelection, computerSelection)
    }
    else if(playerSelection === 'Scissors') {
         if(computerSelection === 'Rock') playerLose(playerSelection, computerSelection)
            else  winner = 'Big Brain',playerWin(playerSelection, computerSelection)
        }
        
    score(winner)
    }
   

function computerPlay (){
    // this will randomly chooses either rock,paper,scissors
  
    let result = getRandomInt()
    if(result === 0) return compPlay = "Rock"
    if(result === 1) return compPlay = "Paper"
    if(result === 2) return compPlay = "Scissors"
 }
    

//this will generate number from 0-3
function getRandomInt() {
  let max = 3
  return Math.floor(Math.random() * Math.floor(max));
}

// message alert if player Wins
function playerWin(pick1,pick2){
    
    alert("You Win! " + `${pick1} ` + 'beats ' + `${pick2}`)
    
}

// message alert if player Loses
function playerLose(pick1,pick2){
    
    alert("You Lose! " + `${pick1} ` + 'Loses to ' + `${pick2}`)
 }

// message alert if player and comp TIED
function playerTie(pick1,pick2){
    alert("DRAW! " + `${pick1} ` + `Can't Beat ` + `${pick2}`)
    }


//  keeps track of Winner
function createContent(context) {
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = context

container.appendChild(content)
}

function score(winner) {
  let result = ''
    rounds += 1
    if(winner == 'Big Brain') {
        playerScore += 1
    } else if(winner == 'Super Bot') {
        compScore += 1
    } else {
         // if it was a draw
        playerScore += 1
        compScore += 1
    }
    if(rounds >= maxGames) {
       createContent(`You Have won ` + `${playerScore} `  + `out of ` + `${rounds} ` + `games!`);
    

       
    }
}


