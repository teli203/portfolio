/*
Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself in that string.


Ex:
Input: “the quick brown fox jumps over the calm kitten quietly”
Output: "b"

Input: “this hat is the greatest!”
Output: "g"

Input: “what a wonderful day it has been!”
Output: "o"
*/

function firstOccurence(str) {
    for (var i = 0; i < str.length; i++) {
        var currentCharacter = str[i];
        var count = 0;

        for (var x = 0; x < str.length; x++) {
            if (str[x] === currentCharacter) {
                count++;
            }
        }

        if (count === 1) {
            return currentCharacter;
        }
    }
}

function firstOccurence2(str) {
    var charCount = {};
    for (var i = 0; i < str.length; i++) {
        var currentCharacter = str[i];
        if (charCount[currentCharacter]) {
            charCount[currentCharacter]++;
        } else {
            charCount[currentCharacter] = 1;
        }
    }
    for (var x in charCount) {
        if (charCount[x] === 1) {
            return x;
        }
    }
}

console.log(firstOccurence("the quick brown fox jumps over the calm kitten quietly"));
console.log(firstOccurence("this hat is the greatest!"));
console.log(firstOccurence("what a wonderful day it has been!"));