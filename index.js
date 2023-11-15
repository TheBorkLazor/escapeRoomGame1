import inquirer from "inquirer";
import room from "./functions/room.js";
import getName from "./functions/getName.js";
import searchRoom from "./functions/searchRoom.js";
import mathsPuzzle from "./functions/mathPuzzle.js";

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

async function riddle() {
  let correctAnswer = "light";
  let attempts = 0;

  function solveRiddle() {
    return inquirer
      .prompt({
        type: "input",
        name: "result",
        message: "What can fill a room but takes up no space?",
      })
      .then((result) => {
        let answer = result.result.toLowerCase();
        return answer;
      });
  }

  while (attempts < 2) {
    const userAnswer = await solveRiddle();
    console.log("Try again!");

    if (userAnswer === correctAnswer) {
      console.log(
        "----------------CORRECT!---------------\n You are free to move on"
      );
      return;
    } else {
      attempts++;
      console.log(
        "---------------INCORRECT---------------\n Clue - Look out at night, and I am in no place."
      );
    }
  }

  console.log("You're now in the dark forever!");
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]; //choices tha are avaliable
  const randomIndex = Math.floor(Math.random() * choices.length); // random number to fit the lenght of the choices array
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

async function playGame() {
  let result = "It's a tie";

  while (result === "It's a tie") {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "userChoice",
        message: "Your move",
        choices: ["rock", "paper", "scissor"],
      },
    ]);

    const userChoice = answers.userChoice;
    const computerChoice = getComputerChoice();
    console.log(`Computer chose: ${computerChoice}`);
    result = determineWinner(userChoice, computerChoice);
    console.log(result);
  }

  if (result === "You lose!") {
    console.log("Game Over! Thanks for playing loser");
    process.exit();
  }
}

async function startGame() {
  console.log("Welcome to the Escape Room Game!");

  const username = await getName();
  console.log(`Hello, ${username}! Let's begin.`);

  const room1 = new room("the first room");
  room1.enter();

  await searchRoom();

  await mathsPuzzle();

  console.log("Great Job!");
  await riddle();

  console.log("Now, lets play a game of Rock, Paper, Scissors!");
  await playGame();
}

startGame();
