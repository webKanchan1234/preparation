// -------------------------JavaScript treated as Single threaded---------------

// JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program.

// JavaScript is a scripting or programming language, lightweight interpreted programming language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
// means
// JavaScript can update and change both HTML and CSS.
// JavaScript can calculate, manipulate and validate data.
// JavaScript is a loosely typed language, means we don’t have to specify what type of information will be stored in a variable in advance. JavaScript automatically types a variable based on what kind of information we assign to it.

// As we know stacks are FILO that is First In Last Out. Similarly, within the call stack, whenever a line of code gets inside the call stack it gets executed and moves out of the stack. In this way, JavaScript is a single-thread language because of only one call stack.

// Since JavaScript is a single-threaded language, it is synchronous in nature. Now, you will wonder if you have used async calls in JavaScript so is it possible then?

// So, let me explain to you the concept of async calls within JavaScript and how it is possible with single-threaded language. Before explaining it let’s discuss briefly why we require the async call or asynchronous calls. As we know within the synchronous calls, all the work is done line by line i.e. the first task is executed then the second task is executed, no matter how much time one task will take. This arises the problem of time wastage as well as resource wastage. These two problems are overcome by asynchronous calls, where one doesn’t wait for one call to complete instead it runs another task simultaneously. So, when we have to do things like image processing or making requests over the network like API calls, we use async calls.

// Now, coming back to the previous question of how to use async calls within JS. Within JS we have a lexical environment, syntax parser, and an execution context (memory heap and call stack) that is used to execute the JS code. But these browsers also have Event Loops, Callback queue, and WebAPIs that are also used to run the JS code. Although these are not part of JS it also helps to execute the JS properly as we sometimes used the browser functions within the JS.



// tightly coupled ?





// ------------------------synchronous and Asynchronous-----------------------
// Synchronous(single thread) in Javascript refers to the execution of a program code in a blocking manner. Here tasks are performed sequentially with the help of a call stack. Each individual  task must complete before the next one can begin. This results in delays in execution if any task takes a significant amount of time to execute.
// function f1(){
//   console.log("it is my 1st function");
// }

// function f2(){
//   console.log("it is my 2nd function");
//   f1();
// }
// f2();
// it is my 2nd function
// it is my 1st function

// Asynchronous(multi-thread in nature) in JavaScript refers to the execution of code in a non-blocking manner. It allows tasks to be performed independently, enabling the program to continue running while waiting for certain tasks, such as data retrieval or network requests, to complete. Asynchronous code makes use of callbacks, promises, or async/await to handle the results of these tasks once they are finished.
// function delay_Greeting() {
//  setTimeout(function() {
//    console.log("Hello, Ninja!");
//  }, 5000); // Wait for 5000 milliseconds (5 seconds)
// }



// ----------------------------this keyword---------------------------------
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In strict mode, when used alone, this also refers to the global object:
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// this in a Method
// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// this Alone
// When used alone, this refers to the global object.
// Because this is running in the global scope.
// In a browser window the global object is [object Window]:

// this in Event Handlers
// In HTML event handlers, this refers to the HTML element that received the event
// <button onclick="this.style.display='none'">
//   Click to Remove Me!
// </button>

// Object Method Binding
// In these examples, this is the person object:
// const person = {
//   firstName  : "John",
//   lastName   : "Doe",
//   id         : 5566,
//   myFunction : function() {
//     return this;
//   }
// };

// Explicit Function Binding
// The call() and apply() methods are predefined JavaScript methods.

// They can both be used to call an object method with another object as argument.
// const person1 = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person2 = {
//   firstName:"John",
//   lastName: "Doe",
// }

// // Return "John Doe":
// person1.fullName.call(person2);

// Function Borrowing
// With the bind() method, an object can borrow a method from another object.

// This example creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:
// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member);


// This Precedence
// To determine which object this refers to; use the following precedence of order.

// Precedence	Object
// 1	bind()
// 2	apply() and call()
// 3	Object method
// 4	Global scope
// Is this in a function being called using bind()?
// Is this in a function being called using apply()?
// Is this in a function being called using call()?
// Is this in an object function (method)?
// Is this in a function in the global scope.
