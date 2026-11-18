
// Constructor Function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype Method
Product.prototype.applyDiscount = function(percent) {
    let discount = (this.price * percent) / 100;
    let newPrice = this.price - discount;

    return newPrice;
};

// Creating 3 Products
let p1 = new Product("Laptop", 50000);
let p2 = new Product("Mobile", 20000);
let p3 = new Product("Headphones", 5000);

// Applying Discounts
console.log("Product:", p1.name);
console.log("Price after discount:", p1.applyDiscount(10));

console.log("Product:", p2.name);
console.log("Price after discount:", p2.applyDiscount(20));

console.log("Product:", p3.name);
console.log("Price after discount:", p3.applyDiscount(15));
