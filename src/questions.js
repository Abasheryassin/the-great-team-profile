//hosts all of the questions asked in the command line
const managerQuestions = [
    {
        type: "input",
        message: "Please enter the managers name",
        name: "name"
    },
    {
        type: "input",
        message: "Please enter the managers employee ID",
        name: "ID"
    },
    {
        type: "input",
        message: "Please enter the managers email address",
        name: "email"
    },
    {
        type: "input",
        message: "Please enter the managers office number",
        name: "office"
    }
];
const internQuestions = [
    {
        type: "input",
        message: "Please enter the interns name",
        name: "name"
    },
    {
        type: "input",
        message: "Please enter the interns employee ID",
        name: "ID"
    },
    {
        type: "input",
        message: "Please enter the interns email address",
        name: "email"
    },
    {
        type: "input",
        message: "Please enter interns school",
        name: "school"
    },
];
const engineerQuestions = [
    {
        type: "input",
        message: "Please enter the engineers name",
        name: "name"
    },
    {
        type: "input",
        message: "Please enter the engineers employee ID",
        name: "ID"
    },
    {
        type: "input",
        message: "Please enter the engineers email address",
        name: "email"
    },
    {
        type: "input",
        message: "Please enter the engineers Github",
        name: "github"
    },
]
module.exports = {
    managerQuestions: managerQuestions,
    internQuestions: internQuestions,
    engineerQuestions: engineerQuestions};