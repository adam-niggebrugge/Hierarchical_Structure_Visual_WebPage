const TeamMember = require("./lib/TeamMember");
const Captain = require("./lib/Captain");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const teamMembers = [];
const kitNumber = [];

function startQuestions() {

    function createCaptain() {
        console.log("Please build your Soccer Club");
        inquirer.prompt([
          {
            type: "input",
            name: "captainName",
            message: "What is the team Captain's name?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
          },
          {
            type: "input",
            name: "captainKitNumber",
            message: "What number does your Captain where?",
            validate: answer => {
              const pass = answer.match(
                /^[0-9]\d*$/
              );
              if (pass) {
                return true;
              }
              return "Please enter a positive number.";
            }
          },
          {
            type: "checkbox",
            name: "position",
            message: "What position does your Captain play?",
            choices: ['Forward', 'Midfield', 'Defender', 'Goalie'],
            validate: answer => {
              const pass = answer.match(
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return "Please enter a valid email address.";
            }
          },
          {
            type: "input",
            name: "experience",
            message: "What is the team Captain's experince with the club?",
            validate: answer => {
              const pass = answer.match(
                /^[1-9]\d*$/
              );
              if (pass) {
                return true;
              }
              return "Please enter a positive number.";
            }
          }
        ]).then(answers => {
          const captain = new captain(answers.captainName, answers.captainId, answers.captainEmail, answers.captainOfficeNumber);
          teamMembers.push(captain);
          kitNumber.push(answers.captainKitId);
          createTeam();
        });
      }

      createCaptain(); 
}

startQuestions();