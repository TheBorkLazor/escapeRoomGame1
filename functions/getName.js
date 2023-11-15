import inquirer from "inquirer";

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

export default getName;
