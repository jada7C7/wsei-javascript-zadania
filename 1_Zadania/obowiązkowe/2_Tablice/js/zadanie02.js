
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("Tablica z wartościami do 6 = [" + createArray(6)+"]");
console.log("Tablica z wartościami do 1 = [" + createArray(1)+"]");
console.log("Test liczby ujemnej (tablica powinna byc pusta) = [" + createArray(-6)+"]");
console.log("Test liczby ujemnej (tablica powinna byc pusta) = [" + createArray(0)+"]");
