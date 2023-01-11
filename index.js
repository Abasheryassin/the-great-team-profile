const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

const { managerQuestions, internQuestions, engineerQuestions } = require("./src/questions");
const { htmlStart, htmlEnd } = require("./src/html");
let addedProfiles = ``;

//ask manager to build thier team
function addEmployee() {
    inquirer
        .prompt({
            type: "list",
            message: "Please choose an employee to add below or finalize team",
            name: "employee",
            choices: ["Engineer", "Intern", "Finalize Team"]
        })
        .then((response) => {
            if (response.employee === "Intern") {
                //write code here
                addIntern();
            } else if (response.employee === "Engineer") {
                //write code here
                addEngineer();
            } else {
                createHTML();
                return;
            }
        })
}

//asks for new intern info and saves it
function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            let { name, id, email, school } = response;

            let intern = new Intern(name, id, email, school);

            let profile = `<div class="col-4">
        <div class="p-3 border bg-light">
         <h1>${intern.name}</h1>
         <h2>${intern.getRole()}</h2>
         <p>ID: ${intern.id}</p>
         <p>Email: <a  href="mailto:${intern.email}">${intern.email}</a></p>
         <p>School: ${intern.school}</p>
        </div>
       </div>`;

            addedProfiles += profile;
            addEmployee();
        });
}

//asks for new engineer info and saves it
function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            let { name, id, email, github } = response;

            let engineer = new Engineer(name, id, email, github);

            let profile = `<div class="col-4">
        <div class="p-3 border bg-light">
         <h1>${engineer.name}</h1>
         <h2>${engineer.getRole()}</h2>
         <p>ID: ${engineer.id}</p>
         <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
         <p>Github: <a href="https://github.com/${engineer.github}" target= "_blank">${engineer.github}</a></p>
        </div>
       </div>`;

            addedProfiles += profile;
            addEmployee();
        });
}

function createHTML() {
    let finalHTML = htmlStart + addedProfiles + htmlEnd;

    fs.writeFile("index.html", finalHTML, (err) => err ? console.error(err) : console.log('Success!'));
}

//Initalizes the program asks for manager information
function init() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            let { name, id, email, officeNumber } = response;

            let manager = new Manager(name, id, email, officeNumber);

            let profile = `<div class="col-4">
        <div class="p-3 border bg-light">
         <h1>${manager.name}</h1>
         <h2>${manager.getRole()}</h2>
         <p>ID: ${manager.id}</p>
         <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
         <p>Office Number: ${manager.officeNumber}</p>
        </div>
       </div>`;

            addedProfiles += profile;
            addEmployee();
        });
}

init();