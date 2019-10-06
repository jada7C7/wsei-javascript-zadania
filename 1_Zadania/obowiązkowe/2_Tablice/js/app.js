(function () {
    //ex 0
    function distFromAvarage(values) {
        let sum = values.reduce((previous, current) => current += previous);
        let avg = sum / values.length;
        const newArray = [];
        for (let i = 0; i < values.length; i++) {
            newArray.push(Math.abs(values[i] - avg))
        }
        console.log(newArray)
        return newArray;
    }
    // distFromAvarage([2,8,3,7]);

    //ex1
    function favouriteFruit(fruit) {
        let firstFruit = fruit[0];
        console.log(firstFruit, 'first');
        let lastFruit = fruit[fruit.length - 1];
        console.log(lastFruit, 'last');
        fruit.forEach(e => {
            console.log(e, 'for')
        })

    }
    // favouriteFruit(['gruszka', 'jablko', 'kiwi'])

    //ex3
    function printTable(array) {
        array.forEach(el => {
            console.log(el)
        })
    }
    // printTable([1,2,3,4,5,6])

    //ex4
    function multiply(array) {
        let score = 1;
        for (let i = 0; i < array.length; i++) {
            score = score * array[i];
        }
        return score;
    }
    // multiply([1,2,3,4,5,6,7]);

    //ex5
    function getEvenAvarage(array) {
        let avgEven = null;
        let count = 0;
        let sum = 0;
        array.map((e, i) => {
            if (e % 2 == 0) {
                sum = sum + e;
                count++;
            }
        })
        if (count > 0) {
            avgEven = sum / count;
        }
        return avgEven;
    }
    // getEvenAvarage([1, 2, 15, 19])

    //ex6
    function sortArray(array) {
        let sorted = array.sort((a, b) => {
            return a - b;
        });
        return sorted;
    }
    // sortArray([145, 11, 3, 64, 4, 6, 10]);

    //ex7
    function addArrays(array1, array2) {
        let longerArray = array1.length >= array2.length ? array1 : array2;
        let shortenArray = array1.length >= array2.length ? array2 : array1;
        let concatArray = []
        longerArray.map((element, index) => {
            if (Number.isInteger(shortenArray[index])) {
                concatArray.push(element + shortenArray[index]);
            } else {
                concatArray.push(element);
            }
        })
        return concatArray;

    }
    // addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8])
    // addArrays([2,3,1,5,3,5], [3,1,76,1]);


})();