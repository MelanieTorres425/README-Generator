const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../Develop/utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the Title of your project?",
  "What is a description of your project?",
  "What are the installation instructions?",
  "How is this project used?",
  "Any contributions guidelines?",
  "What are your test instructions?",
  "What is your GitHub username?",
  "What is your email address?",
];

//Prompts
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: questions[0],
    },
    {
      type: "input",
      name: "description",
      message: questions[1],
    },
    {
      type: "input",
      name: "install",
      message: questions[2],
    },
    {
      type: "input",
      name: "usage",
      message: questions[3],
    },
    {
      type: "input",
      name: "contribute",
      message: questions[4],
    },
    {
      type: "input",
      name: "test",
      message: questions[5],
    },
    {
      type: "rawlist",
      name: "licensebadge",
      message: questions[6],
      choices: ["None", "MIT", "Apache", "GPL"],
    },
    {
      type: "input",
      name: "username",
      message: questions[7],
    },
    {
      type: "input",
      name: "email",
      message: questions[8],
    },
  ]);
}

// function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, (err) => {
    if (err) throw err;
  });
}

// function to initialize program
async function init() {
  console.log("initialize");
  try {
    const answers = await promptUser();
    const readMe = generateMarkdown(answers);
    await writeToFile("README.md", readMe);
    console.log("\nsuccessfully wrote README\n");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
