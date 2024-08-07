// ----------------------middleware----------------
// Middleware is a crucial concept in web development frameworks like Express.js for Node.js. It refers to functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. Middleware can perform a variety of tasks such as executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware function.

// Key Characteristics of Middleware
// Access to req and res Objects: Middleware functions can access the incoming request (req) and the outgoing response (res) objects, allowing them to read or modify the request and response.

// Execution Control: Middleware can decide whether to pass control to the next middleware function in the stack by calling the next() function. If next() is not called, the request-response cycle will be terminated, and the response will be sent back to the client.

// Order of Execution: Middleware functions are executed in the order they are defined in the code. This sequential execution is essential for tasks like authentication, logging, and request processing.

// Types of Middleware
// Application-Level Middleware
// Router-Level Middleware
// Error-Handling Middleware
// Built-in Middleware
// Third-Party Middleware


// 1. Application-Level Middleware
// Application-level middleware is bound to an instance of the Express app using app.use() or app.METHOD() (where METHOD is an HTTP method such as get, post, etc.).


const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next(); // Pass control to the next middleware
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


// 2. Router-Level Middleware
// Router-level middleware works in the same way as application-level middleware but is bound to an instance of express.Router().

// Router-level middleware
// router.use((req, res, next) => {
//     console.log(`Request Method: ${req.method}`);
//     next();
//   });


// 3. Error-Handling Middleware
// Error-handling middleware is defined with four arguments: err, req, res, and next. It is used to handle errors that occur in the application.

// / Regular middleware
// app.use((req, res, next) => {
//   // Simulate an error
//   const err = new Error('Something went wrong!');
//   next(err); // Pass the error to the error-handling middleware
// });

// // Error-handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });


// 4. Built-in Middleware
// Express comes with some built-in middleware functions for common tasks, such as serving static files.

// Built-in middleware for serving static files
app.use(express.static('public'));


// 5. Third-Party Middleware
// There are many third-party middleware packages available for various tasks, such as parsing request bodies, handling cookies, and session management.

// Third-party middleware
app.use(bodyParser.json());


// Summary
// Middleware in Node.js, particularly with Express.js, allows for the modularization and organization of application logic. It provides a way to execute code, modify requests and responses, handle errors, and manage the flow of the request-response cycle in a web application. By understanding and using middleware effectively, you can create robust, scalable, and maintainable Node.js applications.