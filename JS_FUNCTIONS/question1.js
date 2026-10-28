function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

// Function call
greetUser("Rahul", showEndMessage);
