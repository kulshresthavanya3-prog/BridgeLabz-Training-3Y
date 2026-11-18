
let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 3 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 20 },
    { id: 4, name: "Jeans", category: "Clothing", price: 2000, stock: 4 },
    { id: 5, name: "Table", category: "Furniture", price: 5000, stock: 10 },
    { id: 6, name: "Chair", category: "Furniture", price: 1500, stock: 2 }
];

// 1. Get Low Stock Products using filter()
function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

// 2. Sort Products by Price using sort()
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Calculate Total Inventory Value using reduce()
function calculateTotalInventoryValue() {
    return products.reduce((total, p) => {
        return total + (p.price * p.stock);
    }, 0);
}

// 4. Group Products by Category using reduce()
function groupByCategory() {
    return products.reduce((groups, p) => {
        if (!groups[p.category]) {
            groups[p.category] = [];
        }

        groups[p.category].push(p);
        return groups;
    }, {});
}

// Testing all functions
console.log("Low Stock Products:");
console.log(getLowStockProducts());

console.log("Products Sorted by Price:");
console.log(sortProductsByPrice());

console.log("Total Inventory Value:");
console.log(calculateTotalInventoryValue());

console.log("Products Grouped by Category:");
console.log(groupByCategory());
