let round;
let quitgame;
function getplayermove(){
    let playermove = prompt("Rock, Paper, Scissors!" + "\nRound: " + round +  "\n" + "'quit' to quit.");
    playermove = playermove.toLowerCase();
    while (playermove === null || (playermove != "rock" && playermove != "paper" && playermove != "scissors" && playermove != "quit"))
    playermove = prompt("Enter a correct move, not " + '"' + playermove + '"' + ".")
    return playermove;
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
function game(){
    let playerscore = 0;
    let cpuscore = 0; 
    let draws = 0;
    let playermove;
    let cpumove;
    let WinConMove;
    quitgame = false;
    for (let i = 1; i <= 5; i++){
        round = i;
        playermove = getplayermove();
        cpumove = getcpumove();
        WinConMove = WinCon(playermove,cpumove);
        if (quitgame)
            return;
        if (WinConMove == playermove){
            playerscore++;
            alert("You Won by playing " + playermove + " against their " + cpumove);
        }
        else if (WinConMove == cpumove){
            cpuscore++;
            alert("CPU Won by playing " + cpumove + " against your " + playermove);
        }
        else{
            draws++;
            alert("Draw! Both of you played " + playermove);
        }
        alert("Your score: " + playerscore + "\nbeep boop's score: " + cpuscore + "\nDraws: " + draws);
    }
    if (playerscore > cpuscore)
        alert("You won the round!");
    else if (playerscore < cpuscore)
        alert("CPU won the round!");
    else
        alert("It is a draw.")
    alert("final score: " + playerscore + " : " + cpuscore + " : " + draws);
}
let playagain;
do{
game();
if (quitgame)
break;
else
confirm("play again?") == true? playagain = true:playagain = false;
}while(playagain);