
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("Array with numbers to 6 = [" + createArray(6)+"]");
console.log("Array with numbers to 1 = [" + createArray(1)+"]");
console.log("Negative number test (should be empty array) = [" + createArray(-6)+"]");
console.log("Zero number test (should be empty array) = [" + createArray(0)+"]");
