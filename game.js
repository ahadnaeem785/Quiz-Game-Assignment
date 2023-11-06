#! /usr/bin/env node
import inquirer from "inquirer";
import quiz from "./qs.js";
let obtain_marks = 0;
let total_marks = 0;
for (let q of quiz) {
    let input = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: q.question,
            choices: q.options
        }
    ]);
    const { options } = input;
    if (options == q.correct) {
        obtain_marks += q.Marks;
        total_marks += q.Marks;
    }
    else {
        total_marks += q.Marks;
    }
}
console.log(`Total Marks :${total_marks}`);
console.log(`Obtained Marks:${obtain_marks}`);
