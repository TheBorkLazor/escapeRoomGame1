import inquirer from "inquirer";
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]; //choices tha are avaliable
  const randomIndex = Math.floor(Math.random() * choices.length); // random number to fit the lenght of the choices array
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Its a tie";
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

function playGame() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userChoice",
        message: "Your move",
        choices: ["rock", "paper", "scissor"],
      },
    ])
    .then((answers) => {
      const userChoice = answers.userChoice;
      const computerChoice = getComputerChoice();
      console.log(`Computer chose: ${computerChoice}`);
      console.log(determineWinner(userChoice, computerChoice));
    });
}
playGame();
