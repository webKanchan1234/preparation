
// ---------------------------LAMBDA EXPPRESSION ----------------
const func = (a,b)=>a+b 

console.log(func(1,2))

// ---------------------------CURRYING FUNCTION ----------------

console.log("// ---------------------------CURRYING FUNCTION ----------------")
const multiArg=(a,b,c)=>a+b+c
console.log(multiArg(1,2,3));


const unaryFunc = (a)=>(b)=>(c)=>a+b+c

console.log(unaryFunc(1))
console.log(unaryFunc(1)(2))
console.log(unaryFunc(1)(2)(3))


// -------------------------- HOISTING--------------------
console.log("// ---------------------------HOISTING ----------------")

console.log(age)
var age=23

display()
function display(){
    console.log("function is hoisted")
}


// -------------------------- CLOSURE--------------------
console.log("// ---------------------------CLOSURE ----------------")

function outer(par1){
    let inner = function(par2){
        console.log(par1 + par2);
    }
    return inner
}

let outerfun = outer("Hello ")
outerfun("Kanchan")


// ------------------------------------ CALLBACK  ----------------------------

console.log("// ---------------------------CALLBACK ----------------")
function callback(cb){
    console.log("calling call back function")
    cb("I am a Callback Function");
}

function cb(call){
    console.log(call)
}

callback(cb)


// ------------------------------------ CALLBACK HELL  ----------------------------
console.log("// ---------------------------CALLBACK HELL----------------")
// async(function(){
//     async(function(){
//         async(function(){
//             async(function(){
//                 console.log("callback hell")
//             });
//         });
//     });
// });

function expectedResult(action, x, y){  
    if(action === "add"){  
        return x+y  
    }else if(action === "subtract"){  
        return x-y  
    }  
}  
  
console.log(expectedResult("add",20,10))   
console.log(expectedResult("subtract",30,10))  



// -------------------------- CALLBACK IN CALLBACK  ----------------------------
console.log("// ---------------------------CALLBACK IN CALLBACK----------------")



// ------------difference between Arrow Functions and Regular Functions---------------
// 1. Syntax
console.log("---------difference between Arrow Functions and Regular Functions------")
// Function declaration
console.log("---------Syntax------")
function greetMessage(userName) {
return `Hello ${userName}`;
}

const greetMessage1 = (userName) => {
  return `Hello ${userName}`;
}

greetMessage()
greetMessage1()

// 2. this keyword

console.log("---------this keyword------")
let user = { 
     userName: "Parth", 
     greetMessage1:() => { 
         console.log("Hello " + this.userName); // Output: Hello undefined
     }, 
     greetMessage2(){        
         console.log("Good Morning " + this.userName); // Output: Good Morning Parth 'this' binding works here
     }   
  }; 
 user.greetMessage1(); 
 user.greetMessage2();

 // 3. Using new keyword
console.log("---------new keyword------")
// // Using regular function
 let x = function(){ 
     console.log(arguments); 
 }; 
 console.log(new x (1,2,3)); // Output: Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// Using Arrow function
 let x1 = ()=> { 
     console.log(arguments);
 };
//  new x1(1,2,3); // TypeError: "x is not a constructor"



 // 4. Implicit return
console.log("---------Implicit return------")
// With Regular functions
function sum(a, b) {
  return a+b;
}
sum(10,20); // Outpu: 30
// With Arrow functions
const sum1 = (a, b) =>a+b;
sum1(10,20); //Output: 30


// 5. No arguments object in arrow functions
console.log("---------No arguments object in arrow functions------")
function print() {
  console.log(arguments)
}
print("hello", 400, false)

// // {
// //   '0': 'hello',
// //   '1': 400,
// //   '2': false
// // }

const print1 = () => {
  console.log(arguments)
}

print1("hello", 400, false)
// // Uncaught ReferenceError: arguments is not defined

