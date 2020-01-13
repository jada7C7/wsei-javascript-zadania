//Zadanie 0a
const city = {
    capital: "Warszawa",
    population: 12345678,
    president: "Kwaśniewski",
    primeMinister: ["Duda", "Kaczynski", "Tusk"]
}
console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinister);

//Zadanie 0b
const timeMachine = {
    shape: "shape",
    model: "model",
    run(date, place) {
        return "Jest " + date + " - " + place;
    }
}
console.log(timeMachine.shape);
console.log(timeMachine.model);
console.log(timeMachine.run("20.10.2099", "Kraków"));

//Zadanie 1
const book = {
    title: "W pustyni i w puszczy",
    author: "H. Sienkiewicz",
    numberOfPage: 999
};
console.log(book.title);
console.log(book.author);
console.log(book.numberOfPage);

//Zadanie 2
const person = {
    name: "Andrzej",
    age: 20,
    sayHello() {
        console.log("hello");
    }
};
console.log(person.name);
console.log(person.age);
person.sayHello();

//Zadanie 3
const recipe = {
    title: "Szarlotka",
    servings: 20,
};

recipe.ingredients = ["jabłka", "4 jajka", "mąka", "proszek do pieczenia"];
console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

//Zadanie 6
const spoon = {
    isExist: true
};

const fork = spoon;
fork.isExist = false;
spoon.isExist ? console.log("Łyżka istnieje") : console.log("Łyżka nie istnieje");


