import inquirer from "inquirer";

function mathsPuzzle() {
  return inquirer
    .prompt({
      type: "list",
      name: "result",
      message: "20% of 2 is equal to?",
      choices: ["20", "4", "0.4", "0.004"],
    })
    .then((result) => {
      let rightAnswer = "0.4";
      let userAnswer = result.result;
      console.log("ANSWER", userAnswer, rightAnswer);
      if (userAnswer === rightAnswer) {
        console.log("CORRECT! You are free to move on");
      } else {
        console.log("INCORRECT. You're stuck!. Game Over!");
        process.exit();
      }
    });
}
export default mathsPuzzle;
