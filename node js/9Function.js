// --------------------------------Wrapper function ------------------
// A wrapper function is a function that "wraps" another function, adding some kind of behavior or functionality before, after, or around the invocation of the original function. Wrapper functions are useful for various purposes, such as logging, modifying inputs or outputs, error handling, or enforcing conditions.

// 1. Logging
// A wrapper function can log information before and after calling the original function.
function logWrapper(func) {
    return function (...args) {
        console.log(`Calling function ${func.name} with arguments: ${args}`);
        const result = func(...args);
        console.log(`Function ${func.name} returned: ${result}`);
        return result;
    };
}

function add(a, b) {
    return a + b;
}

const wrappedAdd = logWrapper(add);
wrappedAdd(2, 3);


// 2. Input Validation
// A wrapper function can validate inputs before invoking the original function.
function validateWrapper(func) {
    return function (...args) {
        if (args.some(arg => typeof arg !== 'number')) {
            throw new Error('All arguments must be numbers');
        }
        return func(...args);
    };
}

function multiply(a, b) {
    return a * b;
}

const wrappedMultiply = validateWrapper(multiply);
wrappedMultiply(2, 3); // Works fine
wrappedMultiply(2, '3'); // Throws error


// 3. Error Handling
// A wrapper function can add error handling to the original function
function errorHandlerWrapper(func) {
    return function (...args) {
        try {
            return func(...args);
        } catch (error) {
            console.error(`Error in function ${func.name}:`, error);
            return null; // or some default value
        }
    };
}

function divide(a, b) {
    return a / b;
}

const wrappedDivide = errorHandlerWrapper(divide);
wrappedDivide(4, 2); // Works fine
wrappedDivide(4, 0); // Logs error and returns null



//   4. Timing
// A wrapper function can measure the execution time of the original function.
function timingWrapper(func) {
    return function (...args) {
        const start = Date.now();
        const result = func(...args);
        const end = Date.now();
        console.log(`Function ${func.name} took ${end - start}ms to execute`);
        return result;
    };
}

function slowFunction() {
    for (let i = 0; i < 1e7; i++); // Simulating a slow operation
    return 'done';
}

const wrappedSlowFunction = timingWrapper(slowFunction);
wrappedSlowFunction();



//   5. Modifying Outputs
// A wrapper function can modify the output of the original function.

function modifyOutputWrapper(func) {
    return function (...args) {
        const result = func(...args);
        return result * 2; // Modify output
    };
}

function square(n) {
    return n * n;
}

const wrappedSquare = modifyOutputWrapper(square);
console.log(wrappedSquare(3)); // Outputs 18 instead of 9


//   Summary
// Wrapper functions are a powerful and flexible tool in JavaScript for enhancing and controlling the behavior of existing functions. They can be used for:

// Logging
// Input validation
// Error handling
// Measuring execution time
// Modifying outputs
// By using wrapper functions, you can add additional layers of functionality to your code in a modular and reusable way.