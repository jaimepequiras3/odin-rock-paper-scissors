
function getComputerChoice(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const choice = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}


function playGame (pick){

    let computerChoice = getComputerChoice(1, 4);
    let humanChoice = pick.target.textContent;

    // Rock vs Rock
    if (computerChoice == "Rock" && humanChoice == "Rock"){
        response.innerHTML = "<br>Draw!<br><br>You both pick Rocks.<br>";
    }
    // Paper vs Paper
    else if (computerChoice == "Paper" && humanChoice == "Paper"){
        response.innerHTML = "<br>Draw!<br><br>You both pick Papers.<br>";
    }
    // Scissors vs Scissors
    else if (computerChoice == "Scissors" && humanChoice == "Scissors"){
        response.innerHTML = "<br>Draw!<br><br>You both pick Scissors.<br>";
    }
    // computer Rock vs human Paper
    else if (computerChoice == "Rock" && humanChoice == "Paper"){
        humanScore++;
        response.innerHTML = "<br>You win!<br><br>Paper beats Rock.<br>";
    }
    // computer Rock vs human Scissors
    else if (computerChoice == "Rock" && humanChoice == "Scissors"){
        computerScore++;
        response.innerHTML = "<br>You lose!<br><br>Rock beats Scissors.<br>";
    }
    // computer Paper vs human Rock
    else if (computerChoice == "Paper" && humanChoice == "Rock"){
        computerScore++;
        response.innerHTML = "<br>You lose!<br><br>Paper beats Rock.<br>";
    }
    // computer Paper vs human Scissors
    else if (computerChoice == "Paper" && humanChoice == "Scissors"){
        humanScore++;
        response.innerHTML = "<br>You win!<br><br>Scissors beats Paper.<br>";
    }
    // computer Scissors vs human Rock
    else if (computerChoice == "Scissors" && humanChoice == "Rock"){
        humanScore++;
        response.innerHTML = "<br>You win!<br><br>Rock beats Scissors.<br>";
    }
    // computer Scissors vs human Paper
    else if (computerChoice == "Scissors" && humanChoice == "Paper"){
        computerScore++;
        response.innerHTML = "<br>You lose!<br><br>Scissors beats Paper.<br>";
    }

    compScore.textContent = computerScore;
    humScore.textContent = humanScore;

    if (humanScore === 5) {
        resultMessage.textContent = "Human WINS!";

        rock.setAttribute("disabled", "disabled");
        paper.setAttribute("disabled", "disabled");
        scissors.setAttribute("disabled", "disabled");

        again.appendChild(playAgain);
    }
    else if (computerScore === 5) {
        resultMessage.textContent = "Computer WINS!";

        rock.setAttribute("disabled", "disabled");
        paper.setAttribute("disabled", "disabled");
        scissors.setAttribute("disabled", "disabled");

        again.appendChild(playAgain);
    }
}


function playNewGame () {
    location.reload();
}


let computerScore = 0;
let humanScore = 0;

// START GAME DIV
const game = document.querySelector("#game");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const response = document.createElement("span");

rock.textContent = "Rock";
rock.style.padding = "5px 20px";
rock.style.margin = "10px";

paper.textContent = "Paper";
paper.style.padding = "5px 20px";
paper.style.margin = "10px";

scissors.textContent = "Scissors";
scissors.style.padding = "5px 10px";
scissors.style.margin = "10px";

game.appendChild(rock);
game.appendChild(paper);
game.appendChild(scissors);

game.appendChild(response);
// END GAME DIV


// START SCORE
const score = document.querySelector("#score");

const scoreTitle = document.createElement("h3");
const compScoreName = document.createElement("h4");
const humScoreName = document.createElement("h4");

scoreTitle.textContent = "Scores";
compScoreName.textContent = "Computer: ";
humScoreName.textContent = "Human: ";

const compScore = document.createElement("span");
const humScore = document.createElement("span");

score.appendChild(scoreTitle);

compScoreName.appendChild(compScore);
humScoreName.appendChild(humScore);

score.appendChild(compScoreName);
score.appendChild(humScoreName);
// END SCORE


// START RESULT
const result = document.querySelector("#result");
const resultMessage = document.createElement("span");

resultMessage.textContent = "";

result.appendChild(resultMessage);
// END RESULT


// START PLAY AGAIN
const again = document.querySelector("#play-again");

const playAgain = document.createElement("button");

playAgain.textContent = "Play Again?";
playAgain.style.padding = "5px 10px";
playAgain.style.margin = "10px";
// END PLAY AGAIN

rock.addEventListener("click", playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);
playAgain.addEventListener("click", playNewGame);
