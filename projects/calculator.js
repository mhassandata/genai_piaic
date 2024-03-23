import inquirer from "inquirer";
let name = await inquirer.prompt([
    {
        name: "name",
        message1: "Enter your name: ",
        type: "type"
    }
]);
console.log("Your name is " + name.name);
