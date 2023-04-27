import { log } from "console";
import ReadLine from "readline";
import matchPattern from "./matcher/index.js";
import getWeather from "./weather/index.js";
import currentWeather from "./parser/index.js";

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
            case "CurrentWeather":
                console.log(`Checking weather for ${data.entities[1]} ...`);
                getWeather(data.entities[1])
                    .then(response => {
                        let parseResult = currentWeather(response);
                        console.log(parseResult);
                        rl.prompt();
                    })
                    .catch(error => {
                        console.log(error);
                        console.log("I don't seem to know anything about this location ... Sorry :)");
                        rl.prompt();
                    })
                rl.prompt();
                break;
            default:{
                console.log("I don't know what you mean :(");
                rl.prompt();
            }
        }
    });
});