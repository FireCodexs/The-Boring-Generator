import inquirer from "inquirer";
import fs from "fs/promises";

let {
  title,
  description,
  installDescription,
  usage,
  contributionGuideline,
  tests,
  license,
  githubUsername,
  githubLink,
  eAddress,
} = await inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is your project's title? ",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project's description? ",
  },
  {
    type: "input",
    name: "installDescription",
    message: "Please write a description for the installation process: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Please write a description for the usage procedure: ",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose your desired license: ",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    name: "contributionGuideline",
    message: "Please state your contribution guidelines: ",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests have your app undergone? ",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Please state your GitHub username: ",
  },
  {
    type: "input",
    name: "githubLink",
    message: "Please insert your GitHub profile link: ",
  },
  {
    type: "input",
    name: "eAddress",
    message: "Please state your email address: ",
  },
]);

let readmeText = `
## Overview

<img src="https://img.shields.io/badge/License-${license}-green.svg">

### Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contribution Guidelines](#contributions)

[Tests](#tests)

[Questions](#questions)


# ${title}



# Description
## ${description}

# Installation
## ${installDescription}


# Usage
## ${usage}


# License 
This application is covered under the ${license} license.


# Contributions
## ${contributionGuideline}


# Tests
## ${tests}


# Questions
[@${githubUsername}](${githubLink})


For more information please contact me at 
## ${eAddress}


`;

fs.writeFile("README.md", readmeText);
