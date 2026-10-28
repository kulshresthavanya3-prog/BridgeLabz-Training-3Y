// Parent constructor
function Person(name) {
    this.name = name;
}

// Method added to Person's prototype
Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name); // Inherit the name property
    this.branch = branch;
}

// Inherit methods from Person's prototype
Student.prototype = Object.create(Person.prototype);

// Restore the constructor reference
Student.prototype.constructor = Student;

// Method added to Student's prototype
Student.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};

// Create a Student object
const student1 = new Student("Rahul", "Computer Science");

// Call both methods
student1.showName();
student1.showBranch();

// Demonstrate the prototype chain
console.log(student1 instanceof Student);
console.log(student1 instanceof Person);  
output
Name: Rahul
Branch: Computer Science
true
true
