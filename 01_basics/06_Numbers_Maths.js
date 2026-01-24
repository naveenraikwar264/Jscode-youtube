const score=400
const balance=new Number(100)   
console.log(typeof score)        // number
console.log(typeof balance)      // object  
console.log(balance)             // [Number: 100]
console.log(balance.toString().length)
console.log(balance.toFixed(2))                 // 100.00
console.log(balance.toPrecision(4))  // 1.0e+2
console.log(Number.isInteger(score)) // true
console.log(Number.isInteger(balance)) // false

// const num=1234.56789
// console.log(num.toFixed(2))        // 1234.57
// console.log(num.toFixed(4))        // 1234.5679
// console.log(num.toPrecision(3))    // 1.23e+3
// console.log(num.toPrecision(5))    // 1234.6
