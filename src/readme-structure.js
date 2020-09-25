const generateReadme = (repoTitle, repoDesc, tableOfContents, installation, usage, license, contributing, tests, githubProfile, emailAddress) => {
    return `
# ${repoTitle}
## Description
${repoDesc}
## Table of Contents
${tableOfContents}
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
