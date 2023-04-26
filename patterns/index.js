const patternDict = [{
    pattern: "\\b(?<greetings>Hi|Hello|Hey)\\b",
    intent: "Hello"
},{
    pattern: "\\b(Bye|Exit)\\b",
    intent: "Exit"
},{
    pattern: "like\\sin\\s\\b(?<city>.+)",
    intent: "CurrentWeather"
}];

export default patternDict;