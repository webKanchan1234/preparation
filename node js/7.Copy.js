// ---------------------------------Shallow Copy----------------------
// A shallow copy of an object or array is a copy of the top-level properties. If the properties themselves are objects or arrays, the references to these nested objects are copied, not the objects themselves. Consequently, changes to nested objects in the copy will also affect the original object and vice versa.

// Examples of Shallow Copy
// 1. Using Object.assign for Objects:
const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original);

shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3

// 2. Using Spread Operator for Objects:
const original2 = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original2 };

shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3

// 3. Using Array.prototype.slice for Arrays:
const original3 = [1, 2, { a: 3 }];
const shallowCopy = original.slice();

shallowCopy[2].a = 4;
console.log(original[2].a); // Output: 4



// ---------------------------------Deep Copy----------------------
// A deep copy involves creating a new instance of the object or array and recursively copying all properties and nested objects. Changes to the nested objects in the deep copy do not affect the original object.

// Examples of Deep Copy
// 1. Using JSON.parse and JSON.stringify:
// This method works well for objects and arrays without functions or special objects like Date, RegExp, Map, Set, etc.

const original11 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original11));

deepCopy.b.c = 3;
console.log(original.b.c); // Output: 2

// 2. Using a Recursive Function:
// A custom recursive function can handle deep copying for objects and arrays, including more complex structures.
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(item => deepCopy(item));
    }
  
    const copy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
  }
  
  const original22 = { a: 1, b: { c: 2 } };
  const deepCopyObject = deepCopy(original22);
  
  deepCopyObject.b.c = 3;
  console.log(original.b.c); // Output: 2
  
//   3. Using Libraries:
//   Libraries like Lodash provide utilities for deep copying.
const _ = require('lodash');

const original33 = { a: 1, b: { c: 2 } };
const deepCopy = _.cloneDeep(original33);

deepCopy.b.c = 3;
console.log(original.b.c); // Output: 2



// Summary
// Shallow Copy:

// Copies only the top-level properties.
// Nested objects and arrays are shared between the original and the copy.
// Methods: Object.assign, spread operator (...), Array.prototype.slice.
// Deep Copy:

// Copies all properties and nested objects/arrays.
// Changes to nested objects in the copy do not affect the original.
// Methods: JSON.parse(JSON.stringify(...)), custom recursive functions, libraries like Lodash (_.cloneDeep).
