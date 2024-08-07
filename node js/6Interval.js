
// 1. setInterval
// setInterval is used to execute a function repeatedly at a specified interval (in milliseconds)
const intervalId = setInterval(() => {
    console.log('This message will be logged every 2 seconds');
  }, 2000);

// 2. clearInterval
// clearInterval is used to stop an interval that was created with setInterval.
clearInterval(intervalId);



// 3. setTimeout
// setTimeout is not an interval, but it's often used in conjunction with intervals. It executes a function after a specified delay (in milliseconds).

const timeoutId = setTimeout(() => {
    console.log('This message will be logged after 2 seconds');
  }, 2000);

  
//   4. clearTimeout
// clearTimeout is used to cancel a timeout that was created with setTimeout.
clearTimeout(timeoutId);

// 5. Custom Intervals Using setTimeout
// Custom intervals can be created using setTimeout recursively to have more control over the timing.
function customInterval(callback, delay) {
    function interval() {
      callback();
      setTimeout(interval, delay);
    }
    setTimeout(interval, delay);
  }
  
  customInterval(() => {
    console.log('This message will be logged every 2 seconds using a custom interval');
  }, 2000);

// 6. Animation Frame Intervals (requestAnimationFrame)
// requestAnimationFrame is used for creating smoother animations by executing a function before the next repaint. It's often used for intervals in animations but it doesn't have a fixed interval in milliseconds.

function animate() {
    // Animation code here
    console.log('Animating...');
    requestAnimationFrame(animate);
  }
  
  requestAnimationFrame(animate);

// 7. Immediate Execution (setImmediate)
// setImmediate is not an interval function, but it's similar to setTimeout with a delay of 0ms. It's available in Node.js but not in browsers.
setImmediate(() => {
    console.log('This message will be logged immediately after I/O events');
  });

// Summary
// setInterval and clearInterval: For repeating tasks at fixed intervals.
// setTimeout and clearTimeout: For delayed execution of a function.
// Custom intervals with setTimeout: For more control over repeated execution.
// requestAnimationFrame: For creating smooth animations.
// setImmediate: For immediate execution after I/O events (Node.js only).
