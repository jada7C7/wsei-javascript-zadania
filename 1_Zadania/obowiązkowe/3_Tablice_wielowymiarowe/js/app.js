// Zadanie 0
function checkArray(array) {
    const result = [];
    array.map(element => {
        let elementCheck = null;
        //paetla po elemtach tablicy drugiego wymiaru
        element.map(el => {
            //sprzwdzenie czy numer jest loczba calkowita
            if (Number.isInteger(el)) {
                //sprawdzenie czy liczba jest parzyta
                if (el % 2 === 0) {
                    // jesli ellemtn jest arzysty zmienna na true
                    if (elementCheck == null) {
                        elementCheck = true;
                    }
                } else {
                    elementCheck = false;
                }
            } else {
                throw new Error("Niepoprawne dane");
            }
        });
        //jestli elemnt jest nullem nie jest dodawny do tablic
        if (elementCheck != null) {
            result.push(elementCheck);
        }

    });
    return result;
}

checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34]
]);
checkArray([
    [21.5, 12],
    [42, 2.5],
    [4, 51],
    [10, 0],
    [17, 34]
]);



// Zadanie 1
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
// Zadanie 1.1
console.log(task1Array[2][1]);
// Zadanie 1.2
console.log(task1Array[1].length);
// Zadanie 1.3
console.log(task1Array[3][1]);


//Zadanie 2
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
//Zadanie 2.1
for (let i = 0; i < task2Array[0].length; i++) {
    console.log(task2Array[0][i]);
}
//Zadanie 2.2
for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i].length);
}
//Zadanie 2.3
for (let i = 0; i < task2Array.length; i++) {
    for (let j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);
    }
}

//Zadanie 3
function print2DArray(array2d) {
    array2d.map(el => {
        console.log(el);
    });
}

//Zadanie 4
const task4Array = [[15,1, "Andrzej"], [18,3, "Marcin"]];
print2DArray(task4Array);

//Zadanie 5
function create2DArray(rows, columns) {
    const array2d = [];
    //zaczyna od 1 nie 0
    let count = 1;
    for (let i = 0; i < rows; i++) {
        array2d.push([]);
        for (let j = 0; j < columns; j++) {
            array2d[i].push(count);
            count++;
        }
    }
    return array2d;
}
console.log(create2DArray(10, 2));