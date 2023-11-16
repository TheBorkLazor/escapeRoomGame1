import inquirer from "inquirer";

import chalk from "chalk";

async function anagram() {

    let correctAnswer = "crocodile";


    function solveAnagram() {
        return inquirer
            .prompt({
                type: "input",
                name: "result",
                message: "Can you solve the anagram? What is this word supposed to be? ----- ccorilodoe -----",
            })
            .then((result) => {
                let answer = result.result.toLowerCase();
                return answer;
            });
    }


    const userAnswer = await solveAnagram();

    if (userAnswer === correctAnswer) {
        console.log(chalk.white.bgBlue.bold(
            `CORRECT! 

            You solved this puzzle correctly.
            This will unlock the next room.`

        ));
        return 50;
    } else {

        console.log(chalk.bgRed.bold(
            `INCORRECT!

            You did not solve this puzzle correctly.`

        ));
        return 0;
    }


}

export default anagram;