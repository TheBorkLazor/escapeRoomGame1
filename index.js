import inquirer from "inquirer";

class room {
  //Class for a room
  constructor(description) {
    this.description = description;
  }
  //Method to enter the room
  enter() {
    console.log(`You entered ${this.description}`);
  }
}

// subclass representing a puzzle room, inherits from room
class PuzzleRoom extends room {
  constructor(description, puzzle) {
    super(description);
    this.puzzle = puzzle;
  }
  // method to sumulate solving a puzzle in the room
  solvePuzzle() {
    console.log(`Solving puzzle: ${this.puzzle}`);
  }
}

function getName() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Enter your name",
      },
    ])
    .then((answers) => answers.username);
}

function searchRoom() {
  const searchOptions = [
    "Look under the bed",
    "Check the drawer",
    "Look behind the painting",
  ];
  return inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: searchOptions,
      },
    ])
    .then((answers) => {
      const selectedOption = answers.action;

      if (selectedOption === "Look behind the painting") {
        console.log(
          "You chose to Look behind the painting. You found a key, this will unlock the next room"
        );
      } else {
        console.log(`You chose to ${selectedOption}. You found nothing.`);
      }
    });
}

async function startGame() {
  console.log("Welcome to the Excape Room Game!");

  const username = await getName();
  console.log(`Hello, ${username}! Let's begin.`);

  const room1 = new room("the first room");
  room1.enter();

  await searchRoom();
}

startGame();

// function getComputerChoice() {
//   const choices = ["rock", "paper", "scissors"]; //choices tha are avaliable
//   const randomIndex = Math.floor(Math.random() * choices.length); // random number to fit the lenght of the choices array
//   return choices[randomIndex];
// }

// function determineWinner(userChoice, computerChoice) {
//   if (userChoice === computerChoice) {
//     return "Its a tie";
//   } else if (
//     (userChoice === "rock" && computerChoice === "scissor") ||
//     (userChoice === "paper" && computerChoice === "rock") ||
//     (userChoice === "scissors" && computerChoice === "paper")
//   ) {
//     return "You win!";
//   } else {
//     return "You lose!";
//   }
// }

// function playGame() {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "userChoice",
//         message: "Your move",
//         choices: ["rock", "paper", "scissor"],
//       },
//     ])
//     .then((answers) => {
//       const userChoice = answers.userChoice;
//       const computerChoice = getComputerChoice();
//       console.log(`Computer chose: ${computerChoice}`);
//       console.log(determineWinner(userChoice, computerChoice));
//     });
// }
playGame();
