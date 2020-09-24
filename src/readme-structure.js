const generateReadme = (repoTitle, description, tableOfContents, installation, usage, license, contributing, tests, questions) => {
    return `
# ${repoTitle}
## Description
${description}
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
${questions}
    `;
}
