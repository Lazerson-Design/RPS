// Define variables to store user and computer scores
let userScore = 0;
let computerScore = 0;
let userSelection = "";

// Function to get a random choice for the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]; //Array mit den 3 Optionen
  const randomIndex = Math.floor(Math.random() * choices.length); //pickt eine der Optionen
  //random ist random von 0 bis 1, floor rundet das ganze

  console.log("Computer choices array:", choices); // Log the choices array
  console.log("Random index selected:", randomIndex); // Log the random index
  console.log("Computer choice:", choices[randomIndex]); // Log the final choice

  return choices[randomIndex]; //gibt den Index des im Array befindenden Option
  //[0]-rock, [1]-paper, [2]-scissors
}

// Function to determine the winner of the round
function determineWinner(userChoice, computerChoice) {
  const resultElement = document.getElementById("result");

  // Position the result element before showing it
  //positionResult();

  resultElement.style.display = "block";
  resultElement.style.opacity = "1";

  if (userChoice === computerChoice) {
    resultElement.innerText = "Friendship!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    resultElement.innerText = "You Win!";
  } else {
    computerScore++;
    resultElement.innerText = "You LOSE!";
  }
}

// Function to update the scores in the DOM
function updateScores() {
  document.getElementById("user-score").innerText = userScore; //liest die div mit "id = user-score"
  document.getElementById("computer-score").innerText = computerScore; //liest die div mit "id = computer-score"
}
//Zahl wird nach function determineWinner(userChoice, computerChoice) geupdated

// Function to unmark the selected button
function unmarkSelection() {
  // Remove highlight from all buttons
  document.querySelectorAll("#selection button").forEach((button) => {
    button.classList.remove("ring-4", "ring-offset-2", "ring-indigo-500");
  });
}

// Function to handle the play button click event
function playRound() {
  console.log("playRound function called");

  if (!userSelection) {
    alert("Please make a selection!");
    return;
  }

  const computerChoice = getComputerChoice(); // Get computer's choice
  const userChoice = userSelection; // Get user's choice from the selection

  console.log("User choice before determining winner:", userChoice); // Debugging log
  console.log("Computer choice before determining winner:", computerChoice); // Debugging log

  // Update battlefield and display choices
  updateBattlefield(userChoice, computerChoice);

  // Clear battlefield after a delay to allow the battlefield update to be visible
  setTimeout(() => {
    clearBattlefield(userChoice, computerChoice);
    userSelection = ""; // Reset user selection after battlefield is cleared
  }, 2000); // Delay to match the visual update timing

  // Determine winner and update scores
  setTimeout(() => {
    determineWinner(userChoice, computerChoice);
    updateScores();
  }, 2000); // Delay to match the battlefield clearing timing

  unmarkSelection(); // Unmark the selected choice
}

// Function to move the SVG based on the user selection
function moveSVG(userSelection) {
  if (userSelection === "rock") {
    moveRock();
  }
}

// Function to move the SVG inside the button with id="rock"
function moveRock() {
  const rockButton = document.getElementById("rock");
  const svgElement = rockButton.querySelector("img");
  if (svgElement) {
    svgElement.classList.add("move-down-fade");
    setTimeout(() => {
      svgElement.classList.remove("move-down-fade");
      svgElement.classList.add("move-up-fade-in");
    }, 2000); // Wait 2 seconds before the reappear animation
  }
}

// Function to move the SVG inside the button with id="paper"
function movePaper() {
  const paperButton = document.getElementById("paper");
  const svgElement = paperButton.querySelector("img");
  if (svgElement) {
    svgElement.classList.add("move-down-fade");
    setTimeout(() => {
      svgElement.classList.remove("move-down-fade");
      svgElement.classList.add("move-up-fade-in");
    }, 2000); // Wait 2 seconds before the reappear animation
  }
}

// Function to move the SVG inside the button with id="scissors"
function moveScissors() {
  const scissorsButton = document.getElementById("scissors");
  const svgElement = scissorsButton.querySelector("img");

  if (svgElement) {
    svgElement.classList.add("move-down-fade");
    setTimeout(() => {
      svgElement.classList.remove("move-down-fade");
      svgElement.classList.add("move-up-fade-in");
    }, 2000); // Wait 2 seconds before the reappear animation
  }
}

