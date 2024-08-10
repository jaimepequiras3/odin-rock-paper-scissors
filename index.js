
function getComputerChoice(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const choice = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    return choices(choice);
}

function getHumanChoice () {
    let choice = prompt("1 = Rock, 2 = Paper or 3 = Scissors?: ");

    return choices(choice);
}

function choices(choice) {

    if (choice == 1) {
        return "Rock";
    }
    else if (choice == 2) {
        return "Paper";
    }
    else if (choice == 3) {
        return "Scissors";
    }
    else {
        return "Does Not Exist";
    }
}

function playRound (rounds){

    let computerChoice = getComputerChoice(1, 4);
    let humanChoice = getHumanChoice();
    
    console.log("\n\nRound " + (rounds + 1));
    console.log("Computer picks - " + computerChoice);
    console.log("Human picks - " + humanChoice);

    // Rock vs Rock
    if (computerChoice == "Rock" && humanChoice == "Rock"){
        console.log("Draw! You both pick Rocks.");
    }
    // Paper vs Paper
    else if (computerChoice == "Paper" && humanChoice == "Paper"){
        console.log("Draw! You both pick Papers.");
    }
    // Scissors vs Scissors
    else if (computerChoice == "Scissors" && humanChoice == "Scissors"){
        console.log("Draw! You both pick Scissors.");
    }
    // computer Rock vs human Paper
    else if (computerChoice == "Rock" && humanChoice == "Paper"){
        humanScore++;
        console.log("You win! Paper beats Rock.");
    }
    // computer Rock vs human Scissors
    else if (computerChoice == "Rock" && humanChoice == "Scissors"){
        computerScore++;
        console.log("You lose! Rock beats Scissors.");
    }
    // computer Paper vs human Rock
    else if (computerChoice == "Paper" && humanChoice == "Rock"){
        computerScore++;
        console.log("You lose! Paper beats Rock.");
    }
    // computer Paper vs human Scissors
    else if (computerChoice == "Paper" && humanChoice == "Scissors"){
        humanScore++;
        console.log("You win! Scissors beats Paper.");
    }
    // computer Scissors vs human Rock
    else if (computerChoice == "Scissors" && humanChoice == "Rock"){
        humanScore++;
        console.log("You win! Rock beats Scissors.");
    }
    // computer Scissors vs human Paper
    else if (computerChoice == "Scissors" && humanChoice == "Paper"){
        computerScore++;
        console.log("You lose! Scissors beats Paper.");
    }
    else {
        computerScore++;
        console.log("You did not pick. A score has been given for the computer.");
    }

    console.log("\nComputer Score = " + computerScore + "\nHuman Score = " + humanScore + "\n");

}

function playGame() {
    console.log("Game Starts!");
    
    for (let x = 0; x < 5; x++){
        playRound(x);
    }
    
    if (computerScore > humanScore ){
        console.log("Computer Wins!");
    }
    else if (computerScore < humanScore){
        console.log("Human Wins!");
    }
    else {
        console.log("Draw!")
    }

}

let computerScore = 0;
let humanScore = 0;

playGame();
