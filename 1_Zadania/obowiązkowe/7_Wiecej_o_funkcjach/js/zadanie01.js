
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//funckja "sortArray"
function sortArray() {

    //zdefinowanej zmiennej tablicy z danymi
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wywolanie funjcji sort na tablicy elemntów
    points.sort(function (a, b) {
        //porownywanie elementów
        return a - b;
    });

    //zwracanie posortowaniej tablicy
    return points;
}

//wywoalnie funkcji sortArray()
sortArray();
