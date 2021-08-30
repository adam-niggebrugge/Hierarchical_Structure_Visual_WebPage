const TeamMember = require('./lib/TeamMember');
const Captain = require('./lib/Captain');
const Forward = require('./lib/Forward')

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const teamMembers = [];
const kitNumberCheck = [];
let isGoalie = false;

function startQuestions() {

    function createCaptain() {
        console.log('Please build your Soccer Club');
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is the team Captain\'s name?',
            validate: answer => {
              if (answer !== '') {
                return true;
              }
              return 'Please enter at least one character.';
            }
          },
          {
            type: 'input',
            name: 'captainKitNumber',
            message: 'What number does your Captain wear?',
            validate: answer => {
              const pass = answer.match(
                /^[0-9]\d*$/
              );
              if (pass) {
                return true;
              }
              return 'Please enter a positive number.';
            }
          },
          {
            type: 'input',
            name: 'captainEmail',
            message: 'What is the Captain\'s email?',
            validate: answer => {
              const pass = answer.match(
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return 'Please enter a valid email address.';
            }
          },
          {
            type: 'input',
            name: 'experience',
            message: 'What is the team Captain\'s experince with the club?',
            validate: answer => {
              const pass = answer.match(
                /^[0-9]\d*$/
              );
              if (pass) {
                return  true;
              }
              return 'Please enter a positive number.';
            }
          },
        ]).then(answers => {
          const captain = new captain(answers.name, answers.captainKitNumber, answers.captainEmail, answers.experience);
          setPosition(captain);
          kitNumber.push(answers.captainKitId);
        });
      }

      function addTeamMember(){
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is the team member\'s name?',
            validate: answer => {
              if (answer !== '') {
                return true;
              }
              return 'Please enter at least one character.';
            }
          },
          {
            type: 'input',
            name: 'kitNumber',
            message: 'What number does your team member wear?',
            validate: answer => {
              const pass = answer.match(
                /^[0-9]\d*$/
              );
              if (pass) {
                if (kitNumberCheck.includes(answer)) {
                  return 'This ID is already taken. Please enter a different number.';
                } else {
                  return true;
                }
              }
              return 'Please enter a positive number.';
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is the team member\'s email?',
            validate: answer => {
              const pass = answer.match(
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return 'Please enter a valid email address.';
            }
          },
        ]).then(answers => {
          const teamMember = new TeamMember(answers.name, answers.kitNumber, answers.email);
          setPosition(teamMember);
          kitNumberCheck.push(answers.kitNumber);
        });
      }

      function addForward(teamMember){
        inquirer.prompt([
        ]).then(answers => {
           const forward = new Forward()
        });
      }

      function getPositionInquirer(teamMember, position){
        switch (position) {
          case 'Forward':
            addForward(teamMember);
            break;
          case 'Midfield':
            addMidfield(teamMember);
            break;
          case 'Defender':
            addDefender(teamMember);
            break;
          case 'Goalie':
            addGoalie(teamMember);
             break;
          default:
            //file stream out
        }
      }

      function setPosition(teamMember){
        if(isGoalie === false){
          inquirer.prompt([
            {
              type: 'list',
              name: 'position',
              message: `What position does your ${teamMember.getRole()} play?`,
              choices: ['Forward', 'Midfield', 'Defender', 'Goalie'],
            }
          ]).then(answers => {
            if(answers.position === 'Goalie'){
              isGoalie = true;
            }
             getPositionInquirer(teamMember, answers.position)
            
          })
        } else {
          inquirer.prompt([
            {
              type: 'list',
              name: 'position',
              message: `What position does your ${teamMember.getRole()} play?`,
              choices: ['Forward', 'Midfield', 'Defender'],
            }
          ]).then(answers => {
            getPositionInquirer(teamMember, answers.position)
          })
        }
      }

      createCaptain(); 




}

startQuestions();

