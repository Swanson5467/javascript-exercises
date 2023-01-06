const sumAll = function(x, y) {
    if (x < 0 || y < 0 || typeof(x) != 'number' || typeof(y) != 'number') {
        return 'ERROR';
    }
    let sum = 0
    let start = y;
    let end = x;
    if (y > x) {
        start = x;
        end = y;
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
};

console.log(sumAll(1, '4'));
// Do not edit below this line
module.exports = sumAll;
