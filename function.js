// Random number 
function getRandomInt(max) 
{
    return Math.floor(Math.random() * max + 1);
}

// Assigned if is player 1 or player 2
function playerNull(getRandomInt)
{
    if (player == null)
    {
        if (getRandomInt == 1)
        {
            player = "player1";
        }
        else if (getRandomInt == 2)
        {
            player = "player2";
        }
    }
    getPlayersChoice(player);
}

// Reset to Game (newGame)
function newGame()
{
    player1ScoreTotal.innerHTML       = 0;
    player2ScoreTotal.innerHTML       = 0;
    currentScorePlayer1.innerHTML     = 0;
    currentScorePlayer2.innerHTML     = 0;
    winnerPlayer1.style.display       = "none";
    loserPlayer2.style.display        = "none";
    winnerPlayer2.style.display       = "none";
    loserPlayer1.style.display        = "none";
    buttonHoldDiv.style.display       = "flex";
    buttonRollDiceDiv.style.display   = "flex";
    player                            = null;
    playerNull(getRandomInt(2));
}

// Displayed the player's selection
function getPlayersChoice(player)
{
    if (player == "player1")
    {
        dotSelectedPlayer2.style.display        = "none";
        dotSelectedPlayer1.style.display        = "inline-block";
        divided.style.left                      = "5%";
        currentPlayer2Div.style.backgroundColor = "grey";
        currentPlayer1Div.style.backgroundColor = "#991312";
    }
    else if (player == "player2")
    {
        dotSelectedPlayer1.style.display        = "none";
        dotSelectedPlayer2.style.display        = "inline-block";
        divided.style.left                      = "50%";
        currentPlayer1Div.style.backgroundColor = "grey";
        currentPlayer2Div.style.backgroundColor = "#991312";
    }
}

