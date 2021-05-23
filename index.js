const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template.js');
const {writeFile, copyFile} = require('./utils/generate-site.js');

const teamMembers = [];
const startApp = () => {

    // Initial questions for adding a Manager
    const addManager = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the team manager\'s name?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the team manager\'s name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team manager\'s id?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the team manager\'s id!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the team manager\'s e-mail?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the team manager\'s e-mail!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the team manager\'s office number?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the team manager\'s office number!');
                        return false;
                    }
                }
            },

        ])
            .then(answers => {
                const manager = new Manager(answers.managerName, answers.id, answers.managerEmail, answers.officeNumber);
                teamMembers.push(manager);
                console.log(answers);
                createNewTeamMember();
            })
    }

    // Add Engineer Questions
    const addEngineer = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the engineer\'s name?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the engineer\'s name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineer\'s id?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the engineer\'s id!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the engineer\'s e-mail?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the engineer\'s e-mail!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'gitHub',
                message: 'What is the engineer\'s GitHub username?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the engineer\'s GitHub username!');
                        return false;
                    }
                }
            },

        ])
            .then(answers => {
                console.log(answers);
                const engineer = new Engineer(answers.engineerName, answers.id, answers.engineerEmail, answers.gitHub);
                teamMembers.push(engineer);
                createNewTeamMember();
            })
    }

    // And Intern Questions
    const addIntern = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the intern\'s name?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the intern\'s name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the intern\'s id?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the intern\'s id!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the intern\'s e-mail?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the intern\'s e-mail!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the intern\'s school?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the intern\'s school!');
                        return false;
                    }
                }
            },

        ])
            .then(answers => {
                console.log(answers);
                const intern = new Intern(answers.internName, answers.id, answers.internEmail, answers.school);
                teamMembers.push(intern);
                createNewTeamMember();
            })
    }

    // Add an Engineer or Intern or Finish menu options
    const createNewTeamMember = () => {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'teamMenu',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'Finish building my team']
            }
        ])
            .then(answers => {
                if (answers.teamMenu === 'Engineer') {
                    addEngineer();
                }
                else if (answers.teamMenu === 'Intern') {
                    addIntern();
                }
                else {
                    console.log(teamMembers);
                    //const pageHTML = generatePage(teamMembers);
                    writeFile(generatePage(teamMembers));
                    console.log('File created!');
                    copyFile();
                    console.log('Stylesheet Copied');
                    
                }
            })
    }

    addManager()

}

startApp();