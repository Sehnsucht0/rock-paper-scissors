let playerPoints = 0, computerPoints = 0, result;
const playerChoice = document.querySelectorAll('button');
const currentResultString = document.querySelector(".current-result");
const currentHandString = document.querySelector (".current-hand");
const finalResultString = document.querySelector(".final-result");

playerChoice.forEach((choice) => choice.addEventListener('click', function() {
    result = playRound(this.classList.value);
    game (result);
}));

function getComputerChoice ()
{
    let result;
    let randomchoice = Math.floor(Math.random() * 3);
    if (randomchoice === 0)  result = "rock";
    if (randomchoice === 1)  result = "paper";
    if (randomchoice === 2)  result = "scissors";
    return result;
}

function playRound (playerSelection)
{
    let computerSelection = getComputerChoice(), result;
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

    currentHandString.textContent = `${playerSelection} against ${computerSelection}: it's a ${result}`;

    return result;
}

function game (result)
{
    finalResultString.textContent = "";
    if (result === "win") playerPoints++;
    else if (result === "loss") computerPoints++;
    currentResultString.textContent = `User ${playerPoints}-${computerPoints} Computer`;
    if ((playerPoints === 5) || (computerPoints === 5))
    {
        if (playerPoints === 5) finalResultString.textContent = "The match is a win";
        else if (computerPoints === 5) finalResultString.textContent = "The match is a loss";
        playerPoints = 0, computerPoints = 0;
    }
}