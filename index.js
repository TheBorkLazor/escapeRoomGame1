import getName from "./functions/getName.js";
import searchRoom from "./functions/searchRoom.js";
import mathsPuzzle from "./functions/mathPuzzle.js";
import riddle from "./functions/riddle.js";
import rockPaperScissors from "./functions/rockPaperScissors.js";
import anagram from "./functions/anagram.js";

import chalk from "chalk";

class EscapeRoom {

  constructor() {
    this.overallPoints = 0;
  }

  updatePoints(points) {
    this.overallPoints += points;
    console.log(chalk.bgMagenta.bold(`You have just achieved ${points} points`));
  }



  // method to welcome user and get their name
  async welcome() {
    console.log(chalk.bgWhite.red.bold(`-----------------------------------------
      Welcome to the Escape Room Game!   
-----------------------------------------`
    ));

    const username = await getName();
    console.log(chalk.bgWhite.red.bold(`Hello, ${username}! Let's begin.`));


  }

  // Game 1
  async playGame1() {

    const result = await searchRoom();
    this.updatePoints(result);
  }

  // Game 2
  async playGame2() {

    const result = await mathsPuzzle();
    this.updatePoints(result);
  }

  // Game 3
  async playGame3() {

    const result = await riddle();
    this.updatePoints(result);
  }

  // Game 4
  async playGame4() {

    const result = await anagram();
    this.updatePoints(result);
  }

  async playGame5() {
    const result = await rockPaperScissors();
    this.updatePoints(result);
  }

}

const userAnswerGame = new EscapeRoom();

// all this can be in one function
userAnswerGame.welcome()
  .then(() => userAnswerGame.playGame1()).then(() => {
    console.log(chalk.bgWhite.red.bold(`Overall Points: ${userAnswerGame.overallPoints}`));
  })
  .then(() => userAnswerGame.playGame2()).then(() => {
    console.log(chalk.bgWhite.red.bold(`Overall Points: ${userAnswerGame.overallPoints}`));
  })
  .then(() => userAnswerGame.playGame3()).then(() => {
    console.log(chalk.bgWhite.red.bold(`Overall Points: ${userAnswerGame.overallPoints}`));
  })
  .then(() => userAnswerGame.playGame4()).then(() => {
    console.log(chalk.bgWhite.red.bold(`Overall Points: ${userAnswerGame.overallPoints}`));
  })
  .then(() => userAnswerGame.playGame5()).then(() => {
    console.log(chalk.bgWhite.red.bold(`Overall Points: ${userAnswerGame.overallPoints}`));
    if (userAnswerGame.overallPoints > 150) {
      console.log(chalk.bgWhite.red.bold(`
            -------------------- CONGRATULATIONS! You've escaped! --------------------`));
    } else {
      console.log(chalk.bgWhite.red.bold(`
            -------------------- YOU LOST --------------------
            You did not collect enough points to escape.
                     Thanks for playing.`));
    }
  });