// Roll of the dice and sounds of dice
function rollDice(getRandomInt) 
{
    audio.play();
    if (getRandomInt == 1)
    {
        firstDice.style.display  = "flex";
        secondDice.style.display = "none";
        thirdDice.style.display  = "none";
        fourthDice.style.display = "none";
        fifthDice.style.display  = "none";
        sixthDice.style.display  = "none";
        if (player == "player1")
        {
            currentScorePlayer1.innerHTML = 0;
            player = "player2";
            getPlayersChoice(player);
        }
        else if (player == "player2")
        {
            currentScorePlayer2.innerHTML = 0;
            player = "player1";
            getPlayersChoice(player);
        }
    }
    else if (getRandomInt == 2)
    {        
        firstDice.style.display  = "none";
        secondDice.style.display = "flex";
        thirdDice.style.display  = "none";
        fourthDice.style.display = "none";
        fifthDice.style.display  = "none";
        sixthDice.style.display  = "none";
        if (player == "player1")
        {
            value                         = currentScorePlayer1.innerText;
            let parsed                    = parseInt(value);
            parsed                       += getRandomInt;
            currentScorePlayer1.innerHTML = parsed;
        }
        else if (player == "player2")
        {
            value                         = currentScorePlayer2.innerText;
            let parsed                    = parseInt(value);
            parsed                       += getRandomInt;
            currentScorePlayer2.innerHTML = parsed;
        }
    } 
    else if (getRandomInt == 3)
    {        
        firstDice.style.display  = "none";
        secondDice.style.display = "none";
        thirdDice.style.display  = "flex";
        fourthDice.style.display = "none";
        fifthDice.style.display  = "none";
        sixthDice.style.display  = "none";
        if (player == "player1")
        {
            value                         = currentScorePlayer1.innerText;
            let parsed                    = parseInt(value);
            parsed                       += getRandomInt;
            currentScorePlayer1.innerHTML = parsed;
        }
        else if (player == "player2")
        {
            value                         = currentScorePlayer2.innerText;
            let parsed                    = parseInt(value);
            parsed                       += getRandomInt;
            currentScorePlayer2.innerHTML = parsed;
        }
    }
    else if (getRandomInt == 4)
    {        
        firstDice.style.display  = "none";
        secondDice.style.display = "none";
        thirdDice.style.display  = "none";
        fourthDice.style.display = "flex";
        fifthDice.style.display  = "none";
        sixthDice.style.display  = "none";
        if (player == "player1")
        {
            value                         = currentScorePlayer1.innerText;
            let parsed                    = parseInt(value);
            parsed                       += getRandomInt;
            currentScorePlayer1.innerHTML = parsed;
        }
        else if (player == "player2")
        {
            value                         = currentScorePlayer2.innerText;
            let parsed                    = parseInt(value);
            parsed                       += getRandomInt;
            currentScorePlayer2.innerHTML = parsed;
        }
    } 
    else if (getRandomInt == 5)
    {        
        firstDice.style.display  = "none";
        secondDice.style.display = "none";
        thirdDice.style.display  = "none";
        fourthDice.style.display = "none";
        fifthDice.style.display  = "flex";
        sixthDice.style.display  = "none";
        if (player == "player1")
        {
            value                         = currentScorePlayer1.innerText;
            let parsed                    = parseInt(value);
            parsed                       += getRandomInt;
            currentScorePlayer1.innerHTML = parsed;
        }
        else if (player == "player2")
        {
            value                         = currentScorePlayer2.innerText;
            let parsed                    = parseInt(value);
            parsed                       += getRandomInt;
            currentScorePlayer2.innerHTML = parsed;
        }
    } 
    else if (getRandomInt == 6)
    {        
        firstDice.style.display  = "none";
        secondDice.style.display = "none";
        thirdDice.style.display  = "none";
        fourthDice.style.display = "none";
        fifthDice.style.display  = "none";
        sixthDice.style.display  = "flex";
        if (player == "player1")
        {
            value                         = currentScorePlayer1.innerText;
            let parsed                    = parseInt(value);
            parsed                       += getRandomInt;
            currentScorePlayer1.innerHTML = parsed;
        }
        else if (player == "player2")
        {
            value                         = currentScorePlayer2.innerText;
            let parsed                    = parseInt(value);
            parsed                       += getRandomInt;
            currentScorePlayer2.innerHTML = parsed;
        }
    }
}

// Returns current points in total points)
function totalReturns(player)
{
    let value  = null;
    let value1 = null;
    let value2 = null;
    if (player == "player1")
    {
        value1                      = currentScorePlayer1.innerText;
        value2                      = player1ScoreTotal.innerText
        value1                      = parseInt(value1);
        value2                      = parseInt(value2);
        value                       = value1 + value2;
        player1ScoreTotal.innerHTML = value;
    }
    else if (player == "player2")
    {
        value1                      = currentScorePlayer2.innerText;
        value2                      = player2ScoreTotal.innerText
        value1                      = parseInt(value1);
        value2                      = parseInt(value2);
        value                       = value1 + value2;
        player2ScoreTotal.innerHTML = value;
    }
}

// Display Winner / Loser
function winnerLoser(player1ScoreTotal, player2ScoreTotal)
{  
    let value1 = player1ScoreTotal.innerText;
    value1     = parseInt(value1);
    if (value1 >= 100)
    {
        winnerPlayer1.style.display     = "block";
        loserPlayer2.style.display      = "block";
        winnerPlayer2.style.display     = "none";
        loserPlayer1.style.display      = "none"; 
        buttonRollDiceDiv.style.display = "none";
        buttonHoldDiv.style.display     = "none"; 
    }

    let value2 = player2ScoreTotal.innerText;
    value2     = parseInt(value2);
    if (value2 >= 100)
    {
        winnerPlayer2.style.display     = "block";
        loserPlayer1.style.display      = "block";
        winnerPlayer1.style.display     = "none";
        loserPlayer2.style.display      = "none";
        buttonRollDiceDiv.style.display = "none";
        buttonHoldDiv.style.display     = "none";
    }
}

