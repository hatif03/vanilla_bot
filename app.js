import { log } from "console";
import ReadLine from "readline";
import matchPattern from "./matcher/index.js";

const rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.setPrompt("> ");
rl.prompt();
rl.on("line", reply => {
    matchPattern(reply, data => {
        switch(data.intent) {
            case "Hello":
                console.log(`${data.entities[0]} to you too`);
                rl.prompt();
                break;
            case "Exit":
                console.log("Have a good day.");
                process.exit(0);
                break;
            default:{
                console.log("I don't know what you mean :(");
                rl.prompt();
            }
        }
    });
});