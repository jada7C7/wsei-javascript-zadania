document.addEventListener('DOMContentLoaded', function () {

    //1
    function getNumber(number, array) {
        let result = false;
        array.forEach(el => {
            if (el === number) {
                result = true;
            }
        });
        return result;
    }

    console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
    console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

    //2
    function createIdentityMatrix(rows, columns) {
        let arr = [];
        for (let i = 0; i < rows; i++) {
            let arr2 = [];
            for (let j = 0; j < columns; j++) {
                if (i === j) {
                    arr2.push(1);
                } else {
                    arr2.push(0);
                }
            }
            arr.push(arr2);
        }
        return arr;
    }

    console.log(createIdentityMatrix(4, 4));

    //3
    function sortPlanets(planets) {
        let arr = [];
        arr = planets.sort((a, b) => {
            return b.numberOfMoons - a.numberOfMoons;
        });
        return arr;
    }
    let sorted = sortPlanets(planets);
    console.log('sorted', sorted);

    //dodatkowe

    //1
    function addTheSameNumbers(number, array) {
        let sum = 0;
        let isFound = false;
        array.forEach(el => {
            if (el === number) {
                sum += el;
                isFound = true;
            }
        });
        if (sum === 0 && isFound === false) {
            return null;
        }
        return sum;
    }

    console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
    console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
    console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
    console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));

    //2
    function factors(number) {
        let array = [];
        if (number <= 0) {
            return array;
        }
        for (let i = number; i > 0; i--) {
            if (number % i === 0) {
                array.push(i);
            }
        }
        return array;
    }

    console.log(factors(2));
    console.log(factors(54));
    console.log(factors(-4));

    3
    function getMissingElement(nums) {
        let max = Math.max.apply(null, nums)
        let min = Math.min.apply(null, nums)

        for (let i = min; i < max; i++) {
            if (nums.indexOf(i) == -1) {
                return i;
            }
        }
        return null;

    }

    console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7]));
    console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15]));
    console.log(getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4]));

    //3
    function getLastNumbers(number, array) {
        if (number === 'undefined' || typeof (number) !== 'number') {
            return [];
        }
        let start = array.length - number;
        let result = [];
        for (let i = start; i < array.length; i++) {
            result.push(array[i]);
        }
        return result;
    }
    console.log(getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7]));
    console.log(getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15]));
    console.log(getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4]));
    console.log(getLastNumbers('ala', [-4, -3, -2, 0, 1, 2, 3, 4]));
});