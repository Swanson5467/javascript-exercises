const leapYears = function(year) {
    if ( (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ) { // (div by 400) OR (div by 4 AND not by 100)
        return true;
    } else {
        return false;
    }

};
// Do not edit below this line
module.exports = leapYears;
