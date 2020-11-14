const licenses = {
  'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'GPL 3.0': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  'BSD 3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'None': '',
};

// function to generate markdown for README
function generateMarkdown( {username, email, project, description, license, dependencies, tests, usage, contribute} ) {
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

module.exports = generateMarkdown;
