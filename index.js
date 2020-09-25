const readmeInput = process.argv.slice(2, process.argv.length);
const [githubProfile, repoTitle, repoDesc, installation, usage, license, contributing, tests, questions] = readmeInput;
const inquirer = require('inquirer');

const promptUser = () => {
    console.log(
        `
=============================
Professional README Generator
=============================
        `
    )
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
          //installation instructions
          {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions!',
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
            message: 'Please enter how to use your project.',
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
            message: 'Please select the license you would like to use',
            choices: ['MIT', 'Apache', 'GPL'],
            default: false
          },
          //contributing
          {
            type: 'input',
            name: 'contributing',
            message: 'Please enter how to contribute to your project.',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter contribution details!');
                return false;
              }
            }
          },
    ])
}
// inquirer.writeFile('readme.md', readmeInput, err => {
//     if (err) throw err;


//     console.log("COMPLETE! Check out file!!");
// })

promptUser()
    .then(answers => console.log(answers))