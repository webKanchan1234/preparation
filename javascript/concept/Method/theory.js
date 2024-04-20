// The difference between Call, Apply and Bind can be explained with below examples,

// -------------------------- CALL -------------------------

// Call: The call() method invokes a function with a given this value and arguments provided one by one


// -------------------------- APPLY -------------------------

// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

// -------------------------- BIND -------------------------

// Bind: returns a new function, allowing you to pass any number of arguments

// Call and Apply are pretty much interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for comma (separated list) and Apply is for Array.

// Bind creates a new function that will have this set to the first parameter passed to bind().


// What is the purpose of the array slice method
// The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end of the array.

// Some of the examples of this method are,


// -------------------------- SLICE -------------------------
// What is the purpose of the array splice method
// The splice() method adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position/index for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

// Some of the examples of this method are:
// Note: Splice method modifies the original array and returns the deleted array.

// ------------------------------- DIFFERENCE ------------------------
// Slice	Splice
// Doesn't modify the original array(immutable)	Modifies the original array(mutable)
// Returns the subset of original array	Returns the deleted elements as array
// Used to pick the elements from array	Used to insert/delete elements to/from array




// -------------------Filter vs Map vs Reduce vs Foreach------------------------
// 1. ForEach
// Foreach takes a callback function and run that callback function on each element of array one by one.
// // es5
// sample.forEach(function (elem, index){
//    console.log(elem + ' comes at ' + index);
// })
// // es6
// sample.forEach((elem, index) => `${elem} comes at ${index}`)

// 2. Filter
//  Filter let you provide a callback for every element and returns a filtered array.
// The filter() method does not execute the function for empty elements.
// Also take notice filter does not update the existing array it will return a new filtered array every time.
// The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value.
// If the value is true element remains in the resulting array but if the return value is false the element will be removed for the resulting array.
// //es5
// var result = sample.filter(function(elem){
//     return elem !== 2;
// })
// console.log(result)
// // es6
// var result = sample.filter(elem => elem !== 2)

// 3. Map
// Map like filter & foreach takes a callback and run it against every element on the array but whats makes it unique is it generate a new array based on your existing array.

// 4. Reduce
// Reduce method of the array object is used to reduce the array to one single value.
// reduce takes a callback ( like every function we talked about ). Inside this callback we get two arguments sum & elem. The sum is the last returned value of the reduce function. For example initially the sum value will be 0 then when the callback runs on the first element it will add the elem to the sum and return that value. On second iteration the sum value will be first elem + 0, on third iteration it will be 0 + first elem + second elem.

// So that is how reduce works it reduces the array into one single value and returns it upon completion.
// var sample = [1, 2, 3] // here we meet again
// // es5
// var sum = sample.reduce(function(sum, elem){
//     return sum + elem;
// })
// // es6
// var sum = sample.reduce((sum, elem) => sum + elem)
// console.log(sum)