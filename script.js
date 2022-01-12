var win = 0;
var loss = 0;
var ties = 0;

const options = ["R", "P", "S"];

function compChoice () {
    var index = 0;
    var value = "";
    
    index = Math.floor(Math.random() * 3);
    value  = options[index];
    window.alert("The computer choice: " + value);
    return value;
}

function playGame() {

    var userSelection = window.prompt("Enter your choice: (R, P or S)");

    if (!userSelection) {
        return;
    }
    userSelection = userSelection.toUpperCase();
  
    var compSelection = compChoice();

    if (userSelection === compSelection) {
        window.alert("It is a tie!");
        ties++;
    } else if (
        (userSelection === "R" && compSelection =="S") ||
        (userSelection === "P" && compSelection =="R") ||
        (userSelection === "S" && compSelection =="P")
    ) {
    window.alert("You win!");
    win++;
    } else {
         window.alert("You lost!");
        loss++;
    }
    
    var play = window.confirm("Do you want to play again?");

    if (play) {
        playGame();
    } else {
        window.alert("Game Statistics:\nWins: " + win + "\nLosses: " + loss + "\nTies: " + ties);
    }

}

playGame();
     
