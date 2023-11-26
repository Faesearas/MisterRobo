// Business Logic:
function arrayCounter(number) {
    if (number != number * 1 || number < 0) {
        errorMessage();
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

function arrayLister(array, elementID) {
    let unorderedList = document.createElement("ul")
    elementID.append(unorderedList);
    array.forEach(function(element) {
        let listItem = document.createElement("li")
        listItem.append(element);
        unorderedList.append(listItem);
    });
}

function errorMessage() {
    document.getElementById("list").innerText = "Please input a positive Number"
}

function handleCounter() {
    event.preventDefault();
    const userNumber = document.getElementById("counter").value;
    const comparatorOne = "1";
    const comparatorTwo = "2";
    const comparatorThree = "3";
    const replacementStringOne = "Beep!";
    const replacementStringTwo = "Boop!";
    const replacementStringThree = "Won't you be my neighbor?";
    document.getElementById("list").innerHTML = "";
    let numberList = document.getElementById("list");
    let userArray = arrayCounter(userNumber);
    let userArrayStringified = arrayStringifyer(userArray);
    let firstPassArray = arrayStringReplacer(userArrayStringified, comparatorThree, replacementStringThree);
    let secondPassArray = arrayStringReplacer(firstPassArray, comparatorTwo, replacementStringTwo);
    let thirdPassArray = arrayStringReplacer(secondPassArray, comparatorOne, replacementStringOne);
    arrayLister(thirdPassArray, numberList);
}

window.addEventListener("load", function() {
    document.querySelector("form#counter-form").addEventListener("submit", handleCounter);
});