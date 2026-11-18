
// Parent Class
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Child Class
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

// Trip Class
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance === "") {
            throw new Error("Distance is not provided!");
        }

        if (this.distance < 0) {
            throw new Error("Distance cannot be negative!");
        }

        let fare = this.distance * 10;
        return fare;
    }
}

// Creating Objects
let driver = new Driver("Rahul", 4.8, "Swift");
let trip1 = new Trip("Mathura", "Agra", 60);
let trip2 = new Trip("Delhi", "Noida", -10);

// Display Driver Details
console.log("Driver:", driver.name);
console.log("Rating:", driver.rating);
console.log("Vehicle:", driver.vehicle);

// Valid Trip
try {
    console.log("Fare: Rs.", trip1.calculateFare());
}
catch (error) {
    console.log("Error:", error.message);
}

// Invalid Trip
try {
    console.log("Fare: Rs.", trip2.calculateFare());
}
catch (error) {
    console.log("Error:", error.message);
}
