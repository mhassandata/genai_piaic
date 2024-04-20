import inquirer from "inquirer";
let name = await inquirer.prompt([
    {
        name: "number",
        message1: "Enter first number: ",
        type: "number"
    },
    {
        name: "number",
        message1: "Enter second number: ",
        type: "number"
    },
]);
