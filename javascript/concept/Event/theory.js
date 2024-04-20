// --------------------------EVENT LOOP ------------------------------------
// The event loop is a process that continuously monitors both the call stack and the event queue and checks whether or not the call stack is empty. If the call stack is empty and there are pending events in the event queue, the event loop dequeues the event from the event queue and pushes it to the call stack. The call stack executes the event, and any additional events generated during the execution are added to the end of the event queue.

// Note: The event loop allows Node.js to perform non-blocking I/O operations, even though JavaScript is single-threaded, by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.


// A task is any javascript code/program which is scheduled to be run by the standard mechanisms such as initially starting to run a program, run an event callback, or an interval or timeout being fired. All these tasks are scheduled on a task queue. Below are the list of use cases to add tasks to the task queue,

// When a new javascript program is executed directly from console or running by the <script> element, the task will be added to the task queue.
// When an event fires, the event callback added to task queue
// When a setTimeout or setInterval is reached, the corresponding callback added to task queue

// --------------------------EVENT QUEUE ------------------------------------

// The event queue follows the queue data structure. It stores async callbacks to be added to the call stack. It is also known as the Callback Queue or Macrotask Queue.

// Whenever the call stack receives an async function, it is moved into the Web API. Based on the function, Web API executes it and awaits the result. Once it is finished, it moves the callback into the event queue (the callback of the promise is moved into the microtask queue).

// The event loop constantly checks whether or not the call stack is empty. Once the call stack is empty and there is a callback in the event queue, the event loop moves the callback into the call stack. But if there is a callback in the microtask queue as well, it is moved first. The microtask queue has a higher priority than the event queue.



// ---------------------------- EVENT MICROTASK --------------------

// What is microtask
// Microtask is used for the javascript code which needs to be executed immediately after the currently executing task/microtask is completed. They are kind of blocking in nature. i.e, The main thread will be blocked until the microtask queue is empty. The main sources of microtasks are Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers etc

// Note: All of these microtasks are processed in the same turn of the event loop


// What is the purpose of queueMicrotask
// The queueMicrotask function is used to schedule a microtask, which is a function that will be executed asynchronously in the microtask queue. The purpose of queueMicrotask is to ensure that a function is executed after the current task has finished, but before the browser performs any rendering or handles user events.

// By using queueMicrotask, you can ensure that certain tasks or callbacks are executed at the earliest opportunity during the JavaScript event loop, making it useful for performing work that needs to be done asynchronously but with higher priority than regular setTimeout or setInterval callbacks.

// What is a microTask queue
// Microtask Queue is the new queue where all the tasks initiated by promise objects get processed before the callback queue. The microtasks queue are processed before the next rendering and painting jobs. But if these microtasks are running for a long time then it leads to visual degradation.



// ---------------------------- EVENT FLOW --------------------
// Event flow is the order in which event is received on the web page. When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object.


// There are two ways of event flow

// Top to Bottom(Event Capturing)
// Bottom to Top (Event Bubbling)


// ---------------------------- EVENT BUBBLING --------------------
// Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element(i.e, global window object).

// By default, event handlers triggered in event bubbling phase as shown below,

// ---------------------------- EVENT CAPTURING --------------------
// Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost target DOM element.

// You need to pass true value for addEventListener method to trigger event handlers in event capturing phase.


// ---------------------------- EVENT DELEGATION --------------------



// ---------------------------- HEAP --------------------

// What is heap
// Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime. Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.



// ---------------------------- GLOBAL EXECUTION CONTEXT --------------------

// What is global execution context?
// The global execution context is the default or first execution context that is created by the JavaScript engine before any code is executed(i.e, when the file first loads in the browser). All the global code that is not inside a function or object will be executed inside this global execution context. Since JS engine is single threaded there will be only one global environment and there will be only one global execution context
// For example, the below code other than code inside any function or object is executed inside the global execution context.

// var x = 10;

// function A() {
//   console.log("Start function A");

//   function B() {
//     console.log("In function B");
//   }

//   B();
// }

// A();

// console.log("GlobalContext");

// What is function execution context?
// Whenever a function is invoked, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the Global Execution Context (GEC) to evaluate and execute the code within that function.