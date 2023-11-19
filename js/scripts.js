// Utility Logic:
function arrayElementReplacer(comparator, replacer, array) {
    newArray = [];
    array.forEach(function (element) {
        if (element === comparator) {
            newArray.push(replacer);
        } else {
            newArray.push(element);
        }
    });
    return newArray
}
// Business Logic:

// UI Logic