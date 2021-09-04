const ClubMember = require('./lib/ClubMember');
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
            message: 'How many seasons has the Captain spent with the club?',
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
          addPlayer(captain);
        });
      }

      function checkToAddMore(){
        inquirer.prompt([
            {
              name: "continue",
              type: "confirm",
              message: "Would you like to add more members to the club?",
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
              addClubMember();
            } else if (answers.confirm_answer) {
              buildClub();
            } else {
              console.log('You are probably right, why stop when there are no constraints on your club size?');
              addClubMember();
            } 
          });
      }

      function addClubMember(){
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is the club member\'s name?',
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
            message: 'What is the club member\'s email?',
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
          const clubMember = new ClubMember(answers.name, answers.email);
          addPlayer(clubMember);
        });
      }

      function addPlayer(passedClubMember){
        inquirer.prompt([
        {
          type: 'input',
          name: 'kitNumber',
          message: `What number does ${passedClubMember.name} wear?`,
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
          message: `What is ${passedClubMember.name}'s twitter handle?`,
          validate: answer => {
            const pass = answer.match(
              /@\S+/
            );
            if (pass) {
              return true;
            }
            return 'Please enter a valid twitter handle. ::HINT:: add the @ to the beginning';
          }
        },
      ]).then(playerAnswers => {
          kitNumberCheck.push(playerAnswers.kitNumber);
          setPosition(passedClubMember, playerAnswers);
        });
      }


      function addForward(clubMember, passPlayerAnswers){
        inquirer.prompt([
          {
            type: 'input',
            name: 'scoredGoals',
            message: `How many goals has ${clubMember.name} scored this season?`,
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
          const forward = new Forward(passPlayerAnswers.kitNumber, passPlayerAnswers.twitter, clubMember, answers.scoredGoals);
          clubMembers.push(forward);
          checkToAddMore();
        });
      }

      function addMidfield(clubMember, passPlayerAnswers){
        inquirer.prompt([
          {
            type: 'input',
            name: 'longestGoalScored',
            message: `What is the longest goal ${clubMember.name} has scored this season?`,
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
            message: `What percent of duals does ${clubMember.name} win per game?`,
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
          const midfield = new Midfield(passPlayerAnswers.kitNumber, passPlayerAnswers.twitter, clubMember, answers.longestGoalScored, answers.dualsWon);
          clubMembers.push(midfield);
          checkToAddMore();
        });
      }

      function addDefender(clubMember, passPlayerAnswers){
        inquirer.prompt([         
        {
          type: 'input',
          name: 'averageHeaderAmt',
          message: `How many aerial duals does ${clubMember.name} win per game?`,
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
          message: `How many blocks this season is ${clubMember.name} credited with?`,
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
          const defender = new Defender(passPlayerAnswers.kitNumber, passPlayerAnswers.twitter, clubMember, answers.averageHeaderAmt, answers.blocks);
          clubMembers.push(defender);
          checkToAddMore();
        })
      }

      function addGoalie(clubMember, passPlayerAnswers){
        inquirer.prompt([
        {
          type: 'input',
          name: 'saves',
          message: `How many saves does ${clubMember.name} have for the club this season?`,
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
          message: `How many clean sheets does ${clubMember.name} have for the club this seaon?`,
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
          const goalie = new Goalie(passPlayerAnswers.kitNumber, passPlayerAnswers.twitter, clubMember, answers.saves, answers.cleanSheets);
          clubMembers.push(goalie);
          checkToAddMore();
        })
      }

      function getPositionInquirer(clubMember, position, passPlayerAnswers){
        switch (position) {
          case 'Forward':
            addForward(clubMember, passPlayerAnswers);
            break;
          case 'Midfield':
            addMidfield(clubMember, passPlayerAnswers);
            break;
          case 'Defender':
            addDefender(clubMember, passPlayerAnswers);
            break;
          case 'Goalie':
            addGoalie(clubMember, passPlayerAnswers);
             break;
          default:
            buildClub();
        }
      }

      function setPosition(clubMember, passPlayerAnswers){
        if(isGoalie === false){
          inquirer.prompt([
            {
              type: 'list',
              name: 'position',
              message: `What position does your ${clubMember.getRole()} play?`,
              choices: ['Forward', 'Midfield', 'Defender', 'Goalie'],
            },
            {
              name: "confirm_answer",
              type: "confirm",
              message: `You can only designate one Goalie for the club. Are you sure want ${clubMember.name} as your Goalie?`,
              when: (answer) => answer.position === 'Goalie',
            },
          ]).then(answers => {
            if(answers.position && !answers.confirm_answer) {
              getPositionInquirer(clubMember, answers.position, passPlayerAnswers);
            } else if(!answers.confirm_answer){
              console.log("Lets ask that again then.");
              setPosition(clubMember, passPlayerAnswers);
            } 
          })
        } else {
          inquirer.prompt([
            {
              type: 'list',
              name: 'position',
              message: `What position does your ${clubMember.getRole()} play?`,
              choices: ['Forward', 'Midfield', 'Defender'],
            }
          ]).then(answers => {
            getPositionInquirer(clubMember, answers.position, passPlayerAnswers);
          })
        }
      }

      function buildClub() {
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

