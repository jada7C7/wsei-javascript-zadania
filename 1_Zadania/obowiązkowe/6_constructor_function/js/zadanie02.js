//Zadanie 2
const Calculator = function () {
    this.operation = [];
};

Calculator.prototype.add = function (num1, num2) {
    this.operation.push(`added ${num1} to ${num2} got ${num1 + num2}`);
    return num1 + num2;
};
Calculator.prototype.multiply = function (num1, num2) {
    this.operation.push(`multiplied ${num1} with ${num2} got ${num1 * num2}`);
    return num1 * num2;
};
Calculator.prototype.subtract = function (num1, num2) {
    this.operation.push(`subtracted ${num1} from ${num2} got ${num1 - num2}`);
    return num1 - num2;
};
Calculator.prototype.divide = function (num1, num2) {
    this.operation.push(`divided ${num1} by ${num2} got ${num1 - num2}`);
    return num1 - num2;
};
Calculator.prototype.printOperations = function (num1, num2) {
    this.operation.map(el => {
        console.log(el);
    });
};
Calculator.prototype.clearoperations = function (num1, num2) {
    this.operation = [];
};