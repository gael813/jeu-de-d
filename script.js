let player1ScoreTotal   = document.getElementById("totalScorePlayer1");
let player2ScoreTotal   = document.getElementById("totalScorePlayer2");
let currentScorePlayer1 = document.getElementById("currentScorePlayer1");
let currentScorePlayer2 = document.getElementById("currentScorePlayer2");
let dotSelectedPlayer2  = document.getElementById("dotSelectedPlayer2");
let dotSelectedPlayer1  = document.getElementById("dotSelectedPlayer1");
let divided             = document.getElementById("divided");
let currentPlayer2Div   = document.getElementById("currentPlayer2Div");
let currentPlayer1Div   = document.getElementById("currentPlayer1Div");
let buttonNewGame       = document.getElementById("buttonNewGame");
let buttonRollDice      = document.getElementById("buttonRollDice");
let buttonHold          = document.getElementById("buttonHold");
let loserPlayer2        = document.getElementById("loserPlayer2");
let winnerPlayer1       = document.getElementById("winnerPlayer1");
let winnerPlayer2       = document.getElementById("winnerPlayer2");
let loserPlayer1        = document.getElementById("loserPlayer1");
var buttonHoldDiv       = document.getElementById("buttonHoldDiv");
var buttonRollDiceDiv   = document.getElementById("buttonRollDiceDiv");
var audio               = document.getElementById("audio");
var firstDice           = document.getElementById("firstDice");
var secondDice          = document.getElementById("secondDice");
var thirdDice           = document.getElementById("thirdDice");
var fourthDice          = document.getElementById("fourthDice");
var fifthDice           = document.getElementById("fifthDice");
var sixthDice           = document.getElementById("sixthDice");
var player              = null;

// Reset to Game (newGame)
buttonNewGame = buttonNewGame.addEventListener("click", newGame);

// Assigned if is player 1 or player 2
playerNull(getRandomInt(2));

// Displayed the player's selection
getPlayersChoice(player);

// Roll of the dice and sounds of dice
buttonRollDice = buttonRollDice.addEventListener("click", function() 
{
    rollDice(getRandomInt(6));
});

 // Returns current points in total points
buttonHold = buttonHold.addEventListener("click", function()
{
    totalReturns(player);
    if (player == "player1")
    {
        player                        = "player2";
        currentScorePlayer1.innerHTML = 0;
        getPlayersChoice(player);        
    }
    else if (player == "player2")
    {
        player                        = "player1";
        currentScorePlayer2.innerHTML = 0;
        getPlayersChoice(player);
        
    }
    // Display Winner / Loser
    winnerLoser(player1ScoreTotal, player2ScoreTotal);
});

