const readmeInput = process.argv.slice(2, process.argv.length);
const [repoTitle, repoDesc, installation, usage, license, contributing, tests, githubProfile, emailAddress] = readmeInput;
const inquirer = require('inquirer');

const promptUser = () => {
    console.log(
        `
    =============================
    Professional README Generator
    **created by Chris Walston***
    =============================
        `
    )
    return inquirer.prompt([
        //github profile
        {
            type: 'input',
            name: 'githubProfile',
            message: 'Please enter your GitHub username:',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
          //email
        {
            type: 'input',
            name: 'emailAddress',
            message: 'Please enter your email:',
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
            message: 'Please enter your project title:',
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
            message: 'Please enter a description of your project:',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter a description!');
                return false;
              }
            }
          },
          //installation instructions
          {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions:',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter installation instructions');
                return false;
              }
            }
          },
          //usage
          {
            type: 'input',
            name: 'usage',
            message: 'Please enter how to use your project:',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter usage details!');
                return false;
              }
            }
          },
          //license
          {
            type: 'checkbox',
            name: 'license',
            message: 'Please select the license you would like to use:',
            choices: ['MIT', 'Apache', 'GPL']
          },
          //contributing
          {
            type: 'input',
            name: 'contributing',
            message: 'Please enter how to contribute to your project:',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter contribution details!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'tests',
            message: 'Please enter experiments for your app and how to run it:',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter experimental test details!');
                return false;
              }
            }
          }
    ])
}

const writeReadme = () => {
    fs = require('fs');
    const generateReadme = require('./src/readme-structure');
    
// inquirer.writeFile('readme.md', readmeInput, err => {
//     if (err) throw err;


//     console.log("COMPLETE! Check out file!!");
// })

}

promptUser()
    .then(answers => console.log(answers))
    .then(writeReadme())