const inquirer = require("inquirer");
const {managerQuestions, internQuestions, engineerQuestions} = require("./src/questions");

function init(){
    inquirer
    .prompt(managerQuestions)
    .then((response) => {
        console.log(response);
    });
}

init();