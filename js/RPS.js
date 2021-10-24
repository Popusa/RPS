const Rocky = document.querySelector("#RockChoice");
const Papey = document.querySelector("#PaperChoice");
const Scissory = document.querySelector("#ScissorsChoice");
const mainscore = document.getElementById('player');
const aiscore = document.getElementById('cpu');
const drawscore = document.getElementById('draw');
const rounds = document.getElementById('round');
const resetbutton = document.getElementById('reset');
let playerscore = 0;
let cpuscore = 0; 
let draws = 0;
let round = 1;
let GameEnded = false;
function reset(){
     playerscore = 0;
     cpuscore = 0; 
     draws = 0;
     round = 1;
     GameEnded = false; 
     mainscore.innerText = "Your Score: " + playerscore;
     aiscore.innerText = "Cpu's Score: " + cpuscore;
     drawscore.innerText = "Draws: " + draws;
     rounds.innerText = "Round: " + round;
}
function getcpumove(){
    let cpumove = Math.floor(Math.random() * 3) + 1
    switch (cpumove){
        case 1:
            cpumove = "rock";
            break;
        case 2:
            cpumove = "paper";
            break;
        case 3:
            cpumove = "scissors";
            break;
    }
    return cpumove;
}
function WinCon(playermove,cpumove){
    switch(playermove){
        case "rock":
            if (cpumove == "scissors")
            return playermove;
            else if (cpumove == "paper")
            return cpumove;
            else
            return "DRAW";
            break;
        case "paper":
            if (cpumove == "rock")
            return playermove;
            else if (cpumove == "scissors")
            return cpumove;
            else
            return "DRAW";
            break;
        case "scissors":
            if (cpumove == "paper")
            return playermove;
            else if (cpumove == "rock")
            return cpumove;
            else
            return "DRAW";
            break;
        case "quit":
            quitgame = true;
            break;
    }
}
function game(playermove){
    let cpumove;
    let WinConMove;
        cpumove = getcpumove();
        WinConMove = WinCon(playermove,cpumove);
        if (WinConMove == playermove){
            playerscore++;
            mainscore.innerText = "Your Score: " + playerscore;
            rounds.innerText = "Round: " + round + " Won!" + "\n" + playermove + " beats " + cpumove;
        }
        else if (WinConMove == cpumove){
            cpuscore++;
            aiscore.innerText = "Cpu's Score: " + cpuscore;
            rounds.innerText = "Round: " + round + " Lost!" + "\n" + cpumove + " beats " + playermove;
        }
        else{
            draws++;
            drawscore.innerText = "Draws: " + draws;
            rounds.innerText = "Round: " + round + " Draw!" + "\n" + playermove + " on " + playermove +" action!";
        }
        round++;
        if (playerscore == 5){
        rounds.innerText = "Player Won in " + (round - 1) + " rounds!";
        GameEnded = true;       
        }
        else if (cpuscore == 5){
        rounds.innerText = "Cpu Won in " + (round - 1) + " rounds!";
        GameEnded = true;
        }
}
resetbutton.addEventListener('click',reset);
Rocky.addEventListener('click',function(){
    if (GameEnded)
    return;
    else{
    console.log("You have chosen... rock.");
    game("rock");
    }
});
Papey.addEventListener('click',function(){
    if (GameEnded)
    return;
    else{
    console.log("You have chosen... paper.");
    game("paper");
    }
});
Scissory.addEventListener('click',function(){
    if (GameEnded)
    return;
    else{
    console.log("You have chosen... scissors.");
    game("scissors");
    }
});
rounds.innerText = "Round: " + round;
mainscore.innerText = "Your Score: " + playerscore;
aiscore.innerText = "Cpu's Score: " + cpuscore;
drawscore.innerText = "Draws: " + draws;