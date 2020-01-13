//Funkcja wypisuje "Cześć":
hello();
function hello() {
    console.log("Cześć");
};
//Funkcja wypisuje "Cześć":
// hello();

//Funkcja nie wypisuje "Witaj":
welcome();
let welcome = function () {
    console.log("Witaj");
};
//Funkcja wypisuje "Witaj":
// welcome();


// gdy jest wyrażenie funkcyjne: let welcome = funcion()...
//miejsce wywołania wyrażenia ma znaczenie,
// gdy wywołanie wystapi przed definicją wyrażenia
//to wtedy dostaniemy błąd
