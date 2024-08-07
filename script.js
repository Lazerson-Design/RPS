// Define variables to store user and computer scores
let userScore = 0;
let computerScore = 0;
let userSelection = "";

// Function to get a random choice for the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]; //Array mit den 3 Optionen
  const randomIndex = Math.floor(Math.random() * choices.length); //pickt eine der Optionen
  //random ist random von 0 bis 1, floor rundet das ganze
  return choices[randomIndex]; //gibt den Index des im Array befindenden Option
  //[0]-rock, [1]-paper, [2]-scissors
}

// Function to determine the winner of the round
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    //wenn Benutzer und Computer gleich sind
    return "It's a tie!"; //dann "Its a tie" Unentschieden
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") || //wenn Benutzer Stein und Computer Schere
    (userChoice === "paper" && computerChoice === "rock") || //wenn Benutzer Papier und Computer Stein
    (userChoice === "scissors" && computerChoice === "paper") //wenn Benutzer Schere und Computer Papier
  ) {
    userScore++; //dann wird userScore um 1 erhöht ++
    return "You win!"; //dann wird "You win!" angezeigt
  } else {
    //bei allem anderem
    computerScore++; //wird computerScore um 1 erhöht ++
    return "Computer wins!"; //wird "Computer wins!" angezeigt
  }
}

// Function to update the scores in the DOM
function updateScores() {
  document.getElementById("user-score").innerText = userScore; //liest die div mit "id = user-score"
  document.getElementById("computer-score").innerText = computerScore; //liest die div mit "id = computer-score"
}
//Zahl wird nach function determineWinner(userChoice, computerChoice) geupdated

// Function to handle the play button click event
function playRound() {
  if (!userSelection) {
    //wenn Benutzer nichts ausgewählt hat
    alert("Please make a selection!"); //dann kommt alert "Please make a selection!"
    return; //und Spiel wird resetet
  }

  const computerChoice = getComputerChoice(); //Funktion des Computers wird aufgerufen, also Zufallszahl erstellt
  const result = determineWinner(userSelection, computerChoice); //Funktion zum Bestimmen des Siegers wird aufgerufen

  document.getElementById(
    "result" //div mit Id "result" wird selektiert
  ).innerText = `You chose ${userSelection}, computer chose ${computerChoice}. ${result}`;
  //Es wird etsprechend in di div eingefügt was man gewählt hat, was Computer gewählt hat und wer gewonnen hat
  updateScores(); //funktion zum updaten des scoreboards wird aufgerufen
  userSelection = ""; // Reset user selection after the round
  unmarkSelection(); // Unmark the selection after the round
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => {
  userSelection = "rock";
  markSelection("rock");
});
//checken ob Benutzer x gewählt hat

document.getElementById("paper").addEventListener("click", () => {
  userSelection = "paper";
  markSelection("paper");
});
//checken ob Benutzer x gewählt hat

document.getElementById("scissors").addEventListener("click", () => {
  userSelection = "scissors";
  markSelection("scissors");
});
//checken ob Benutzer x gewählt hat

document.getElementById("play-button").addEventListener("click", playRound);
//checken ob Benutzer play-botton geklickt hat, wenn ja wird playRound Funktion ausgeführt

// Function to visually mark the selected button
function markSelection(selection) {
  // Remove highlight from all buttons
  document.querySelectorAll("#selection button").forEach((button) => {
    button.classList.remove("ring-4", "ring-offset-2", "ring-indigo-500");
  });

  // Add highlight to the selected button
  document
    .getElementById(selection)
    .classList.add("ring-4", "ring-offset-2", "ring-indigo-500");
}

// Function to unmark the selected button
function unmarkSelection() {
  // Remove highlight from all buttons
  document.querySelectorAll("#selection button").forEach((button) => {
    button.classList.remove("ring-4", "ring-offset-2", "ring-indigo-500");
  });
}
