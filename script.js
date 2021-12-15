let player1ScoreTotal;
let player2ScoreTotal;
let currentScorePlayer1;
let currentScorePlayer2;
let buttonNewGame;
let buttonRollDice;
let firstDice = document.getElementById("firstDice");
let secondDice = document.getElementById("secondDice");
let thirdDice = document.getElementById("thirdDice");
let fourthDice = document.getElementById("fourthDice");
let fifthDice = document.getElementById("fifthDice");
let sixthDice = document.getElementById("sixthDice");

// Random number 
function getRandomInt(max) 
{
    return Math.floor(Math.random() * max + 1);
}

// Display players selection
function getPlayersChoice(getRandomInt)
{
    let players = null;
    if (getRandomInt == 1)
    {
        player1ScoreTotal = document.getElementById("totalScorePlayer1");
        currentScorePlayer1 = document.getElementById("currentScorePlayer1");
        document.getElementById("dotSelectedPlayer2").style.display = "none";
        document.getElementById("divided").style.left = "5%";
        document.getElementById("currentPlayer2Div").style.backgroundColor = "grey";
        player = "player1";
    }
    else
    {
        player2ScoreTotal = document.getElementById("totalScorePlayer2");
        currentScorePlayer2 = document.getElementById("currentScorePlayer2");
        document.getElementById("dotSelectedPlayer1").style.display = "none";
        document.getElementById("divided").style.left = "50%";
        document.getElementById("currentPlayer1Div").style.backgroundColor = "grey";
        player = "player2";
    }
}
getPlayersChoice(getRandomInt(2));

// Reset to Game
buttonNewGame = document.getElementById("buttonNewGame").addEventListener("click", newGame);
function newGame() 
{
    player1ScoreTotal = document.getElementById("totalScorePlayer1");
    player1ScoreTotal.innerHTML = 0;
}

// Roll of the dice
buttonRollDice = document.getElementById("buttonRollDice").addEventListener("click", function()
{
    rollDice(getRandomInt(6));
});

function rollDice(getRandomInt) 
{
    let audio = document.getElementById("audio");
    audio.play();
    if (getRandomInt == 1)
    {
        firstDice.style.display = "flex";
        secondDice.style.display = "none";
        thirdDice.style.display = "none";
        fourthDice.style.display = "none";
        fifthDice.style.display = "none";
        sixthDice.style.display = "none";
        if (player == "player1")
        {
            currentScorePlayer1 = document.getElementById("currentScorePlayer1");
            currentScorePlayer1.innerHTML = 0;
        }
        else if (player == "player2")
        {
            currentScorePlayer2 = document.getElementById("currentScorePlayer2");
            currentScorePlayer2.innerHTML = 0;
        }
    }
    else if (getRandomInt == 2)
    {        
        firstDice.style.display = "none";
        secondDice.style.display = "flex";
        thirdDice.style.display = "none";
        fourthDice.style.display = "none";
        fifthDice.style.display = "none";
        sixthDice.style.display = "none";
        if (player == "player1")
        {
            currentScorePlayer1 = document.getElementById("currentScorePlayer1");
            currentScorePlayer1 = currentScorePlayer1 + 2;
            currentScorePlayer1.innerHTML = currentScorePlayer1;
        }
        else if (player == "player2")
        {
            currentScorePlayer2 = document.getElementById("currentScorePlayer2");
            currentScorePlayer2 = currentScorePlayer2 + 2;
            currentScorePlayer2.innerHTML = currentScorePlayer2;
        }
    } 
    else if (getRandomInt == 3)
    {        
        firstDice.style.display = "none";
        secondDice.style.display = "none";
        thirdDice.style.display = "flex";
        fourthDice.style.display = "none";
        fifthDice.style.display = "none";
        sixthDice.style.display = "none";
        if (player == "player1")
        {
            currentScorePlayer1 = document.getElementById("currentScorePlayer1");
            currentScorePlayer1 = currentScorePlayer1 + 3;
            currentScorePlayer1.innerHTML = currentScorePlayer1;
        }
        else if (player == "player2")
        {
            currentScorePlayer2 = document.getElementById("currentScorePlayer2");
            currentScorePlayer2 = currentScorePlayer2 + 3;
            currentScorePlayer2.innerHTML = currentScorePlayer2;
        }
    }
    else if (getRandomInt == 4)
    {        
        firstDice.style.display = "none";
        secondDice.style.display = "none";
        thirdDice.style.display = "none";
        fourthDice.style.display = "flex";
        fifthDice.style.display = "none";
        sixthDice.style.display = "none";
        if (player == "player1")
        {
            currentScorePlayer1 = document.getElementById("currentScorePlayer1");
            currentScorePlayer1 = currentScorePlayer1 + 4;
            currentScorePlayer1.innerHTML = currentScorePlayer1;
        }
        else if (player == "player2")
        {
            currentScorePlayer2 = document.getElementById("currentScorePlayer2");
            currentScorePlayer2 = currentScorePlayer2 + 4;
            currentScorePlayer2.innerHTML = currentScorePlayer2;
        }
    } 
    else if (getRandomInt == 5)
    {        
        firstDice.style.display = "none";
        secondDice.style.display = "none";
        thirdDice.style.display = "none";
        fourthDice.style.display = "none";
        fifthDice.style.display = "flex";
        sixthDice.style.display = "none";
        if (player == "player1")
        {
            currentScorePlayer1 = document.getElementById("currentScorePlayer1");
            currentScorePlayer1 = currentScorePlayer1 + 5;
            currentScorePlayer1.innerHTML = currentScorePlayer1;
        }
        else if (player == "player2")
        {
            currentScorePlayer2 = document.getElementById("currentScorePlayer2");
            currentScorePlayer2 = currentScorePlayer2 + 5;
            currentScorePlayer2.innerHTML = currentScorePlayer2;
        }
    } 
    else if (getRandomInt == 6)
    {        
        firstDice.style.display = "none";
        secondDice.style.display = "none";
        thirdDice.style.display = "none";
        fourthDice.style.display = "none";
        fifthDice.style.display = "none";
        sixthDice.style.display = "flex";
        if (player == "player1")
        {
            currentScorePlayer1 = document.getElementById("currentScorePlayer1");
            currentScorePlayer1 = currentScorePlayer1 + 6;
            currentScorePlayer1.innerHTML = currentScorePlayer1;
        }
        else if (player == "player2")
        {
            currentScorePlayer2 = document.getElementById("currentScorePlayer2");
            currentScorePlayer2 = currentScorePlayer2 + 6;
            currentScorePlayer2.innerHTML = currentScorePlayer2;
        }
    }
}






function getPlayers(getPlayersChoice)
{
    
}

