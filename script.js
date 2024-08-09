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
  // Find the result element
  const resultElement = document.getElementById("result");

  if (userChoice === computerChoice) {
    // If both choices are the same
    setTimeout(() => {
      resultElement.innerText = "Friendship!"; // Update result text after 2 seconds
    }, 1500);
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") || // Rock beats Scissors
    (userChoice === "paper" && computerChoice === "rock") || // Paper beats Rock
    (userChoice === "scissors" && computerChoice === "paper") // Scissors beats Paper
  ) {
    userScore++; // Increase user score
    setTimeout(() => {
      resultElement.innerText = "You Win!"; // Update result text after 2 seconds
    }, 1500);
  } else {
    computerScore++; // Increase computer score
    setTimeout(() => {
      resultElement.innerText = "You LOSE!"; // Update result text after 2 seconds
    }, 1500);
  }
}

// Function to update the scores in the DOM
function updateScores() {
  setTimeout(() => {
    document.getElementById("user-score").innerText = userScore; //liest die div mit "id = user-score"
    document.getElementById("computer-score").innerText = computerScore; //liest die div mit "id = computer-score"
  }, 1000); // 1000 milliseconds = 1 second
}
//Zahl wird nach function determineWinner(userChoice, computerChoice) geupdated

// Function to handle the play button click event
function playRound() {
  console.log("playRound function called");
  if (!userSelection) {
    alert("Please make a selection!");
    return;
  }

  const computerChoice = getComputerChoice(); // Assign the computer's choice
  const userChoice = userSelection; // Assign the user's choice from the selection

  console.log("User choice before determining winner:", userChoice); // Debugging log
  console.log("Computer choice before determining winner:", computerChoice); // Debugging log

  determineWinner(userChoice, computerChoice);
  updateScores();
  updateBattlefield(userChoice, computerChoice); // Pass choices to updateBattlefield
  unmarkSelection();
  clearBattlefield(userChoice, computerChoice); // Pass choices to clearBattlefield

  userSelection = ""; // Reset user selection after updating the battlefield
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

  // Add a 1.5-second delay before clearing the content
  setTimeout(() => {
    battlefieldDiv.innerHTML = ""; // Clear all content inside the battlefield div
  }, 2600); */

  // After clearing, update the battlefield with the result
  setTimeout(() => {
    finalSVG(userChoice, computerChoice); // Correctly pass choices to finalSVG
  }, 1500);

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
      return "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/PvR.svg";

    case "rock-scissors":
    case "scissors-rock":
      console.log("rock-scissors or scissors-rock case selected");
      return "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/RvS.svg";

    case "paper-scissors":
    case "scissors-paper":
      console.log("paper-scissors or scissors-paper case selected");
      return "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/SvP.svg";

    case "paper-paper":
      console.log("paper-paper case selected");
      return "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/PP.svg";

    case "rock-rock":
      console.log("rock-rock case selected");
      return "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/RR.svg";

    case "scissors-scissors":
      console.log("scissors-scissors case selected");
      return "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/SS.svg";

    default:
      console.error("Invalid choices");
      return null; // Return null if choices are invalid
  }
}

// Call observeBattlefield once when initializing
//observeBattlefield();

/* // Function to set up the MutationObserver
function observeBattlefield() {
  const battlefieldDiv = document.getElementById("battlefield");

  // Create a MutationObserver instance
  const observer = new MutationObserver((mutations) => {
    // Iterate over mutations
    mutations.forEach((mutation) => {
      // Check if new nodes have been added
      if (mutation.addedNodes.length > 0) {
        // Get the newly added image
        const imgElement = battlefieldDiv.querySelector("img");

        // Check the image source and react accordingly
        if (imgElement) {
          switch (imgElement.src) {
            case "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/PvR.svg":
              // Handle rock vs paper
              console.log("Rock vs Paper");
              break;

            case "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/RvS.svg":
              // Handle rock vs scissors
              console.log("Rock vs Scissors");
              break;

            case "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/SvP.svg":
              // Handle paper vs scissors
              console.log("Paper vs Scissors");
              break;

            case "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/RR.svg":
              // Handle rock vs paper
              console.log("Rock vs Rock");
              break;

            case "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/SS.svg":
              // Handle rock vs scissors
              console.log("Scissors vs Scissors");
              break;

            case "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/PP.svg":
              // Handle paper vs scissors
              console.log("Paper vs Paper");
              break;
            // Add cases for other scenarios as needed
            default:
              console.log("Unknown matchup");
              break;
          }
        }
      }
    });
  });

  // Configure the observer
  observer.observe(battlefieldDiv, { childList: true });
}
 */
