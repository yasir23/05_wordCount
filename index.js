#! /usr/bin/env node 
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
let playername;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(`lets start the word counter! \n`);
    await sleep();
    rainbowTitle.stop();
}
await welcome();
const answers = await inquirer
    .prompt([{
        type: "input",
        name: "sentence",
        message: "write a sentence for word counting",
    }]);
const words = answers.sentence.trim().split(" ");
console.log(`So there are ${words.length} words in your sentence`);
