import inquirer from "inquirer";

import chalk from "chalk";

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
        console.log(chalk.bgBlue.bold(
          `CORRECT!

          You chose to Look behind the painting.
          You found a key, this will unlock the next room.`
        ));


        return 50;


      } else {
        console.log(chalk.bgRed.bold(
          `INCORRECT.

        You chose to ${selectedOption}.`
        ));

        return 0;
      }
    });
}

export default searchRoom;
