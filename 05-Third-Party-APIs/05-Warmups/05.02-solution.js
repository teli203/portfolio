// Check if the given string is a palindrome
var isPalindrome = function (s) {
    for (var i = 0; i < s.length; i++) {
        // Check current letter (i) vs. same position from end of string
        if (s[i] !== s[s.length - (i + 1)]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("noon"));
console.log(isPalindrome("horse"));
console.log(isPalindrome("racecar"));

var isPalindrome2 = function (s) {
    return s.split("").reverse().join("") === s;
}