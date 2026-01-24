// const score=400
// const balance=new Number(100)   
// console.log(typeof score)        // number
// console.log(typeof balance)      // object  
// console.log(balance)             // [Number: 100]
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))                 // 100.00
// console.log(balance.toPrecision(4))  // 1.0e+2
// console.log(Number.isInteger(score)) // true
// console.log(Number.isInteger(balance)) // false

// const num=1234.56789
// console.log(num.toFixed(2))        // 1234.57
// console.log(num.toFixed(4))        // 1234.5679
// console.log(num.toPrecision(3))    // 1.23e+3
// console.log(num.toPrecision(5))    // 1234.6
const hundred=100000000
console.log(hundred.toLocaleString('en-IN')) // 10,00,00,000
console.log(hundred.toLocaleString('de-DE')) // 100.000.000
console.log(hundred.toLocaleString('ja-JP')) // 1,000,00000

// Math Object
console.log(Math.PI)               // 3.141592653589793
console.log(Math.E)                // 2.718281828459045
console.log(Math.round(4.6))       // 5
console.log(Math.floor(4.9))       // 4
console.log(Math.ceil(4.1))        // 5
console.log(Math.trunc(4.9))       // 4
console.log(Math.pow(2,3))         // 8
console.log(Math.sqrt(64))         // 8
console.log(Math.abs(-55))         // 55
console.log(Math.min(3,5,1,9,6))   // 1
console.log(Math.max(3,5,1,9,6))   // 9
console.log(Math.random())          // random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1) // random number between 1 and 10
console.log(Math.floor(Math.random() * 100) + 1) // random number between 1 and 100
const min=10
const max=20
console.log(Math.floor(Math.random()* (max - min + 1)) + min) // random number between 10 and 20
