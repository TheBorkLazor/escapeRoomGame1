import inquirer from "inquirer";

import chalk from "chalk";

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


    const userAnswer = await solveRiddle();

    if (userAnswer === correctAnswer) {
        console.log(chalk.bgBlue(
            `CORRECT! 

        You solved this puzzle correctly.
        This will unlock the next room.`

        ));
        return 50;
    } else {
        attempts++;
        console.log(chalk.bgRed(
            `INCORRECT! 

        You did not solve this puzzle correctly.`

        ));
        return 0;
    }


}

export default riddle;