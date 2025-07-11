function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    switch (choice){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2: 
            return "Scissors";
            break;
        default:
            console.log("Error while randomizing choice.");
    }
}
// console.log(getComputerChoice());
function getUserChoice(){
    let choice=parseInt(prompt("Choose 0 for Rock | 1 for Paper | 2 for Scissors :"));
    switch (choice){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2: 
            return "Scissors";
            break;
        default:
            console.log("Incorrect number entered.");
    }
}
// console.log(getUserChoice());
let humanScore=0;
let compScore=0;

function playRound(userChoice, computerChoice) {
    console.log("You chose: " + userChoice);
    console.log("Computer chose: " + computerChoice);

    if (userChoice === computerChoice) {
        console.log("Draw.");
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log("You win. " + userChoice + " beats " + computerChoice);
        humanScore += 1;
    } else {
        console.log("Computer wins. " + computerChoice + " beats " + userChoice);
        compScore += 1;
    }
}

function playGame(){
    let userChoice,computerChoice;
    let rounds=0;
    while (rounds<5){
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();
        if (userChoice !== null) {
            playRound(userChoice, computerChoice);
            rounds+=1;
        } 
    }
    console.log("Your Score: " + humanScore + " | Computer Score: " + compScore);
}


playGame();