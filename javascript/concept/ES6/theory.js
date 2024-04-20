// Below are the list of some new features of ES6,

// Support for constants or immutable variables
// Block-scope support for variables, constants and functions
// Arrow functions
// Default parameters
// Rest and Spread Parameters
// Template Literals
// Multi-line Strings
// Destructuring Assignment
// Enhanced Object Literals
// Promises
// Classes
// Modules

// ------------------------------DEFAULT PARAMETER ------------------------
// Default function parameters feature allows parameters to be initialized with default values if no value or undefined is passed.


// ------------------------------REST PARAMETER ------------------------

// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }
// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);


// --------------------------rest parameter and spread operator------------------
// In Javascript, both the spread operator and rest parameter have the same syntax which is three dots(…). Even though they have the same syntax they differ in functions.

// Spread operator: The spread operator helps us expand an iterable such as an array where multiple arguments are needed, it also helps to expand the object expressions. In cases where we require all the elements of an iterable or object to help us achieve a task, we use a spread operator.
//  var array1 = [10, 20, 30, 40, 50];
//     var array2 = [60, 70, 80, 90, 100];
//     var array3 = [...array1, ...array2];
//    console.log(array3);  //[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// Rest operator: The rest parameter is converse to the spread operator. while the spread operator expands elements of an iterable, the rest operator compresses them. It collects several elements. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier. 

// Note: There must be only one rest operator in javascript functions.
//  function average(...args) {
//         console.log(args);    //[1, 2, 3, 4, 5]
//         var avg =
//             args.reduce(function (a, b) {
//                 return a + b;    //think how to work
//            }, 0) / args.length;
//         return avg;
//     }
//     console.log("average of numbers is : "
//         + average(1, 2, 3, 4, 5));       //"average of numbers is : 3"
   