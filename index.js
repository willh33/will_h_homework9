const fs = require('fs');
const inquirer = require('inquirer');
const licenses = {
  'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'GPL 3.0': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  'BSD 3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'None': '',
};

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
      name: 'contibute',
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
			writeToFile('README.md', generateText(response));
		});
}

// function call to initialize program
init();


const generateText = ( {username, email, project, description, license, dependencies, tests, usage, contribute} ) => {
  return `
      # Project Title
      ${project}
      
      ${licenses[license]}
      
      ## Description
      ${description}
      
      ## Table of Contents
      * [Installation](#installation)
      * [Usage](#usage)
      * [License](#license)
      * [Contributing](#contributing)
      * [Tests](#tests)
      * [Questions](#questions)
      
      ##Installation
      To install the necessary dependencies, run the following command
      \`${dependencies}\`
      
      ##Usage
      ${usage}
      
      
      ##License
      This project is licensed under ${license}
      
      ##Contributing
      ${contribute}
      
      ##Tests
      To run tests, run the following command
      \`${tests}\`
      
      ##Questions
      If you have questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${username}
  `
  
}

// // fs is a Node standard library package for reading and writing files
// const fs = require('fs');
// const inquirer = require('inquirer');

// const prompt = async () => {
// 	let response = await inquirer
// 	.prompt([
// 	  {
// 		type: 'input',
// 		message: 'What is your name?',
// 		name: 'name',
// 	  },
// 	  {
// 		type: 'input',
// 		message: 'What is your location?',
// 		name: 'location',
// 	  },
// 	  {
// 		type: 'input',
// 		message: 'Enter a short bio',
// 		name: 'bio',
// 	  },
// 	  {
// 		type: 'input',
// 		message: 'Enter your LinkedIn Url',
// 		name: 'linkedInUrl',
// 	  },
// 	  {
// 		type: 'input',
// 		message: 'Enter your Github Url',
// 		name: 'githubUrl',
// 	  },
// 	]);
// 	console.log(response);
// 	let htmlDocument = `
// 		<!doctype html>
// 		<html lang="en">

// 		<head>
// 			<title>Title</title>
// 			<!-- Required meta tags -->
// 			<meta charset="utf-8">
// 			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

// 			<!-- Bootstrap CSS -->
// 			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
// 				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
// 		</head>

// 		<body>

// 			<div class="container">
// 				<div class="card" style="width: 18rem;">
// 					<div class="card-body">
// 						<h5 class="card-title">${response.name}</h5>
// 						<p class="card-text">${response.bio}</p>
// 					</div>
// 					<ul class="list-group list-group-flush">
// 						<li class="list-group-item">I live in ${response.location}</li>
// 					</ul>
// 					<div class="card-body">
// 						<a href="${response.linkedInUrl}" class="card-link">LinkedIn Profile</a>
// 						<a href="${response.githubUrl}" class="card-link">Github Profile</a>
// 					</div>
// 				</div>
// 			</div>
// 			<!-- Optional JavaScript -->
// 			<!-- jQuery first, then Popper.js, then Bootstrap JS -->
// 			<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
// 				integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
// 				crossorigin="anonymous"></script>
// 			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
// 				integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
// 				crossorigin="anonymous"></script>
// 			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
// 				integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
// 				crossorigin="anonymous"></script>
// 		</body>

// 		</html>
// 	`;

// 	writeHtml(htmlDocument)
// }

// prompt();

// const writeHtml = (html) => {
// 	const filename = `index.html`;
// 	fs.writeFile(filename, html, (err) =>
// 	err ? console.log(err) : console.log('Success!'));
// }

