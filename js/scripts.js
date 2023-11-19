// Utility Logic:
function arrayElementReplacer(comparator, replacer, array) {
    newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (element === comparator) {
            newArray.push(replacer);
        } else {
            newArray.push(element);
        }
    };
    return newArray
}
// Business Logic:

function arrayCounter(number) {
        let empArr = [];
        for (let i = 0; i <= number; i += 1)
            empArr.push(i);
        return empArr;
}

// UI Logic

window.onload = function () {
    let errorMessage = "please input a number for me to count to"
}