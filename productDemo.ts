// Implicit 
class Product {
    constructor(
        public name: string,
        public price: number,
        public quantity: number,
    )
    { }

    GetProducts() {
        console.log(`There are ${this.quantity} ${this.name} at $${this.price}`);
    }
}

let p = new Product("Computers", 1000, 5);
p.GetProducts();