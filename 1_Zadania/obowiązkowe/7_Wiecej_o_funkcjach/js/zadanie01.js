
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//function "sortArray"
function sortArray() {

    //defining the "points" variable as an array with data
    var points = [41, 3, 6, 1, 114, 54, 64];

    //call function sort on the array name points
    points.sort(function (a, b) {
        //searching for the most-matched items one after the other
        return a - b;
    });

    //return of a sorted "points" table
    return points;
}

//call function "sortArray"
sortArray();
