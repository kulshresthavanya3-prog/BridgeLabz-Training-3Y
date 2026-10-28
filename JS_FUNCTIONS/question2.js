function applyOperation(numbers, operation) {
    let result = numbers.map(operation);
    console.log(result);
}

// Callback function to double each number
function double(num) {
    return num * 2;
}

// Callback function to square each number
function square(num) {
    return num * num;
}

// Function calls
applyOperation([1, 2, 3, 4], double);
applyOperation([1, 2, 3, 4], square);
