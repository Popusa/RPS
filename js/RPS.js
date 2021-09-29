function getplayermove(){
    let playermove = prompt("Rock, Paper, Scissors!");
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
            return "quitgame";
            break;
    }
}
function game(){
    let playerscore = 0;
    let cpuscore = 0; 
    let playermove;
    let cpumove;
    let WinConMove;
    for (let i = 0; i < 5; i++){
        playermove = getplayermove();
        cpumove = getcpumove();
        WinConMove = WinCon(playermove,cpumove);
        if (WinConMove == playermove){
            playerscore++;
            alert("You Won by playing " + playermove + " against their " + cpumove);
        }
        else if (WinConMove == cpumove){
            cpuscore++;
            alert("CPU Won by playing " + cpumove + " against your " + playermove);
        }
        else if (WinConMove == "quitgame")
            return;
        else
            alert("Tie! Both of you played " + playermove);
        alert("Your score: " + playerscore + "\nbeep boop's score: " + cpuscore);
    }
    if (playerscore > cpuscore)
        alert("You won the round!");
    else if (playerscore < cpuscore)
        alert("CPU won the round!");
    else
        alert("It is a draw.")
    alert("final score: " + playerscore + " : " + cpuscore);
}
game();