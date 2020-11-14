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
