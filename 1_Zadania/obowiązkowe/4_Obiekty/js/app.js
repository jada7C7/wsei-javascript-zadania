const city = {
    capital: 'Warszawa',
    population: 12345678,
    president: 'Kwaśniewski',
    primeMinister: ['Duda', 'Kaczynski', 'Tusk']
}
// console.log(city.capital)
// console.log(city.population)
// console.log(city.president)
// console.log(city.primeMinister)

const timeMachine = {
    shape: 'shape',
    model: 'model',
    run(date, place) {
        return 'Jest ' + date + ' - ' + place;
    }
}
// console.log(timeMachine.shape);
// console.log(timeMachine.model);
// console.log(timeMachine.run('20.10.2099', 'Kraków'));
//zad1
const book = {
    title: 'W pustyni i w puszczy',
    author: 'H. Sienkiewicz',
    numberOfPage: 999
};
// console.log(book.title);
// console.log(book.author);
// console.log(book.numberOfPage);
//zad2
const person = {
    name: 'Andrzej',
    age: 20,
    sayHello() {
        console.log('hello');
    }
};
// console.log(person.name);
// console.log(person.age);
// person.sayHello();
//zad3
const recipe = {
    title: 'Szarlotka',
    servings: 20,
}
recipe.ingredients = ['jabłka', '4 jajka', 'mąka', 'proszek do pieczenia'];
// console.log(recipe.title);
// console.log(recipe.servings);
// console.log(recipe.ingredients);
//zad6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist = false;
spoon.isExist ? console.log('Łyżka istnieje') : console.log('Łyżka nie istnieje');


