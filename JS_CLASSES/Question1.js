
"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount() {
        this.price = this.price - (this.price * 0.10);
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Shoes", 800, "Fashion"),
    new Product(3, "Mobile", 15000, "Electronics"),
    new Product(4, "Watch", 1200, "Accessories")
];

// Apply 10% discount to all products
for (let product of products) {
    product.applyDiscount();
}

// Display products with price > 1000
const filteredProducts = products.filter(product => product.price > 1000);

filteredProducts.forEach(product => {
    console.log(product.displayDetails());
});
