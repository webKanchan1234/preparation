// 1. by literal method 

let obj1 = {
    "name": "kanchan",
    "age": 23
}

console.log("by literal mth", obj1)


// 2. by Object Constructor 

let obj2 = new Object()
obj2.name = "kumar"
obj2.age = 45

console.log("by Object constuctor", obj2)

// 3. by object create method 

let obj3 = Object.create(null)

obj3.name = "kanchan"
obj3.age = 24

console.log("by Object create", obj3)

// 4. by ES6 method 

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

let obj4 = new Person("kanchan",24)

console.log("BY ES6 methods", obj4)
