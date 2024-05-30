
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("Hello World!");
    }, 2000)
}, (reject) => {
    console.log("rejected")
})

const promise1 = new Promise(function (resolve, reject) {
    resolve("hello"),
        reject("error")
})
promise.then(res => {
    console.log(res)
})

promise1.then(res => {
    console.log(res)
})


// ----------------------------- PROMISE CHAINING ------------------------
console.log("------------------------ PROMISE CHAINING ------------------------")
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})
    .then(function (result) {
        console.log(result); // 1
        return result * 2;
    })
    .then(function (result) {
        console.log(result); // 2
        return result * 3;
    })
    .then(function (result) {
        console.log(result); // 6
        return result * 4;
    });


// ----------------------------- PROMISE ALL ------------------------
console.log("------------------------ PROMISE ALL ------------------------")


const promisex = new Promise((resolve) => {
    resolve("promise x")
},
    (reject) => {
        reject("reject promise x")
    }
)


const promisey = new Promise((resolve) => {
    resolve("promise y")
},
    (reject) => {
        reject("reject promise y")
    }
)

const promisez = new Promise((resolve) => {
    resolve("promise z")
},
    (reject) => {
        reject("reject promise z")
    }
)


Promise.all([promisex, promisey, promisez]).then(res => {
    console.log(res)
})



// ----------------------------- PROMISE RACE ------------------------
console.log("------------------------ PROMISE RACE ------------------------")
var promiseRace1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, "one");
});
var promiseRace2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, "two");
});

Promise.race([promiseRace1, promiseRace2]).then(function (value) {
    console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});