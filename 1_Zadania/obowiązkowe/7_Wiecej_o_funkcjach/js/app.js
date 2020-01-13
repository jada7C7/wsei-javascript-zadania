/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//funkcja "jeden"
function jeden() {

    //zmianna o zasiegu  blokowym
    var zmienna1 = 1;

    //funckja "two"
    function dwa() {

        //wuswietlenie "zmiennej1"
        console.log(zmienna1);

        //zmianna o zasiegu  blokowym
        var zmienna2 = 3;
    }

    //wywoalnie funkcji "dwa"
    dwa();

    // proba wypisania "zminna2"
    // zmienna nie ma "zasiegu" poza funckje "dwa" poniewaz
    // jej przypisanie znajduje się wewnatrz funkcji "dwa" 
    console.log(zmienna2);
}

// wywolanoe funckji jeden
jeden();