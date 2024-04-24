const removeFromArray = function(array, num) {
    const index = array.indexOf(num);
    return array.splice(index, index);
};

// Do not edit below this line
module.exports = removeFromArray;
