// --------------------------Asynchronous Programming--------------
// Node.js promotes asynchronous programming, where operations do not wait for others to complete before starting. Instead, callbacks, promises, and async/await are used to handle the completion of operations.

// Callbacks: Functions passed as arguments to other functions, executed after the completion of certain operations.

// Promises: Objects representing the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// Async/Await: Syntactic sugar over promises, making asynchronous code look more like synchronous code, improving readability and maintainability.

//------------------------- syncronous------------------
// Blocking I/O operations in Node.js are synchronous, meaning they stop the execution of the program until the operation is completed. This can lead to performance issues, especially in a single-threaded environment like Node.js, because while the program is waiting for the blocking I/O operation to complete, it cannot perform any other tasks.



//--------------------difference bt async parallel and async series-----------
// When working with asynchronous operations, you often need to manage multiple tasks that can either be executed in parallel or in series. Understanding the difference between these two approaches is crucial for optimizing performance and ensuring correct behavior in your applications. Here’s a detailed explanation of async parallel and async series, along with examples:

// Async Parallel
// Async parallel refers to executing multiple asynchronous operations at the same time. In this approach, all tasks are initiated concurrently, and the final result is collected when all tasks complete.

// Key Characteristics:
// Concurrency: All tasks run concurrently, without waiting for any other task to complete.
// Performance: Can significantly reduce total execution time if tasks are I/O-bound and can be performed concurrently.
// Independence: Tasks are independent and do not depend on the completion of other tasks.


// Async Series
// Async series refers to executing multiple asynchronous operations one after the other, in a sequential manner. Each task starts only after the previous task has completed.

// Key Characteristics:
// Sequential Execution: Tasks are executed one after the other.
// Dependency Management: Useful when tasks depend on the results of previous tasks.
// Increased Total Time: The total execution time can be longer compared to parallel execution since each task waits for the previous one to complete.



