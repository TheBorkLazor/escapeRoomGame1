import inquirer from "inquirer";

import chalk from "chalk";

function mathsPuzzle() {
  return inquirer
    .prompt({
      type: "list",
      name: "result",
      message: "20% of 2 is equal to?",
      choices: ["20", "4", "0.4", "0.04"],
    })
    .then((result) => {
      let rightAnswer = "0.4";
      let userAnswer = result.result;

      if (userAnswer === rightAnswer) {
        console.log(chalk.bgBlue(
          `CORRECT!

           You solved this puzzle correctly.
           This will unlock the next room.`

        ));
        return 50;
      } else {
        console.log(chalk.bgRed(
          `INCORRECT.

        You did not solve this puzzle correctly.`
        ));
        return 0;
      }
    });
}
export default mathsPuzzle;
