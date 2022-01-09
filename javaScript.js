let computerSelection;
function computerPlay(){
    let choices=["Rock","Paper","Scissor"];
   computerSelection=choices[Math.floor(Math.random()*choices.length)];
}

let playerChoice;
function playerSelection(clicked_id){
    playerChoice=clicked_id;
}

function play(clicked_id){
    if(!(cScore===5 || pScrore===5)){
    playerSelection(clicked_id)
    computerPlay()
    scoore();

    if(cScore===5 || (pScrore===5)){
        if(cScore===5){scoor.textContent+=' you Loose'}
        else if(pScrore===5){scoor.textContent+=` you Win`}
else return
    }
}
}

let scoor=document.querySelector(".scoor");
let cScore=0;
let pScrore=0;

function scoore(){
    if (computerSelection ==="Rock" && playerChoice==="rock"){scoor.textContent=`computer:${cScore}-${pScrore}:player*it's a tie`}
    else if(computerSelection==="Rock" && playerChoice==="paper"){scoor.textContent=`computer:${cScore}-${pScrore+=1}:player`}
    else if(computerSelection==="Rock" && playerChoice==="scissor"){scoor.textContent=`computer:${cScore+=1}-${pScrore}:player`}
    else if(computerSelection==="Paper" && playerChoice==="paper"){scoor.textContent=`computer:${cScore}-${pScrore}:player*it's a tie`}
    else if(computerSelection==="Paper" && playerChoice==="rock"){scoor.textContent=`computer:${cScore+=1}-${pScrore}:player`}
    else if(computerSelection==="Paper" && playerChoice==="scissor"){scoor.textContent=`computer:${cScore}-${pScrore+=1}:player`}
    else if(computerSelection==="Scissor" && playerChoice==="scissor"){scoor.textContent=`computer:${cScore}-${pScrore}:player*it's a tie`}
    else if(computerSelection==="Scissor" && playerChoice==="rock"){scoor.textContent=`computer:${cScore}-${pScrore+=1}:player`}
    else if(computerSelection==="Scissor" && playerChoice==="paper"){scoor.textContent=`computer:${cScore+=1}-${pScrore}:player`}
    else {return "the weapon you chose is unavailable, please choose one of the \"Rock,Paper,Scissor\""}
}

function showWeapons(){
    let weapons=Array.from(document.querySelectorAll(".weapons"));
let btn=document.querySelector('button');
let scoor=document.querySelector(".scoor");
let i;

for(i=0;i<weapons.length;i++){

      weapons[i].style.display = "inline";
    
}

btn.style.display='none';
    scoor.style.display='flex';
}
  