/* // Function to update the battlefield with result images
function updateBattlefieldWithResult(userChoice, computerChoice) {
  const battlefieldDiv = document.getElementById("battlefield");

  // Clear existing content
  battlefieldDiv.innerHTML = "";

  // Create an image element based on the result
  const imgElement = document.createElement("img");
  let imgSrc = "";

  // Determine the image source based on the choices
  switch (true) {
    case userChoice === "rock" && computerChoice === "paper":
      imgSrc =
        "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/PvR.svg";
      break;

    case userChoice === "rock" && computerChoice === "scissors":
      imgSrc =
        "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/RvS.svg";
      break;

    case userChoice === "paper" && computerChoice === "scissors":
      imgSrc =
        "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/SvP.svg";
      break;

    case userChoice === "rock" && userChoice === computerChoice:
      imgSrc =
        "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/RR.svg"; // Rock vs Rock
      break;

    case userChoice === "paper" && userChoice === computerChoice:
      imgSrc =
        "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/PP.svg"; // Paper vs Paper
      break;

    case userChoice === "scissors" && userChoice === computerChoice:
      imgSrc =
        "https://raw.githubusercontent.com/Lazerson-Design/RPS/66ec041a2204d212e4985f26827e5f3c0b11079b/SS.svg"; // Scissors vs Scissors
      break;

    default:
      imgSrc = ""; // Default case if no match is found
      break;
  }

  // Set the image source and style
  imgElement.src = imgSrc;
  imgElement.style.width = "200px";
  imgElement.style.height = "200px";
  imgElement.style.opacity = "0"; // Starting opacity
  imgElement.style.animationDelay = "1500ms"; // Animation delay
  imgElement.classList.add("fade-in"); // Ensure this class is defined in your CSS

  // Append the image element to the battlefield div
  battlefieldDiv.appendChild(imgElement);
}
 */
//BATTLEFIELD
// // Function to ensure the battlefield has the required sections
// function updateBattlefield() {
//   const battlefieldDiv = document.getElementById("battlefield");

//   // Clear any existing content
//   userChoiceDiv.innerHTML = "";

//   // Create user-choice div if it doesn't exist
//   let userChoiceDiv = document.getElementById("user-choice");

//   if (!userChoiceDiv) {
//     userChoiceDiv = document.createElement("div");
//     userChoiceDiv.id = "user-choice";
//     userChoiceDiv.classList.add("flex-1", "text-center");
//     battlefieldDiv.appendChild(userChoiceDiv);
//   }

//   // Create computer-choice div if it doesn't exist
//   let computerChoiceDiv = document.getElementById("computer-choice");
//   if (!computerChoiceDiv) {
//     computerChoiceDiv = document.createElement("div");
//     computerChoiceDiv.id = "computer-choice";
//     computerChoiceDiv.classList.add("flex-1", "text-center");
//     battlefieldDiv.appendChild(computerChoiceDiv);
//   }

//   // Add flex container class to battlefieldDiv if not already present
//   if (!battlefieldDiv.classList.contains("flex")) {
//     battlefieldDiv.classList.add("flex", "justify-between");
//   }
// }

// // Function to update the battlefield with the user's choice
// function fieldUser() {
//   updateBattlefield();

//   const userChoiceDiv = document.getElementById("user-choice");

//   // Create a new img element
//   const imgElement = document.createElement("img");
//   imgElement.src =
//     "https://raw.githubusercontent.com/Lazerson-Design/RPS/395545eb0d14a6b40d72eed1a26390f0286e2a8e/Rock.svg";

//   // Optionally set other attributes like width or height
//   imgElement.style.width = "200px"; // Adjust as needed
//   imgElement.style.height = "200px"; // Adjust as needed
//   imgElement.style.opacity = "0"; // Starting opacity
//   imgElement.style.animationDelay = "500ms"; //animationsverzögerung

//   // Add the CSS class for animation
//   imgElement.classList.add("move-down-fade-in");

//   // Append the img element to the div
//   battlefieldDiv.appendChild(imgElement);
// }

// // Function to update the battlefield with the computer's choice
// function fieldComputer(computerChoice) {
//   updateBattlefield();

//   const computerChoiceDiv = document.getElementById("computer-choice");

//   // Clear any existing content
//   computerChoiceDiv.innerHTML = "";

//   // Create a new img element
//   const imgElement = document.createElement("img");

//   // Set the src attribute based on the computer's choice
//   switch (computerChoice) {
//     case "rock":
//       imgElement.src =
//         "https://raw.githubusercontent.com/Lazerson-Design/RPS/395545eb0d14a6b40d72eed1a26390f0286e2a8e/Rock.svg";
//       break;
//     case "paper":
//       imgElement.src =
//         "https://raw.githubusercontent.com/Lazerson-Design/RPS/baace9b58471b21efb42129fb0dc77887de24c7e/Paper.svg"; // Update with correct URL
//       break;
//     case "scissors":
//       imgElement.src =
//         "https://raw.githubusercontent.com/Lazerson-Design/RPS/baace9b58471b21efb42129fb0dc77887de24c7e/Scissors.svg"; // Update with correct URL
//       break;
//   }

//   imgElement.style.width = "200px"; // Adjust as needed
//   imgElement.style.height = "200px"; // Adjust as needed
//   imgElement.style.opacity = "0"; // Starting opacity
//   imgElement.style.animationDelay = "500ms"; //animationsverzögerung

//   // Add the CSS class for animation
//   imgElement.classList.add("move-down-fade-in");

//   // Append the img element to the div
//   battlefieldDiv.appendChild(imgElement);
// }

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
}

// Function to unmark the selected button
function unmarkSelection() {
  // Remove highlight from all buttons
  document.querySelectorAll("#selection button").forEach((button) => {
    button.classList.remove("ring-4", "ring-offset-2", "ring-indigo-500");
  });
}

//resetet das Feld nach der Runde
function roundReset() {
  const battlefieldDiv = document.getElementById("battlefield");
  battlefieldDiv.innerHTML = `
    <div id="user-choice" class="flex-1 text-center"></div>
    <div id="vs" class="text-center font-bold text-2xl mx-4">VS</div>
    <div id="computer-choice" class="flex-1 text-center"></div>
  `;
}
