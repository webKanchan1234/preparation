
// ----------------------------- PROMISE------------------------
// A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

// Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

// Promises have three states:

// Pending: This is an initial state of the Promise before an operation begins
// Fulfilled: This state indicates that the specified operation was completed.
// Rejected: This state indicates that the operation did not complete. In this case an error value will be thrown.

// A promise must follow a specific set of rules:

// A promise is an object that supplies a standard-compliant .then() method
// A pending promise may transition into either fulfilled or rejected state
// A fulfilled or rejected promise is settled and it must not transition into any other state.
// Once a promise is settled, the value must not change.

// ----------------------------- PROMISE CHAINING ------------------------
// promise chaining
// The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,
// In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,

// The initial promise resolves in 1 second,
// After that .then handler is called by logging the result(1) and then return a promise with the value of result * 2.
// After that the value passed to the next .then handler by logging the result(2) and return a promise with result * 3.
// Finally the value passed to the last .then handler by logging the result(6) and return a promise with result * 4.



// ----------------------------- PROMISE ALL ------------------------
// Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected.
// Note: Remember that the order of the promises(output the result) is maintained as per input order.


// ----------------------------- PROMISE RACE ------------------------
// Promise.race() method will return the promise instance which is firstly resolved or rejected. 


// ----------------------------- PROMISE OVER CALLBACK ------------------------
// Pros:
// It avoids callback hell which is unreadable
// Easy to write sequential asynchronous code with .then()
// Easy to write parallel asynchronous code with Promise.all()
// Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)

// Cons:
// It makes little complex code
// You need to load a polyfill if ES6 is not supported




//-----------------difference between promise and async await---------------------
// Promise

// Async/Await

// 1.	Promise is an object representing intermediate state of operation which is guaranteed to complete its execution at some point in future.	Async/Await is a syntactic sugar for promises, a wrapper making the code execute more synchronously.
// 2.	Promise has 3 states – resolved, rejected and pending.	It does not have any states. It returns a promise either resolved or rejected.
// 3.	If the function “fxn1” is to executed after the promise, then promise.then(fxn1) continues execution of the current function after adding the fxn1 call to the callback chain.	If the function “fxn1” is to executed after await, then await X() suspends execution of the current function and then fxn1 is executed.            
// 4.	Error handling is done using .then() and .catch() methods.	Error handling is done using .try() and .catch() methods.
// 5.	Promise chains can become difficult to understand sometimes.	Using Async/Await makes it easier to read and understand the flow of the program as compared to promise chains. 
