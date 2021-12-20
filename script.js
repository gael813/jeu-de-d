let player1ScoreTotal   = document.getElementById("totalScorePlayer1");
let player2ScoreTotal   = document.getElementById("totalScorePlayer2");
let currentScorePlayer1 = document.getElementById("currentScorePlayer1");
let currentScorePlayer2 = document.getElementById("currentScorePlayer2");
let buttonNewGame       = document.getElementById("buttonNewGame");
let buttonRollDice      = document.getElementById("buttonRollDice");
let buttonHold          = document.getElementById("buttonHold");
var player              = null;

// Assigned if is player 1 or player 2
playerNull(getRandomInt(2));

// Displayed the player's selection
getPlayersChoice(player);

// Reset to Game (newGame)
buttonNewGame = buttonNewGame.addEventListener("click", newGame);

// Roll of the dice and sounds of dice
buttonRollDice = buttonRollDice.addEventListener("click", function() 
{
    rollDice(getRandomInt(6));
});

 // Returns current points in total points
buttonHold = buttonHold.addEventListener("click", function()
{
    totalReturns(player);
});