const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const init = function() {
    inquirer.prompt([
        {
            type: "list",
            message: "What is your employees role?",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"]
        }
    ]).then(response => {
        role = response.role
        switch (role) {
            case "Engineer":
                return engiInfo();
            
            case "Intern":
                return internInfo();

            case "Manager":
                return managerInfo();
        }
    })
}

const engiInfo = function() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your Engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your Engineer's GitHub username?",
            name: "github"
        }
    ]).then(response => {
        let engi = new Engineer(response.name, response.id, response.email, response.github);
        return engi;
    })
}

const internInfo = function() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your Intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your Intern's school?",
            name: "school"
        }
    ]).then(response => {
        let intern = new Intern(response.name, response.id, response.email, response.school);
        return intern;
    })
}

const managerInfo = function() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your Manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your Manager's office number?",
            name: "github"
        }
    ]).then(response => {
        let manager = new Manager(response.name, response.id, response.email, response.github);
        return manager;
    })
}
init();
