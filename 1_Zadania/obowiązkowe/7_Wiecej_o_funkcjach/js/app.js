/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//function "jeden"
function jeden() {

    //variable zminenna1 with block range
    var zmienna1 = 1;

    //function "two"
    function dwa() {

        //print the value variable "zmiennej1"
        console.log(zmienna1);

        //variable "zmianna2" with block range
        var zmienna2 = 3;
    }

    //call funciton "dwa"
    dwa();

    // attempt to display the value of variable "zmiennnej2"
    // zmiennna2 is not avilable out of funciton "dwa" because
    // assignment is inside the function "dwa" 
    console.log(zmienna2);
}

// call funciton "jeden"
jeden();