var censorWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inStr) {
    for (word in censorWords) {
        inStr = inStr.replace(word, "***");
    }
    
    for (word in customCensoredWords) {
        inStr = inStr.replace(word, "***");
    }

    return inStr;
}

function addCensoredWords(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censorWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;

