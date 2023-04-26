const patternDict = [{
    pattern: "\\b(?<greetings>Hi|Hello|Hey)\\b",
    intent: "Hello"
},{
    pattern: "\\b(Bye|Exit)\\b",
    intent: "Exit"
}];

export default patternDict;