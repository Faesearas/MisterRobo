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

function arrayStringReplacer(array, comparator, modifier) {
    let splitArray = [];
    array.forEach(function (element) {
        let splitElement = element.split("");
        if (splitElement.includes(comparator)) {
            splitArray.push(modifier);
        } else {
            let combinedElement = splitElement.join("");
            splitArray.push(combinedElement)
        }
    });
    return splitArray;
}

// UI Logic

window.onload = function () {

}