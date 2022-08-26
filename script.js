var wins = 0;
var losses = 0;
var ties = 0;

var computerOptions = ["R", "P", "S"];

var playGame = function () {
    var userChoice = prompt("Enter, R, P, or S");
   
    if (!userChoice) {
        return;
    }

 var capitalizedUserChoice = userChoice.toUpperCase();

 if (!computerOptions.includes(capitalizedUserChoice)) {
    alert("You must choose R, P, or S");
    return; 
 }

    var randomIndex = Math.floor(Math.random() * computerOptions.length);
    var computerChoice = computerOptions[randomIndex];

    if (userChoice === computerChoice) {
        ties++;
        alert("You tied with the computer.");
    } else if (
        capitalizedUserChoice === "P" && computerChoice === "R" ||
        capitalizedUserChoice === "R" && computerChoice === "S" ||
        capitalizedUserChoice === "S" && computerChoice === "P" 
    ) {
        wins++;
        alert("You win!");
    } else {
        losses++;
        alert("You lost :(");
    };

    alert("Wins: " + wins + ". Ties:" + ties + ". Losses: " + losses);

    var isPlayingAGain = confirm("Would you like to play again?")

    if (isPlayingAGain) {
        playGame();
    }
}

playGame();