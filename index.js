import inquirer from "inquirer";

// move the below to own file to separate!! ------------------



const puzzle3 = async () => {
  let { result } = await inquirer.prompt({
    type: "list",
    name: "result",
    message: "20 % of 2 is equal to?",
    choices: ["20", "4", "0.4", "0.004"]
  })
  return result
}

const displayPuzzle3 = async () => {
  let rightAnswer = "0.4"
  let userAnswer = await puzzle3();
  console.log('ANSWERRR', userAnswer, rightAnswer)
  if (userAnswer === rightAnswer) {
    console.log("CORRECT! You are free to move on")
  } else {
    console.log("INCORRECT. You're stuck!")
  }
}

// -----------------------------------------

// const puzzle4 = async () => {

// }

// const displayPuzzle4 = async () => {

// }
// ----------------------------------------

class EscapeRoomGame {
  constructor() {
  }

  welcome() {
    console.log("---------------------------------")
    console.log("Welcome to our escape room. You're trapped. Solve the problems to make your way out. Warning - you may be timed!");
    console.log("---------------------------------")
  }

  playPuzzle3() {
    displayPuzzle3()
  }

  // playPuzzle4() {
  //   displayPuzzle4()
  // }

}





// const level = async () => {
//   let { answer } = await inquirer.prompt({
//     name: "result",
//     type: "list",
//     message: "Choose difficulty level?",
//     choices: ["easy", "medium", "hard"]

//   })

// return answer
// }

// const display = async () => {
//   let response = await level()
//   console.log(response)
// }

const game = new EscapeRoomGame()
game.welcome();
// game.level();
game.playPuzzle3();
