const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'What is your project\'s name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project:',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to to know about using the repo?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'What does the user need to to know about contributing to the repo?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>
	err ? console.log(err) : console.log('Success!'));
}

// function to initialize program
function init() {
  inquirer
		.prompt(questions)
		.then((response) => {
			writeToFile('README.md', generateMarkdown(response));
		});
}

// function call to initialize program
init();