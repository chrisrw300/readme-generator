const generateReadme = (repoTitle, repoDesc, installation, usage, license, contributing, tests, githubProfile, emailAddress) => {
    return `
# ${repoTitle} ${license}
## Description
${repoDesc}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contributing
${contributing}
## Tests
${tests}
## Questions
View my other repositories @ https://www.github.com/${githubProfile}
If you have anymore questions, please email me @ ${emailAddress}
    `;
}
