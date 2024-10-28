let humanscore = 0;
let computerscore = 0;
function getcomputerchoice(){
    let choice  = ["rock","paper","scissor"];
    return choice[Math.floor((Math.random()*3))]
}


function playround(human,computer){
   let humanchoice = human;
   let computerchoice = computer();
   if(humanchoice == computerchoice){
    winner.textContent = "Tied!!"
   }
   else{
    if(humanchoice =="rock" && computerchoice =="scissor" || (humanchoice =="paper" && computerchoice =="rock") || (humanchoice =="scissor" && computerchoice == "paper")){
     winner.textContent = "You won!!!"
     humanScore.textContent = ++humanscore;
     
   }
   else{
    winner.textContent = "You Loses"
    computerScore.textContent = ++computerscore;
   }
}
}

const humanScore = document.querySelector(".human_score")
const computerScore = document.querySelector(".computer_score")

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
const playAgain = document.querySelector(".play-again")
const winner = document.querySelector(".winner")
rock.addEventListener('click',()=>{
    playround("rock",getcomputerchoice)
    
})
paper.addEventListener('click',()=>{
    playround("paper",getcomputerchoice)
})
scissor.addEventListener('click',()=>{
    playround("scissor",getcomputerchoice)
})
humanScore.textContent = humanscore;
computerScore.textContent = computerscore;
playAgain.addEventListener('click',()=>{
    location.reload()
})