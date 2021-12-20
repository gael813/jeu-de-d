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
}

// Reset to Game (newGame)
function newGame() // A finir !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{
    player1ScoreTotal.innerHTML = 0;
}

// Displayed the player's selection
function getPlayersChoice(player)
{
    if (player == "player1")
    {
        document.getElementById("dotSelectedPlayer2").style.display        = "none";
        document.getElementById("dotSelectedPlayer1").style.display        = "inline-block";
        document.getElementById("divided").style.left                      = "5%";
        document.getElementById("currentPlayer2Div").style.backgroundColor = "grey";
        document.getElementById("currentPlayer1Div").style.backgroundColor = "#991312";
    }
    else if (player == "player2")
    {
        document.getElementById("dotSelectedPlayer1").style.display        = "none";
        document.getElementById("dotSelectedPlayer2").style.display        = "inline-block";
        document.getElementById("divided").style.left                      = "50%";
        document.getElementById("currentPlayer1Div").style.backgroundColor = "grey";
        document.getElementById("currentPlayer2Div").style.backgroundColor = "#991312";
    }
}

// Roll of the dice and sounds of dice
function rollDice(getRandomInt) 
{
    let audio = document.getElementById("audio");
    audio.play();
    let firstDice  = document.getElementById("firstDice");
    let secondDice = document.getElementById("secondDice");
    let thirdDice  = document.getElementById("thirdDice");
    let fourthDice = document.getElementById("fourthDice");
    let fifthDice  = document.getElementById("fifthDice");
    let sixthDice  = document.getElementById("sixthDice");
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
            value                         = currentScorePlayer1.innerText;
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
            value                         = currentScorePlayer1.innerText;
            let parsed                    = parseInt(value);
            parsed                       += getRandomInt;
            currentScorePlayer2.innerHTML = parsed;
        }
    }
}

// Returns current points in total points (Ajout du passage au player suivant lorsque 'Hold' A faire !!!!!!!!!!!!!!!!!!!!!!!!!!!!!)
function totalReturns(player)
{
    let value = null;
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