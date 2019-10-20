/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//funckja jeden
function jeden() {

    //zminenna1 o zasiegu blokowym
    var zmienna1 = 1;

    //funckaj 2
    function dwa() {

        //wypisanie wartosci zmiennej1 o zasiegu blokowym
        console.log(zmienna1);

        //zmianna2 o zasiegu blokowym
        var zmienna2 = 3;
    }

    //Wywyolanie finckji2
    dwa();

    //proba wypisania zmiennnej2
    // zmiennna2 nie jest dostepna poza funkcja dwa poniewaz jej przypisanie znajduje się wewnątrz funckji dwa() 
    console.log(zmienna2)
}

// wywołanie funkcji jeden()
jeden()