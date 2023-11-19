// Utility Logic:
function arrayElementReplacer1(comparator, replacer, array) {
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
    if (number != number * 1) {
        return errorMessage;
    } else {
        let empArr = [];
        for (let i = 0; i <= number; i += 1)
            empArr.push(i);
        return empArr;
    }
}

function arrayStringifyer(array) {
    let stringArray = [];    
    for (let i = 0; i < array.length; i += 1) {
        stringArray.push(array[i].toString());       
    };
    return stringArray;
}


// UI Logic

window.onload = function () {
    let errorMessage = "please input a number for me to count to"
}