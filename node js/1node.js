//--------------------------------node js--------------------------------
// Node.js is a popular runtime environment that allows developers to run JavaScript on the server side, outside of a web browser.

// Key Features
// Event-Driven Architecture: Node.js uses an event-driven, non-blocking I/O model, which makes it efficient and suitable for real-time applications that require high throughput.
// Single-Threaded but Highly Scalable: Node.js operates on a single thread using event looping, which can handle multiple connections concurrently. 
// NPM (Node Package Manager): NPM is the default package manager for Node.js. It makes it easy to share and reuse code.
// Cross-Platform: Node.js is cross-platform and can run on various operating systems, including Windows, macOS, and Linux.

////--------------------------------how node js works------------------------
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
// how Node.js works:

// 1.Single-Threaded Event Loop:
// Node.js operates on a single-threaded, non-blocking, event-driven architecture.
// This means it uses a single thread to handle multiple concurrent operations by leveraging asynchronous callbacks and events.

// 2.Event Loop:
// At the core of Node.js is the event loop, which continuously checks for and processes events or tasks.
// The event loop allows Node.js to perform non-blocking I/O operations despite being single-threaded.

// 3.Non-Blocking I/O:
// Node.js uses non-blocking I/O calls, allowing it to handle multiple I/O operations concurrently.
// When an I/O operation (e.g., reading a file, querying a database) is initiated, Node.js continues to execute other code while the I/O operation completes in the background.

// 4.Callbacks and Promises:
// Node.js uses callbacks and promises to handle asynchronous operations.
// When an asynchronous operation is completed, a callback function is invoked or a promise is resolved to handle the result.

// 5.Modules and NPM:
// Node.js uses a modular approach, allowing developers to include various libraries (modules) in their applications.
// NPM (Node Package Manager) is the default package manager for Node.js, providing access to a vast repository of reusable modules.

// How Node.js Executes Code
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});




//----------------how node is different from others backend like php, dotnet, etc
// Node.js differs from other backend technologies like PHP and .NET in several key ways, including its architecture, concurrency model, programming language, ecosystem, and typical use cases. Here’s a detailed comparison:

// 1. Architecture
// Node.js:

// Event-Driven and Non-Blocking I/O: Node.js uses an event-driven, non-blocking I/O model. This allows it to handle many concurrent connections efficiently with a single thread using an event loop.
// Single-Threaded: Node.js operates on a single thread for handling event-driven, non-blocking tasks, but it can use multiple threads for CPU-bound tasks via worker threads or child processes.

// 2. Concurrency Model
// Node.js:

// Event Loop and Callbacks: Utilizes an event loop for handling asynchronous operations. Callbacks, promises, and async/await are used to manage asynchronous code.
// High Throughput: Efficiently handles I/O-bound tasks with high concurrency due to its non-blocking nature.





// -------------------------diff bt npm and yarn
// NPM (Node Package Manager) and Yarn are both package managers for JavaScript, widely used to manage dependencies in Node.js projects. While they serve the same primary purpose, there are differences in their functionality, performance, and features. Here's a detailed comparison between NPM and Yarn:

// Overview
// NPM:

// Full Name: Node Package Manager.
// Developed By: Originally developed as part of Node.js.
// Release: First released in 2010.
// Primary Use: Managing JavaScript packages and dependencies.
// Command: npm.
// Yarn:

// Full Name: Yarn (Yet Another Resource Negotiator).
// Developed By: Facebook, in collaboration with Exponent, Google, and Tilde.
// Release: First released in 2016.
// Primary Use: Managing JavaScript packages and dependencies with a focus on speed, reliability, and security.
// Command: yarn.


// ------------------------when should use npm and yarn------------
// Consistency with the Node.js Ecosystem:
// npm is the default package manager for Node.js, and many developers prefer to use it to keep things simple and consistent with the ecosystem.

// Performance:
// yarn is often faster, especially with its parallel installation process and offline caching.
