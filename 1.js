// let frank = bill.splice(1,3)

// console.log(bill)
// console.log(frank)
// console.log(bill.valueOf())

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question("what's your name", name=>{
//     console.log(`Hello, ${name}!`)
//     readline.close()
// })

// let a = 'z'
// let b = 'b'
// if (a < b) { // true
//   console.log(a + ' is less than ' + b)
// } else if (a > b) {
//   console.log(a + ' is greater than ' + b)
// } else {
//   console.log(a + ' and ' + b + ' are equal.')
// }

// let a = 5
// let b = 6
// function compareNumbers(a, b) {
//     return a - b
// }

// var numbers = [5,2,3,1,4]
// numbers.sort((a,b)=> a - b)
// console.log(numbers)


let myNum = 4000000
let primes = []

for (let n = 3; n < Math.sqrt(myNum); n++) {
    if (true) {
        primes.push(n)
    }
}



const exampleJson = `{
    "first-name": "Jeff",
    "last-name": "Green",
    "city-and-state": "Boston, MA",
    "zip": "12345-1234"
    }`


function convertMe(data) {

}

convertMe(exampleJson) 
// Should return: 
// `{
//     "firsName": "Jeff",
//     "lastName": "Green",
//     "cityAndState": "Boston, MA",
//     "zip": "12345-1234"
// }`