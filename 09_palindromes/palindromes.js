const palindromes = function (string) {
    let processed = string.replace(/[^A-Za-z]/g, "");
    let split = processed.split("");
    let reversed = split.reverse();
    let opposite = reversed.join("");
    if (processed.toUpperCase() === opposite.toUpperCase()) {
        return true;
    } else {
        return false;
    }

};
// Do not edit below this line
module.exports = palindromes;
