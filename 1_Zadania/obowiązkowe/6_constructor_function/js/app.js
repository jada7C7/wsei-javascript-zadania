///Zadanie 0
var Basket = function () {
    this.products = [];
    this.sum = 0;
};

Basket.prototype.addProduct = function (name, price) {
    this.sum = this.sum + price;
    this.products.push({ name: name, price: price });
};
Basket.prototype.showBasket = function () {
    return this.products.map((element, index) => {
        console.log(element.name + ' - ' + element.price + ' zł');
        if (index == this.products.length - 1) {
            console.log('Cena za wszystkie produkty: ' + this.sum);
        }
    });
};

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor", 10);
aliceBasket.addProduct("arbuz", 40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun", 50);
bruceBasket.addProduct("tofu", 20);
bruceBasket.showBasket();


