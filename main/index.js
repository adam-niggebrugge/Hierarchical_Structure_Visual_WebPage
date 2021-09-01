const TeamMember = require('./lib/TeamMember');
const Captain = require('./lib/Captain');
const Forward = require('./lib/Forward')
const Defender = require('./lib/Defender');
const Midfield = require('./lib/MidField');
const Goalie = require('./lib/Goalie');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "club.html");

const render = require("./src/html-template.js");

const clubMembers = [];
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
            message: 'How many years has the Captain spent with the club?',
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
          const captain = new Captain(answers.name, answers.captainEmail, answers.experience);
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
              when: (answer) => answer.continue === false,
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
          const teamMember = new TeamMember(answers.name, answers.email);
          setPosition(teamMember);
        });
      }

      function addForward(teamMember){
        inquirer.prompt([
          {
            type: 'input',
            name: 'kitNumber',
            message: `What number does ${teamMember.name} wear?`,
            validate: answer => {
              const pass = answer.match(
                /^[0-9]\d*$/
              );
              if (pass){
                if(kitNumberCheck.includes(answer)){
                  return 'This number has already been assigned. Please enter a different number.'
                }else {
                  return true;
                }
              }
              return 'Please enter a positive number.';
            }
          },
          {
            type: 'input',
            name: 'twitter',
            message: 'What is the team member\'s twitter handle?',
            validate: answer => {
              const pass = answer.match(
                /@\S+/
              );
              if (pass) {
                return true;
              }
              return 'Please enter a valid twitter handle.::HINT:: add the @ to the beginning';
            }
          },
          {
            type: 'input',
            name: 'scoredGoals',
            message: `How many goals has ${teamMember.name} scored this season?`,
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
          const forward = new Forward(answers.kitNumber, answers.twitter, teamMember, answers.scoredGoals);
          clubMembers.push(forward);
          kitNumberCheck.push(answers.kitNumber);
          checkToAddMore();
        });
      }

      function addMidfield(teamMember){
        inquirer.prompt([
          {
            type: 'input',
            name: 'kitNumber',
            message: `What number does ${teamMember.name} wear?`,
            validate: answer => {
              const pass = answer.match(
                /^[0-9]\d*$/
              );
              if (pass){
                if(kitNumberCheck.includes(answer)){
                  return 'This number has already been assigned. Please enter a different number.'
                }else {
                  return true;
                }
              }
              return 'Please enter a positive number.';
            }
          },
          {
            type: 'input',
            name: 'twitter',
            message: 'What is the team member\'s twitter handle?',
            validate: answer => {
              const pass = answer.match(
                /@\S+/
              );
              if (pass) {
                return true;
              }
              return 'Please enter a valid twitter handle.::HINT:: add the @ to the beginning';
            }
          },
          {
            type: 'input',
            name: 'longestGoalScored',
            message: `What is the longest goal ${teamMember.name} has scored?`,
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
          const midfield = new Midfield(answers.kitNumber, answers.twitter, teamMember, answers.longestGoalScored, answers.dualsWon);
          clubMembers.push(midfield);
          kitNumberCheck.push(answers.kitNumber);
          checkToAddMore();
        });
      }

      function addDefender(teamMember){
        inquirer.prompt([
        {
          type: 'input',
          name: 'kitNumber',
          message: `What number does ${teamMember.name} wear?`,
          validate: answer => {
            const pass = answer.match(
              /^[0-9]\d*$/
            );
            if (pass){
              if(kitNumberCheck.includes(answer)){
                return 'This number has already been assigned. Please enter a different number.'
              }else {
                return true;
              }
            }
            return 'Please enter a positive number.';
          }
        },
        {
          type: 'input',
          name: 'twitter',
          message: 'What is the team member\'s twitter handle?',
          validate: answer => {
            const pass = answer.match(
              /@\S+/
            );
            if (pass) {
              return true;
            }
            return 'Please enter a valid twitter handle.::HINT:: add the @ to the beginning';
          }
        },
        {
          type: 'input',
          name: 'averageHeaderAmt',
          message: `How many headers does ${teamMember.name} average per game?`,
          validate: answer => {
            const pass = answer.match(
              /^[0-9]\d*$/
            );
            if (pass){
                return true;
            }
            return 'Please enter a positive number.';
          }
        },
        {
          type: 'input',
          name: 'blocks',
          message: `How many blocks is ${teamMember.name} credited with?`,
          validate: answer => {
            const pass = answer.match(
              /^[0-9]\d*$/
            );
            if (pass){
              return true;
            }
            return 'Please enter a positive number.';
          }
        }
        ]).then(answers => {
          const defender = new Defender(answers.kitNumber, answers.twitter, teamMember, answers.averageHeaderAmt, answers.blocks);
          clubMembers.push(defender);
          kitNumberCheck.push(answers.kitNumber);
          checkToAddMore();
        })
      }

      function addGoalie(teamMember){
        inquirer.prompt([
        {
          type: 'input',
          name: 'kitNumber',
          message: `What number does ${teamMember.name} wear?`,
          validate: answer => {
            const pass = answer.match(
              /^[0-9]\d*$/
            );
            if (pass){
              if(kitNumberCheck.includes(answer)){
                return 'This number has already been assigned. Please enter a different number.'
              }else {
                return true;
              }
            }
            return 'Please enter a positive number.';
          }
        },
        {
          type: 'input',
          name: 'twitter',
          message: 'What is the team member\'s twitter handle?',
          validate: answer => {
            const pass = answer.match(
              /@\S+/
            );
            if (pass) {
              return true;
            }
            return 'Please enter a valid twitter handle.::HINT:: add the @ to the beginning';
          }
        },
        {
          type: 'input',
          name: 'saves',
          message: `How many saves does ${teamMember.name} have for your club?`,
          validate: answer => {
            const pass = answer.match(
              /^[0-9]\d*$/
            );
            if (pass){
                return true;
            }
            return 'Please enter a positive number.';
          }
        },
        {
          type: 'input',
          name: 'cleanSheets',
          message: `How many clean sheets does ${teamMember.name} have for your club?`,
          validate: answer => {
            const pass = answer.match(
              /^[0-9]\d*$/
            );
            if (pass){
              return true;
            }
            return 'Well, that was unexpected, surely a mistake. Please enter a positive number.';
          }
        }
        ]).then(answers => {
          const goalie = new Goalie(answers.kitNumber, answers.twitter, teamMember, answers.saves, answers.cleanSheets);
          clubMembers.push(goalie);
          kitNumberCheck.push(answers.kitNumber);
          checkToAddMore();
        })
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
            },
            {
              name: "confirm_answer",
              type: "confirm",
              message: `You can only designate one Goalie for the club. Are you sure want ${teamMember.name} as your Goalie?`,
              when: (answer) => answer.position === 'Goalie',
            },
          ]).then(answers => {
            if(answers.position || answers.confirm_answer){
              if(answers.position === 'Goalie'){
                isGoalie = true;
              }
              getPositionInquirer(teamMember, answers.position);
            } else{
              //user has decided not make the team member a goalie, repeat questions
              console.log("Lets ask that again then.")
              setPosition(teamMember);
            }
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
            getPositionInquirer(teamMember, answers.position);
          })
        }
      }

      function buildTeam() {
         // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(clubMembers), "utf-8");
        return;
      }

      createCaptain(); 

}

startQuestions();

