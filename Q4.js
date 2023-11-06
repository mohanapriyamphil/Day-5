//write a class to calculate the uber price.
class Uber{
    constructor(km, price) {
        this.km = km;
        this.price = price;
    }
    getprice() {
        return this.price
    }
    setprice(price) {
        return this.km * this.price
    }
};