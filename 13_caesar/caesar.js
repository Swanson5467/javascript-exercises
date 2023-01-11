const caesar = function() {

};

let str = 'Hello World';
let newString = '';
let shift = 5;
for (const letter of str) {
    let uniCode = str.charCodeAt(str.indexOf(letter));
    let shiftCode = 0;
    if ((uniCode >= 65 && uniCode <= 90) || (uniCode >= 97 && uniCode <= 122)) {
        shiftCode = uniCode + shift;
    } else if (uniCode >= 65 && uniCode <= 90) {
        let extra = (uniCode + shift) - 90;
        shiftCode = 65 + extra;
    } else if (uniCode >= 97 && uniCode <= 122) {
        let extra = (uniCode + shift) - 122;
        shiftCode = 97 + extra;
    }
    let newLetter = '';
    if (shiftCode == 32 + shift) {
        newLetter = ' ';
    } else {
        newLetter = String.fromCharCode(shiftCode);
    }
    newString += newLetter;
}
console.log(newString);
// Do not edit below this line
module.exports = caesar;
