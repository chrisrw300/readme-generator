const readmeInput = process.argv.slice(2, process.argv.length);
const [repoTitle, description, tableOfContents, installation, usage, license, contributing, tests, questions] = readmeInput;
const fs = require('fs');


fs.writeFile('readme.md', generateReadme(repoTitle, description, tableOfContents, installation, usage, license, contributing, tests, questions), err => {
    if (err) throw err;

    console.log("COMPLETE! Check out file!!");
})