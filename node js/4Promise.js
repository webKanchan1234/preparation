// -------------------------promise-------------------

// promise is an object representing the completion or failure of an asynchronous operation. It provides a way to handle asynchronous tasks in a more readable and manageable manner than traditional callback-based approaches. Promises allow us to chain operations and handle errors more gracefully.

// States of a Promise:
// Pending: The initial state of a promise, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// Promise Methods:
// then(onFulfilled, onRejected): Attaches callbacks for when the promise is fulfilled or rejected.
// catch(onRejected): Attaches a callback for only when the promise is rejected.
// finally(onFinally): Attaches a callback that is invoked when the promise is settled (fulfilled or rejected), allowing for cleanup operations.

const myPromise = new Promise((resolve, reject) => {  // creating promise
    // Simulate an asynchronous operation
    let success = true; // Change to false to simulate a failure
    setTimeout(() => {
        if (success) {
            resolve('Operation was successful');
        } else {
            reject('Operation failed');
        }
    }, 1000); // Simulate a 1-second delay
});
myPromise  //using promise
    .then(result => {
        console.log(result); // 'Operation was successful'
    })
    .catch(error => {
        console.error(error); // 'Operation failed'
    });



// types
// 1. Promise.resolve(value)
Promise.resolve('Resolved value').then(value => {
    console.log(value); // 'Resolved value'
});

// 2.Promise.reject(reason)
Promise.reject('Rejected reason').catch(reason => {
    console.error(reason); // 'Rejected reason'
});

// 3. Promise.all(iterable)
// Takes an iterable of promises and returns a single promise that resolves when all of the promises resolve or rejects if any promise rejects.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(values); // [3, 42, 'foo']
});


// 4. Promise.allSettled(iterable)
// Takes an iterable of promises and returns a single promise that resolves when all of the promises have settled (either resolved or rejected). The returned promise fulfills with an array of objects describing the outcome of each promise.
const promise11 = Promise.resolve(3);
const promise22 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'foo');
});

Promise.allSettled([promise1, promise2]).then(results => {
    results.forEach((result) => console.log(result.status));
});

// 5. Promise.race(iterable)

// Takes an iterable of promises and returns a single promise that resolves or rejects as soon as one of the promises resolves or rejects.
const promise111 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise222 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(value => {
    console.log(value); // 'two'
});


// 6. Promise.any(iterable)
// Takes an iterable of promises and returns a single promise that resolves as soon as any of the promises in the iterable resolves. If no promises resolve, it rejects with an AggregateError.

const promise1111 = Promise.reject('error1');
const promise2222 = Promise.reject('error2');
const promise33 = Promise.resolve('success');

Promise.any([promise1, promise2, promise3]).then(value => {
    console.log(value); // 'success'
}).catch(error => {
    console.error(error); // AggregateError: All promises were rejected
});
