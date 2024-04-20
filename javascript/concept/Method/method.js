
//---------------------- CALL--------------------
let obj1 = {
    "name": "kanchan",
    "age": 23
}

let obj2 = {
    "name": "Sohan",
    "age": 30
}


function display(par1,par2){
    console.log(par1+" "+this.name+" "+par2+" "+this.age)
}

display.call(obj1,"Hi","your is")


//---------------------- APPLY--------------------


display.apply(obj1,["Hi","your is"])

let returnFunction=display.bind(obj1)
returnFunction("Hi","your is")
