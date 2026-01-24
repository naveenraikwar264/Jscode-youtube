// const score=400
// const balance=new Number(100)   
// console.log(typeof score)        // number
// let MyDate=new Date()
// console.log(MyDate)                  // current date and time
// console.log(typeof MyDate)           // object

// let MyDate1=new Date('2023-06-15T10:30:00')
// console.log(MyDate1)                 // 2023-06-15T10:30:00.000Z

// let MyDate2=new Date(2023,5,15,10,30,0) // month is 0-indexed
// console.log(MyDate2)                 // 2023-06-15T04:00:00.000Z (depends on timezone)

// console.log(MyDate.getFullYear())    // current year    
// console.log(MyDate.toLocaleTimeString())       // current month (0-11)
// console.log(MyDate.toLocaleDateString ())
// let mycreatedDate=new Date(2023,0,23)
// let mycreatedDate=new Date(2023,0,23,5,3)
// console.log(mycreatedDate)
// console.log(mycreatedDate.toDateString())


// let mycreatedDate=new Date("2023-01-23")
// console.log(mycreatedDate)
// console.log(mycreatedDate.toDateString())
// console.log(mycreatedDate.toLocaleString())

// let mycreatedDate=new Date("01-14-2023")
// console.log(mycreatedDate)
// console.log(mycreatedDate.toDateString())
// console.log(mycreatedDate.toLocaleString())

let mytimestamp =Date.now()
console.log(mytimestamp)               // current timestamp in milliseconds

let myDatefromtimestamp=new Date(mytimestamp)
console.log(myDatefromtimestamp.toLocaleString())

let pastDate=new Date(2020,0,1)
console.log(pastDate.toLocaleString())

let diff= myDatefromtimestamp - pastDate
console.log(diff)                      // difference in milliseconds

console.log(Math.floor(diff/(1000*60*60*24))) // difference in days
 
