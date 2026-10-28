// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding a method to the prototype
Car.prototype.getDetails = function() {
    console.log("Brand: " + this.brand + ", Model: " + this.model);
};

// Creating two car objects
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

// Calling the prototype method
car1.getDetails();
car2.getDetails();  output 
Brand: Toyota, Model: Fortuner
Brand: Honda, Model: City
