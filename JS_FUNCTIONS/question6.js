// Parent constructor
function Person(name) {
    this.name = name;
}

// Method of Person
Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};


// Child constructor
function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

// Inherit Person's prototype
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

// Method of Faculty
Faculty.prototype.showSubject = function() {
    console.log("Subject: " + this.subject);
};


// Child of Faculty
function Professor(name, subject, designation) {
    Faculty.call(this, name, subject);
    this.designation = designation;
}

// Inherit Faculty's prototype
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

// Method of Professor
Professor.prototype.showDesignation = function() {
    console.log("Designation: " + this.designation);
};


// Create Professor object
const prof1 = new Professor(
    "Rahul",
    "Computer Science",
    "Senior Professor"
);

// Access all methods in the prototype chain
prof1.showName();
prof1.showSubject();
prof1.showDesignation();

// Verify inheritance
console.log(prof1 instanceof Professor);
console.log(prof1 instanceof Faculty);
console.log(prof1 instanceof Person);
ouput 
Name: Rahul
Subject: Computer Science
Designation: Senior Professor
true
true
true