// Function to move the SVG for the user's choice inside the battlefield
function updateBattlefield(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById("user-choice");
  const computerChoiceDiv = document.getElementById("computer-choice");
  const vsElement = document.getElementById("vs");

  userChoiceDiv.innerHTML = "";
  computerChoiceDiv.innerHTML = "";

  const userImgElement = document.createElement("img");
  const computerImgElement = document.createElement("img");

  switch (userChoice) {
    case "rock":
      userImgElement.src =
        "https://raw.githubusercontent.com/Lazerson-Design/RPS/395545eb0d14a6b40d72eed1a26390f0286e2a8e/Rock.svg";
      moveRock();
      break;
    case "paper":
      userImgElement.src =
        "https://raw.githubusercontent.com/Lazerson-Design/RPS/baace9b58471b21efb42129fb0dc77887de24c7e/Paper.svg";
      movePaper();
      break;
    case "scissors":
      userImgElement.src =
        "https://raw.githubusercontent.com/Lazerson-Design/RPS/baace9b58471b21efb42129fb0dc77887de24c7e/Scissors.svg";
      moveScissors();
      break;
    default:
      userImgElement.src = "";
      break;
  }

  switch (computerChoice) {
    case "rock":
      computerImgElement.src =
        "https://raw.githubusercontent.com/Lazerson-Design/RPS/395545eb0d14a6b40d72eed1a26390f0286e2a8e/Rock.svg";
      break;
    case "paper":
      computerImgElement.src =
        "https://raw.githubusercontent.com/Lazerson-Design/RPS/baace9b58471b21efb42129fb0dc77887de24c7e/Paper.svg";
      break;
    case "scissors":
      computerImgElement.src =
        "https://raw.githubusercontent.com/Lazerson-Design/RPS/baace9b58471b21efb42129fb0dc77887de24c7e/Scissors.svg";
      break;
    default:
      computerImgElement.src = "";
      break;
  }

  // Show VS element after user's choice appears
  setTimeout(() => {
    vsElement.style.display = "block";
    vsElement.classList.add("fade-in");
  }, 700);

  setTimeout(() => {
    finalSVG(userChoice, computerChoice); // Correctly pass choices to finalSVG
  }, 1500);

  userImgElement.style.width = "200px";
  userImgElement.style.height = "200px";
  userImgElement.style.opacity = "0";
  userImgElement.style.animationDelay = "500ms";
  userImgElement.classList.add("move-down-fade-in");

  computerImgElement.style.width = "200px";
  computerImgElement.style.height = "200px";
  computerImgElement.style.opacity = "0";
  computerImgElement.style.animationDelay = "700ms";
  computerImgElement.classList.add("move-down-fade-in");

  userChoiceDiv.appendChild(userImgElement);
  computerChoiceDiv.appendChild(computerImgElement);
}

// Function to clear and update the battlefield with result and restore original structure
function clearBattlefield(userChoice, computerChoice) {
  console.log("Clearing battlefield with choices:", userChoice, computerChoice); // Debugging log

  /*   const battlefieldDiv = document.getElementById("battlefield");
  console.log("Clearing battlefield with choices:", userChoice, computerChoice); // Debugging log

  /*   const battlefieldDiv = document.getElementById("battlefield");

  // Add a 1.5-second delay before clearing the content
  setTimeout(() => {
    battlefieldDiv.innerHTML = ""; // Clear all content inside the battlefield div
  }, 2600); */

  // After clearing, update the battlefield with the result

  // Add a 1-second delay before restoring the original structure
  setTimeout(() => {
    // Restore the original structure of the battlefield div
    battlefieldDiv.innerHTML = `
      <div id="user-choice" class="flex-1 text-center"></div>
      <div id="vs" class="text-center font-bold text-2xl mx-4">VS</div>
      <div id="computer-choice" class="flex-1 text-center"></div>
    `;
  }, 1700); // This restores the content 1 second after updating with the result
}

// Function to create and insert a final image into the battlefield div
function finalSVG(userChoice, computerChoice) {
  console.log("Final SVG called with choices:", userChoice, computerChoice); // Debugging log

  // Select the battlefield div
  const battlefieldDiv = document.getElementById("battlefield");

  // Get the image source from finalPicker
  const imgSrc = finalPicker(userChoice, computerChoice);

  if (imgSrc) {
    // Create a new image element
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;

    // Optionally set other attributes like width, height, etc.
    imgElement.style.width = "200px";
    imgElement.style.height = "200px";

    // Optionally add a class for styling or animation
    imgElement.classList.add("fade-in");

    // Clear existing content (if needed)
    battlefieldDiv.innerHTML = "";

    // Append the new image element to the battlefield div
    battlefieldDiv.appendChild(imgElement);
  } else {
    console.error(
      "No valid image source found for choices:",
      userChoice,
      computerChoice
    );
  }
}

// Function to get the final image URL based on choices
function finalPicker(userChoice, computerChoice) {
  console.log("User choice:", userChoice); // Log the user's choice
  console.log("Computer choice:", computerChoice); // Log the computer's choice

  switch (`${userChoice}-${computerChoice}`) {
    case "rock-paper":
    case "paper-rock":
      console.log("rock-paper or paper-rock case selected");
      console.log("rock-paper or paper-rock case selected");
      return "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/PvR.svg";

    case "rock-scissors":
    case "scissors-rock":
      console.log("rock-scissors or scissors-rock case selected");
      console.log("rock-scissors or scissors-rock case selected");
      return "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/RvS.svg";

    case "paper-scissors":
    case "scissors-paper":
      console.log("paper-scissors or scissors-paper case selected");
      console.log("paper-scissors or scissors-paper case selected");
      return "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/SvP.svg";

    case "paper-paper":
      console.log("paper-paper case selected");
      console.log("paper-paper case selected");
      return "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/PP.svg";

    case "rock-rock":
      console.log("rock-rock case selected");
      console.log("rock-rock case selected");
      return "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/RR.svg";

    case "scissors-scissors":
      console.log("scissors-scissors case selected");
      console.log("scissors-scissors case selected");
      return "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/SS.svg";

    default:
      console.error("Invalid choices");
      return null; // Return null if choices are invalid
  }
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
  // Reset battlefield when user makes a new selection
  roundReset();
  // Reset battlefield when user makes a new selection
  roundReset();
}

// Reset the field after the round
function roundReset() {
  const battlefieldDiv = document.getElementById("battlefield");
  const resultElement = document.getElementById("result");

  // Reset the battlefield content
  battlefieldDiv.innerHTML = `
    <div id="user-choice" class="flex-1 text-center"></div>
    <div id="vs" class="text-center font-bold text-2xl mx-4">VS</div>
    <div id="computer-choice" class="flex-1 text-center"></div>
  `;

  // Reset the result display
  resultElement.innerText = "No result yet";
  resultElement.style.display = "none"; // Hide the result section
  resultElement.style.opacity = "0"; // Ensure it's not visible
}
