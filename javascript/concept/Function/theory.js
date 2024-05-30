// ----------------------- LAMBDA EXPRESSION ------------------
// An arrow function is a shorter/concise syntax for a function expression and does not have its own this, arguments, super, or new.target. These functions are best suited for non-method functions, and they cannot be used as constructors.


// -------------------------- CURRYING FUNCTION--------------------
// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.
// By applying currying, an n-ary function turns into a unary function.
// Curried functions are great to improve code reusability and functional composition.


// -------------------------- HOISTING --------------------
// Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,



// -------------------------- CLOSURE --------------------
// A closure is the combination of a function bundled(enclosed) together with its lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables, functions and other data even after the outer function has finished its execution. The closure has three scope chains.

// Own scope where variables defined between its curly brackets
// Outer function's variables
// Global variables


// ------------------------------------ CALLBACK  ----------------------------
// A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. 

// The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events. Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.


// ------------------------------------ CALLBACK HELL ----------------------------
// Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

// ----------------------------- CALLBACK IN CALLBACK ----------------------------









// ----------------------------- DEBOUNCING ----------------------------
// Debouncing is a strategy used to improve the performance of a feature by controlling the time at which a function should be executed.

// Debouncing accepts a function and transforms it in to an updated (debounced) function so that the code inside the original function is executed after a certain period of time.
// If the debounced function is called again within that period, the previous timer is reset and a new timer is started for this function call. The process repeats for each function call.

// Debouncing is a method used in JavaScript to increase browser performance. The debounce function make sure that your code is only triggered once per user input. The common usecases are Search box suggestions, text-field auto-saves, and eliminating double-button clicks.
// The debounce() function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called.



// ------------difference between Arrow Functions and Regular Functions---------------
// 1. Syntax
// In JavaScript, Function can be declared in different ways
// // Function declaration
// function greetMessage(userName) {
// return `Hello ${userName}`;
// }

// const greetMessage = (userName) => {
//   return `Hello ${userName}`;
// }

// 2. this keyword

// Regular function have its their own this context, but the Arrow function don’t have their own. Inside an Arrow function this value hold the this value of outer function.

// let user = { 
//      userName: "Parth", 
//      greetMessage1:() => { 
//          console.log("Hello " + this.userName); // Output: Hello undefined
//      }, 
//      greetMessage2(){        
//          console.log("Good Morning " + this.userName); // Output: Good Morning Parth 'this' binding works here
//      }   
//   }; 
//  user.greetMessage1(); 
//  user.greetMessage2();

// 3. Using new keyword

// Regular function are constructible and callable.As it are constructible, they can be called using the ‘new’ keyword. But the arrow functions are only callable and not constructible. Due to which we will get a run-time error when trying to construct a non-constructible arrow functions using the new keyword.

// // Using regular function
//  let x = function(){ 
//      console.log(arguments); 
//  }; 
//  console.log(new x (1,2,3)); // Output: Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]


// // Using Arrow function
//  let x = ()=> { 
//      console.log(arguments);
//  };
//  new x(1,2,3); // TypeError: "x is not a constructor"

// 4. Implicit return

// While working with Regular functions return expression statement is used to return the result from the function. It return statement is not available inside the function then udefined is returned from the function. But with Arrow function there is one exception where return is not mendatory to return result from the functions.

// // With Regular functions
// function sum(a, b) {
//   return a+b;
// }
// sum(10,20); // Outpu: 30

// // With Arrow functions
// const sum = (a, b) =>a+b;
// sum(10,20); //Output: 30


// 5. No arguments object in arrow functions
//  A normal function has an arguments object which you can access in the function:
// The arguments object is a local variable that contains the arguments passed to the function when called.

// function print() {
//   console.log(arguments)
// }
// print("hello", 400, false)

// {
//   '0': 'hello',
//   '1': 400,
//   '2': false
// }

// const print = () => {
//   console.log(arguments)
// }

// print("hello", 400, false)
// // Uncaught ReferenceError: arguments is not defined

