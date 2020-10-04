// Using a vowels string
function countVowelsViaString(string) {
    string = string.toLowerCase();
    var vowels = "aeiou".split('');
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) >= 0) {
            counter++;
        }
    }
    return counter;
}

// Using a vowels array
function countVowelsViaArray(string) {
    string = string.toLowerCase();
    var vowels = "aeiou".split('');
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            counter++;
        }
    }
    return counter;
}

// Test countVowelsViaArray!
// console.log(countVowelsViaArray("hello"));
// console.log(countVowelsViaArray("you are great!"));
// console.log(countVowelsViaArray("why?"));

// Test countVowelsViaString!
console.log(countVowelsViaString("hello"));
console.log(countVowelsViaString("you are great!"));
console.log(countVowelsViaString("why?"));