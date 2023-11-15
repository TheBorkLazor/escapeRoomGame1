import inquirer from "inquirer";

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
        console.log(
          "You chose to Look behind the painting. You found a key, this will unlock the next room"
        );
      } else {
        console.log(`You chose to ${selectedOption}. You found nothing.`);
        return searchRoom();
      }
    });
}

export default searchRoom;
