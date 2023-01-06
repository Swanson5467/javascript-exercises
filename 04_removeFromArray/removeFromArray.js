const removeFromArray = function(array, ...args) {
    for (i=0; i<array.length; i++) {
        let indexOfRemoved = array.indexOf(array[i]);
        for (j=0; j<args.length;j++) {
            if (args[j] === array[i]) {
                array.splice(indexOfRemoved, 1);
                i -= 1;
                if (array.length == 0) {
                    return array;
                }
            }
        }
    }
    return array;
}

removeFromArray(['hey',2,3,'ho'],'hey',3)
// Do not edit below this line
module.exports = removeFromArray;
