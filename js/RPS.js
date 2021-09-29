function getplayermove(){
    let playermove = prompt("Enter a move, Rock, Paper, or Scissors.");
    playermove = playermove.toLowerCase();
    if (playermove != "rock" && playermove != "paper" && playermove != "sicssors"){
        alert("Enter a valid move.");
        getplayermove();
    }
    else
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
            else if (cpu == "paper")
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
    }
}
function game(){
    let playerscore;
    let cpuscore;
    let playermove;
    let cpumove;
    let WinConMove;
    for (let i = 0; i < 5; i++){
        playermove = getplayermove();
        cpumove = getcpumove();
        WinConMove = WinCon(playermove,cpumove);
        if (WinConMove == playermove){
            playerscore++;
            alert("Player won by playing " + playermove + " and it beats " + cpumove);
        }
        else if (WinConMove == cpumove){
            cpuscore++;
            alert("CPU won by playing " + cpumove + " and it beats " + playermove);
        }
        else
            alert("It's a tie! Both moves were " + WinConMove);
    }
}
game();