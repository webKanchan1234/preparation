


//------------------node js single threaded, then how handle concurrency
// Node.js is indeed single-threaded, but it effectively handles concurrency through its event-driven architecture and non-blocking I/O operations. Here's a detailed explanation of how Node.js manages to handle many concurrent operations despite running on a single thread:



// How the Event Loop Works
// Event Queue: Node.js maintains an event queue where events are queued up. These events could be anything like incoming HTTP requests, file I/O operations, timers, etc.

// Event Loop: The event loop continuously checks the event queue for new events. When an event is detected, the loop processes it by executing the associated callback function.

// Callbacks: The callback functions are small pieces of code that get executed when an event completes. Instead of waiting for the event to complete (blocking the thread), Node.js registers the callback and continues executing other code.

// Non-blocking I/O: When an I/O operation is initiated (like reading a file or querying a database), Node.js starts the operation and immediately moves on to the next task. Once the I/O operation is completed, it places a callback function in the event queue to handle the result.

// Asynchronous Operations
// Node.js promotes the use of asynchronous programming to handle concurrency. Here are the main tools used:

// Callbacks: Functions that are passed as arguments to asynchronous operations and are executed once the operation completes.
// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// Promises: Objects that represent the eventual completion (or failure) of an asynchronous operation, allowing chaining of operations.
// const fs = require('fs').promises;

// fs.readFile('example.txt', 'utf8')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// Async/Await: Syntactic sugar over promises, providing a way to write asynchronous code that looks synchronous.
// const fs = require('fs').promises;

// async function readFile() {
//     try {
//         const data = await fs.readFile('example.txt', 'utf8');
//         console.log(data);
//     } catch (err) {
//         console.error(err);
//     }
// }

// readFile();















// error
// operation and programing 
// explain stream and types 
//repl in node
//buffer in node js

// how to debugg node application
// middleware
// how to handle unexceptional handle

// diff bt dependency and dev dependency
// jwt token and if not pass life time token then how long service

