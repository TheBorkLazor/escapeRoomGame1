import inquirer from "inquirer";

import chalk from 'chalk';

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]; //choices that are avaliable
    const randomIndex = Math.floor(Math.random() * choices.length); // random number to fit the length of the choices array
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

async function rockPaperScissors() {
    let result = "It's a tie";

    while (result === "It's a tie") {
        const answers = await inquirer.prompt([
            {
                type: "list",
                name: "userChoice",
                message: "Your move",
                choices: ["rock", "paper", "scissors"],
            },
        ]);

        const userChoice = answers.userChoice;
        const computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
        result = determineWinner(userChoice, computerChoice);

    }

    if (result === "You win!") {
        console.log(chalk.bgBlue.bold(
            `YOU WON ROCK PAPER SCISSORS!

            This is the end of the game.`
        ))
        return 50;
    }

    if (result === "You lose!") {
        console.log
            (chalk.bgRed.bold(
                `YOU LOST ROCK PAPER SCISSORS!

                This is the end of the game.`
            ));
        return 0;
    }
}

export default rockPaperScissors;