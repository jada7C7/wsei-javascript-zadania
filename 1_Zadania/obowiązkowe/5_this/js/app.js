//Zadanie 0
const car = {
    brand: "Ford",
    color: "red",
    numberOfKilometers: 0,
    printCarInfo() {
        return `${this.brand} ${this.color}, ${this.numberOfKilometers}`;
    },
    drive(km) {
        this.numberOfKilometers = this.numberOfKilometers + km;
    }
};
console.log(car.printCarInfo());
car.drive(20);
console.log(car.printCarInfo());

////Zadanie 1
car.review = ["20.12.1996", "20.12.1997"];
car.addReview = function (date) {
    this.review.push(date);
};
car.getAllReviwe = function () {
    return this.review;
};

////Zadanie 3
const stairs = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    printStep() {
        console.log(this.step);
    }
};
stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();