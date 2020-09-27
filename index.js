const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./src/readme-structure.js');

const questions = [
    //github profile
    {
        type: 'input',
        name: 'githubProfile',
        message: 'Please enter your GitHub username:',
        validate: profileInput => {
            if (profileInput) {
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
            validate: emailInput => {
              if (emailInput) {
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
            validate: titleInput => {
              if (titleInput) {
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
            validate: repoInput => {
              if (repoInput) {
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
            validate: installInput => {
              if (installInput) {
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
            message: 'Please explain the uses of your project:',
            validate: usageInput => {
              if (usageInput) {
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
            message: 'Please enter any contributions to your project (optional, enter to skip):',
            default: 'N/A'
          },
          {
            type: 'input',
            name: 'tests',
            message: "Please enter experiments you've run for your app, and how to use them (optional, enter to skip):",
            default: 'N/A'
          }
]

//writes REAME file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log('README generated!');
    });
};

//starts program
function init() {
    console.log(`
        ==========================
             README GENERATOR
         Created by Chris Walston
        ==========================
    `)
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile('./README.md', generateReadme({...answers}))
    });   
};

init();