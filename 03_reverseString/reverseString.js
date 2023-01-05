const reverseString = function(string) {
    let arrayString = string.split("");
    let reverseArray = arrayString.reverse();
    let reversedString = reverseArray.join("");
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
