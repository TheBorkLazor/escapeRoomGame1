import chalk from "chalk";


class room {
  //Class for a room
  constructor(description) {
    this.description = description;
  }
  //Method to enter the room
  enter() {
    console.log(chalk.bgGreenBright.bold.underline(`You entered ${this.description}`));
  }
}

export default room;
