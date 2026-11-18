
// Parent Class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is doing employee work.");
    }
}

// Child Class
class Manager extends Employee {

    // Overriding work() method
    work() {
        console.log(this.name + " is managing the team.");
    }
}

// Creating Objects
let e1 = new Employee("Rahul", "IT");
let m1 = new Manager("Priya", "HR");

// Calling methods
e1.work();
m1.work();
