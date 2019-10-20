(function () {
    // ex 0
    function checkArray(array) {
        const arrayCheck = [];
        array.map((element, index) => {
            let elementCheck = null;
            element.map(el => {
                if (Number.isInteger(el)) {
                    if (el % 2 === 0) {
                        if (elementCheck == null) {
                            elementCheck = true;
                        }
                    } else {
                        elementCheck = false;
                    }
                } else {
                    throw new Error('Invalid argument');
                }
            })
            if (elementCheck != null) {
                arrayCheck.push(elementCheck);
            }

        })
        return arrayCheck;
    }
    // checkArray(
    //     [
    //         [11, 12],
    //         [42, 2],
    //         [-4, -120],
    //         [0, 0],
    //         [1, 34]
    //     ]);
    // checkArray(
    //     [
    //         [21.5, 12],
    //         [42, 2.5],
    //         [4, 51],
    //         [10, 0],
    //         [17, 34]
    //     ]);
})();


var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
// ex1
// 1.
// console.log(task1Array[2][1])
//2
// console.log(task1Array[1].length)
//3
// console.log(task1Array[3][1]);


//ex2
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
//1
// for (let i = 0; i < task2Array[0].length; i++) {
//     console.log(task2Array[0][i])
// }
//2
// for (let i = 0; i < task2Array.length; i++) {
//     console.log(task2Array[i].length)
// }
// //3
// for (let i = 0; i < task2Array.length; i++) {
//     for (let j = 0; j < task2Array[i].length; j++) {
//         console.log(task2Array[i][j]);
//     }
// }

//ex3
// function print2DArray(array2d) {
//     array2d.map(el => {
//         console.log(el)
//     })
// }

//ex4
// const task4Array = [[15,1, 'Andrzej'], [18,3, 'Marcin']];
// print2DArray(task4Array)

//ex5
// function create2DArray(rows, columns) {
//     const array2d = new Array();
//     let count = 1;
//     for (let i = 0; i < rows; i++) {
//         array2d.push([]);
//         for (let j = 0; j < columns; j++) {
//             array2d[i].push(count);
//             count++;
//         }
//     }
//     return array2d;
// }
// console.log(create2DArray(10, 2)[9]);