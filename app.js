import { log } from "console";
import ReadLine from "readline";
import matchPattern from "./matcher/index.js";
import getWeather from "./weather/index.js";

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
                console.log(`Checking weather for ${data.entities[0]} ...`);
                getWeather(data.entities[0])
                    .then(response => console.log(response))
                    .catch(error => {
                        console.log(error);
                        console.log("There seems to be a problem connecting to weather services");
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