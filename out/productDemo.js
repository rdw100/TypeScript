// Implicit 
var Product = /** @class */ (function () {
    function Product(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.GetProducts = function () {
        console.log("There are " + this.quantity + " " + this.name + " at $" + this.price);
    };
    return Product;
}());
var p = new Product("Computers", 1000, 5);
p.GetProducts();
//# sourceMappingURL=productDemo.js.map