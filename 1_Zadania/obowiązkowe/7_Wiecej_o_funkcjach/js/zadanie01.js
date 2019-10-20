
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//finckja sortArray
function sortArray() {

    //zdefiniowanie zmiennej points jako tablica wraz z danymi
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wywaoleni funckji sort na tablicy - points
    points.sort(function (a, b) {
        //szukanie kolejno najbardzije dopasowanych elementow
        return a - b;
    });

    //zwrot posortowaniej tablicy points
    return points;
}

//Wywyoalnei funkcji sortArray
sortArray();
