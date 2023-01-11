const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const {managerQuestions, internQuestions, engineerQuestions} = require("./src/questions");
const {htmlStart, htmlEnd} = require("./src/html");
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
        console.log(response);
        if (response.employee === "Intern"){
            //write code here
            addIntern();
        } else if (response.employee === "Engineer"){
            //write code here
            addEngineer();
        } else {
            //write code here
            return
        }
    })
}

//asks for new intern info and saves it
function addIntern() {
    inquirer
    .prompt(internQuestions)
    .then((response) => {
        console.log(response);
        addEmployee();
    });
}

//asks for new engineer info and saves it
function addEngineer() {
    inquirer
    .prompt(engineerQuestions)
    .then((response) => {
        console.log(response);
        addEmployee();
    });
}

//Initalizes the program asks for manager information
function init(){
    inquirer
    .prompt(managerQuestions)
    .then((response) => {
        let {name, id, email, officeNumber} = response;

        let manager = new Manager(name, id, email, officeNumber);

        let profile = `<div class="col-4">
        <div class="p-3 border bg-light">
         <h1>${manager.name}</h1>
         <h2>${manager.getRole()}</h2>
         <p>ID: ${manager.id}</p>
         <p>Email: <a href="${manager.email}">${manager.email}</a></p>
         <p>Office Number: ${manager.officeNumber}</p>
        </div>
       </div>`;

       addedProfiles += profile;
        console.log(addedProfiles);
        addEmployee();
    });
}

init();