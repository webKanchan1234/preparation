var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}

//output
// Vehicle {model: "Honda", color: "white", year: "2010", country: "UK"}
// The function declarations are hoisted similar to any variables. So the placement for Vehicle function declaration doesn't make any difference.

function foo() {
    let x = (y = 0);
    console.log(`x is ${x}, y is ${y}`); // x is 
    x++;
    y++;
    console.log(`x is ${x}, y is ${y}`); // x is 
    return x;
  }
  
  console.log(foo(), typeof x, typeof y);

//output
// 1 undefined number

//   Of course the return value of foo() is 1 due to the increment operator. But the statement let x = y = 0 declares a local variable x. Whereas y declared as a global variable accidentally. This statement is equivalent to,


var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

//output
// 1undefined
// The main points in the above code snippets are,
// You can see function expression instead function declaration inside if statement. So it always returns true.
// Since it is not declared(or assigned) anywhere, f is undefined and typeof f is undefined too.

var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);

//output
// [empty, 'b', 'c', 'd'], undefined, 4
// The delete operator will delete the object property but it will not reindex the array or change its length. So the number or elements or length of the array won't be changed. If you try to print myChars then you can observe that it doesn't set an undefined value, rather the property is removed from the array. The newer versions of Chrome use empty instead of undefined to make the difference a bit clearer.

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

//output
// true, false
// console.log(1 < 2 < 3);
// console.log(true < 3);
// console.log(1 < 3); // True converted as 1 during comparison
// True
// Whereas the second statement follows the below order,

// console.log(3 > 2 > 1);
// console.log(true > 1);
// console.log(1 > 1); // False converted as 0 during comparison
// False


function printNumbers(first, second, first) {
    console.log(first, second, first);
  }
  printNumbers(1, 2, 3);

  //output
//   3, 2, 3
// In non-strict mode, the regular JavaScript functions allow duplicate named parameters. The above code snippet has duplicate parameters on 1st and 3rd parameters. The value of the first parameter is mapped to the third argument which is passed to the function. Hence, the 3rd argument overrides the first parameter.

// Note: In strict mode, duplicate parameters will throw a Syntax Error.