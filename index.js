import inquirer from "inquirer";

// async function playGame() {
//   let playGameAgain = true;

//   while (playGameAgain) {
//     await startGame();

//     const { again } = await inquirer.prompt({
//       type: 'confirm',
//       name: 'again',
//       message: 'Do you want to play again?',
//       default: true,
//     });

//     playGameAgain = again;
//   }

//   console.log('Thanks for playing!');

// }



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
  // method to simulate solving a puzzle in the room
  solvePuzzle() {
    console.log(`Solving puzzle: ${this.puzzle}`);
  }
}

// class DarkRoom extends room {
//   constructor(description, ) {
//     super(description);
//     this. = ;
//   }

// // method to simulate solving a riddle in the room
// solveRiddle() {
//   console.log(`Oh no! You got the question wrong. The room is now pitch black. Solve the riddle to get the lights back on.`);
// }

// ghost() {

// }
// }



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

function mathsPuzzle() {
  return inquirer.prompt({
    type: "list",
    name: "result",
    message: "20% of 2 is equal to?",
    choices: ["20", "4", "0.4", "0.004"]
  })
    .then((result) => {
      let rightAnswer = "0.4"
      let userAnswer = result.result;

      if (userAnswer === rightAnswer) {
        console.log("CORRECT! You are free to move on")
      } else {
        console.log("INCORRECT. You're stuck!")
      }
    })
}

async function riddle() {
  let correctAnswer = "light";
  let attempts = 0;

  function solveRiddle() {
    return inquirer.prompt({
      type: "input",
      name: "result",
      message: "What can fill a room but takes up no space?",
    })
      .then((result) => {
        let answer = result.result.toLowerCase();
        return answer;

      })
  }

  while (attempts < 2) {
    const userAnswer = await solveRiddle()
    console.log("Try again!");


    if (userAnswer === correctAnswer) {
      console.log("----------------CORRECT!---------------\n You are free to move on");
    }
    else {
      attempts++;
      console.log("---------------INCORRECT---------------\n Clue - Look out at night, and I am in no place.");
    }
  }

  console.log("You're now in the dark forever!");
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
  console.log("Welcome to the Escape Room Game!");

  const username = await getName();
  console.log(`Hello, ${username}! Let's begin.`);
  // ---------------Do for each room-----------------------
  // const room1 = new room("the first room");
  // room1.enter();

  // play first game
  await searchRoom();

  // play second game
  await mathsPuzzle();

  //play third game
  await riddle();

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

// playGame();



