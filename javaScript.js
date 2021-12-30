function computerPlay(){
    let choices=["Rock","Paper","Scissor"];
    return randomChoice=choices[Math.floor(Math.random()*choices.length)];
}
let computerSelection=computerPlay();


function playerSelection(){
    window.playerChoice=prompt("choose your weapon");
   return "you selected "+ playerChoice.toLowerCase();
   
}
function game(){
    for(i=0;i<5;i++){
        playerSelection();
        console.log(playRound());
    }
}
let cScore=0;
let pScrore=0;

function playRound(){
    if (computerSelection ==="Rock" && playerChoice==="rock"){return "it\'s a tie, you both chose Rock tie. computer:"+cScore+" player:"+pScrore}
    else if(computerSelection==="Rock" && playerChoice==="paper"){return "you win, computer chose Rock. computer:"+cScore+" player:"+(pScrore += 1)}
    else if(computerSelection==="Rock" && playerChoice==="scissor"){return "you loose, computer chose Rock. computer:"+(cScore += 1)+" player:"+pScrore}
    else if(computerSelection==="Paper" && playerChoice==="paper"){return "it\'s a tie, you both chose Paper. computer:"+cScore+" player:"+pScrore}
    else if(computerSelection==="Paper" && playerChoice==="rock"){return "you loose, computer chose paper. computer:"+(cScore += 1)+" player:"+pScrore}
    else if(computerSelection==="Paper" && playerChoice==="scissor"){return "you win, computer chose paper. computer:"+cScore+" player:"+(pScrore += 1)}
    else if(computerSelection==="Scissor" && playerChoice==="scissor"){return "it\'s a tie, you both chose Scissor. computer:"+cScore+" player:"+pScrore}
    else if(computerSelection==="Scissor" && playerChoice==="rock"){return "you win, computer chose Scissor. computer:"+cScore+" player:"+(pScrore += 1)}
    else if(computerSelection==="Scissor" && playerChoice==="paper"){return "you loose, computer chose Scissor. computer:"+(cScore += 1)+" player:"+pScrore}
    else {return "the weapon you chose is unavailable, please choose one of the \"Rock,Paper,Scissor\""}
}
game();

