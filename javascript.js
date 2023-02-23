alert ("Let's play Rock paper scissors");
game();

function getComputerChoice ()
{
    let result;
    let randomchoice = Math.floor(Math.random() * 3);
    if (randomchoice === 0)  result = "rock";
    if (randomchoice === 1)  result = "paper";
    if (randomchoice === 2)  result = "scissors";
    return result;
}

function playRound (playerSelection, computerSelection)
{
    let result;
    if (playerSelection === "rock")
    {
        if (computerSelection === "rock") result = "draw";
        else if (computerSelection === "paper") result = "loss";
        else if (computerSelection === "scissors") result = "win";
    }
    else if (playerSelection === "paper")
    {
        if (computerSelection === "rock") result = "win";
        else if (computerSelection === "paper") result = "draw";
        else if (computerSelection === "scissors") result = "loss";
    }
    else if (playerSelection === "scissors")
    {
        if (computerSelection === "rock") result = "loss";
        else if (computerSelection === "paper") result = "win";
        else if (computerSelection === "scissors") result = "draw";
    }
    else result = "error";

    return result;
}

function game ()
{
    let result, playerSelection, computerSelection, finalResult;
    let playerPoints = 0, computerPoints = 0;
    for (let i = 0; i < 5; i++)
    {
        playerSelection = prompt("Choose either rock, paper, or scissors").toLocaleLowerCase();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        while (result === "error") 
        {
            alert ("Warning: invalid input. Try again.");
            playerSelection = prompt("Choose either rock, paper, or scissors").toLocaleLowerCase();
            result = playRound(playerSelection, computerSelection);
        }
        console.log(`${playerSelection} against ${computerSelection}: it's a ${result}`);
        if (result === "win") playerPoints++;
        else if (result === "loss") computerPoints++;
    }
    if (playerPoints > computerPoints) finalResult = "win";
    else if (playerPoints < computerPoints) finalResult = "loss";
    else finalResult = "draw";
    console.log(`User ${playerPoints}-${computerPoints} Computer: the match is a ${finalResult}`);
}