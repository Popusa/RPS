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
function WinCon(){
    
}
for (let i = 0; i < 15; i++){
    let x = getcpumove();
    console.log(x);
}