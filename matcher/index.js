import patternDict from "../patterns/index.js";
import XRegExp from "xregexp";


let createEntities = (str, pattern) => XRegExp.exec(str, XRegExp(pattern, "i"));

let matchPattern = (str, cb) => {
    let getResult = patternDict.find(item => {
        if(XRegExp.test(str, XRegExp(item.pattern, "i"))){
            return true;
        }
    });

    if(getResult){
        return cb({
            intent: getResult.intent,
            entities: createEntities(str, getResult.pattern)
        });
    } else{
        return cb({});
    }
};

export default matchPattern;