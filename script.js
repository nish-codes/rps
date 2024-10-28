let humanscore = 0;
let computerscore = 0;
function getcomputerchoice(){
    let choice  = ["rock","paper","scissor"];
    return choice[Math.floor((Math.random()*3))]
}
console.log(getcomputerchoice())
function gethumanchoice(){
    return prompt("enter your choice").toLowerCase()
}
function playround(human,computer){
   let humanchoice = human();
   let computerchoice = computer();
   if(humanchoice == computerchoice){
    console.log("Tied");
   }
   else{
    if(humanchoice =="rock" && computerchoice =="scissor" || (humanchoice =="paper" && computerchoice =="rock") || (humanchoice =="scissor" && computerchoice == "paper")){
     console.log("You won");
     humanscore++;
   }
   else{
    console.log("You lose")
    computerscore++;
   }
}
}
function playgame(){
    for(let i=0;i<5;i++){
        playround(gethumanchoice,getcomputerchoice);

       
    }

}
playgame()


console.log(humanscore)
console.log(computerscore)