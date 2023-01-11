const findTheOldest = function(people) {
    let currentYear = 2023;
    let oldest = 0;
    let oldestAge = 0;
    for (const item of people) {
        let age = item.yearOfDeath - item.yearOfBirth;
        if ('yearOfDeath' in item === false) {
            age = currentYear - item.yearOfBirth;
        }
        if (age > oldestAge) {
            oldest = item;
            oldestAge = age;
        }
    }
    return oldest;

};
// Do not edit below this line
module.exports = findTheOldest;
