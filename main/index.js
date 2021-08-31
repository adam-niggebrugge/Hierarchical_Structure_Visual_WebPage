const TeamMember = require('./lib/TeamMember');
const Captain = require('./lib/Captain');
const Forward = require('./lib/Forward')
const Defender = require('./lib/Defender');
const Midfield = require('./lib/MidField');
const Goalie = require('./lib/Goalie');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const teamMembers = [];
const kitNumberCheck = [];
let isGoalie = false;//Flag to only allow one goalie per team

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
        });
      }

      function checkToAddMore(){
        inquirer.prompt([
            {
              name: "continue",
              type: "confirm",
              message: "Would you like to add more team members?",
            },
            {
              name: "confirm_answer",
              type: "confirm",
              message: "Are you sure?",
              when: (answers) => answers.continue === false,
            },
          ])
          .then((answers) => {
            if (answers.continue) {
              addTeamMember();
            } else if (answers.confirm_answer) {
              buildTeam();
            } else {
              console.log('You are probably right, why stop when there is no constraints on your team size?');
              addTeamMember();
            } 
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
          }
        ]).then(answers => {
          const teamMember = new TeamMember(answers.name, answers.kitNumber, answers.email);
          setPosition(teamMember);
        });
      }

      function addForward(teamMember){
        inquirer.prompt([
          {
            type: 'input',
            name: 'kitNumber',
            message: `What number does ${teamMember.name} wear?'`,
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
            name: 'scoredGoals',
            message: `How many goals has ${teamMember.name}?`,
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
        ]).then(answers => {
          kitNumber.push(answers.kitNumber);
          checkToAddMore();
        });
      }

      function addMidfield(teamMember){
        inquirer.prompt([
          {
            type: 'input',
            name: 'longestGoalScored',
            message: `What is the longest goal has ${teamMember.name}?`,
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
            name: 'dualsWon',
            message: `How many duals has ${teamMember.name} won per game?`,
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
        ]).then(answers => {
          kitNumber.push(answers.kitNumber);
          
          checkToAddMore();
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
            buildTeam();
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


      function buildTeam() {
        //TODO file stream out
        return;
      }


      createCaptain(); 




}

startQuestions();

