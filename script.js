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
let sicthDice = document.getElementById("sicthDice");

// Random number 
function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

// Display players selection
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

buttonNewGame = document.getElementById("buttonNewGame").addEventListener("click", newGame);

function newGame() 
{
    player1ScoreTotal = document.getElementById("totalScorePlayer1");
    player1ScoreTotal.innerHTML = 0;
}

buttonRollDice = document.getElementById("buttonRollDice")
buttonRollDice.addEventListener("click", rollDice);

function rollDice(getRandomInt) 
{
    getRandomInt + 1;
    if (getRandomInt == 1)
    {
        firstDice.style.display = "flex";
        secondDice.style.display = "none";
        thirdDice.style.display = "none";
        fourthDice.style.display = "none";
        firstDice.style.display = "none";
        sixthDice.style.display = "none";
    }
    else if (getRandomInt == 2)
    {        
        firstDice.style.display = "none";
        secondDice.style.display = "flex";
        thirdDice.style.display = "none";
        fourthDice.style.display = "none";
        firstDice.style.display = "none";
        sixthDice.style.display = "none";
    } 
    else if (getRandomInt == 3)
    {        
        firstDice.style.display = "none";
        secondDice.style.display = "none";
        thirdDice.style.display = "flex";
        fourthDice.style.display = "none";
        firstDice.style.display = "none";
        sixthDice.style.display = "none";
    }
    else if (getRandomInt == 4)
    {        
        firstDice.style.display = "none";
        secondDice.style.display = "none";
        thirdDice.style.display = "none";
        fourthDice.style.display = "flex";
        firstDice.style.display = "none";
        sixthDice.style.display = "none";
    } 
    else if (getRandomInt == 5)
    {        
        firstDice.style.display = "none";
        secondDice.style.display = "none";
        thirdDice.style.display = "none";
        fourthDice.style.display = "none";
        firstDice.style.display = "flex";
        sixthDice.style.display = "none";
    } 
    else if (getRandomInt == 6)
    {        
        firstDice.style.display = "none";
        secondDice.style.display = "none";
        thirdDice.style.display = "none";
        fourthDice.style.display = "none";
        firstDice.style.display = "none";
        sixthDice.style.display = "flex";
    }
}






function getPlayers(getPlayersChoice)
{
    
}

getPlayersChoice(getRandomInt(2));

console.log(rollDice(getRandomInt(5)));