const readmeInput = process.argv.slice(2, process.argv.length);
const [repoTitle, description, tableOfContents, installation, usage, license, contributing, tests, questions] = readmeInput;
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        //github profile
        {
            type: 'input',
            name: 'githubProfile',
            message: 'What is your GitHub username?',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
          //repo title
        {
            type: 'input',
            name: 'repoTitle',
            message: 'What is your project title?',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter a title!');
                return false;
              }
            }
          },
          //description
          {
            type: 'input',
            name: 'repoDesc',
            message: 'Please enter a description of your project.',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter a description!');
                return false;
              }
            }
          },
    ])
}
// inquirer.writeFile('readme.md', generateReadme(repoTitle, description, tableOfContents, installation, usage, license, contributing, tests, questions), err => {
//     if (err) throw err;


//     console.log("COMPLETE! Check out file!!");
// })

promptUser();