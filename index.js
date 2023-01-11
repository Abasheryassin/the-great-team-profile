const inquirer = require("inquirer");
const {managerQuestions, internQuestions, engineerQuestions} = require("./src/questions");

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
        console.log(response);
        addEmployee();
    });
}

init();