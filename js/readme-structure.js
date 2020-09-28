const generateReadme = (data) => {
    return `
# ${data.repoTitle} ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Description
${data.repoDesc}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Licenses](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
View my other repositories @ https://www.github.com/${data.githubProfile}
If you have anymore questions, please email me @ ${data.emailAddress}
    `;
}

module.exports = generateReadme;