let player1ScoreTotal;
let player2ScoreTotal;
let currentScorePlayer1;
let currentScorePlayer2;



function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

function getPlayersChoice(getRandomInt)
{
    if (getRandomInt == 0)
    {
        player1ScoreTotal = document.getElementById("totalScorePlayer1");
        currentScorePlayer1 = document.getElementById("currentScorePlayer1");
        document.getElementById("dotSelectedPlayer2").style.display = "none";
        document.getElementById("divided").style.left = "5%";
        document.getElementById("currentPlayer2Div").style.backgroundColor = "grey";
        console.log(player1ScoreTotal);
    }
    else
    {
        player2ScoreTotal = document.getElementById("totalScorePlayer2");
        currentScorePlayer2 = document.getElementById("currentScorePlayer2");
        document.getElementById("dotSelectedPlayer1").style.display = "none";
        document.getElementById("divided").style.left = "50%";
        document.getElementById("currentPlayer1Div").style.backgroundColor = "grey";
    }
}

function getPlayers(getPlayersChoice)
{
    
}

console.log(getPlayersChoice(getRandomInt(2)));