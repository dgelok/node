function add(x, y, callback) {
    setTimeout(()=>{
        callback(x+y)
    }, 1000)
}

function subtract(x, y, callback) {
    setTimeout(()=>{
            callback(x-y)
    }, 1000)
}

function greeting(person, callback) {
    setTimeout(()=>{
        callback('Hola, ' + person + '!');
    }, 1000)
}

function product(numbers) {
return numbers.reduce(function(a, b) {
    return a * b;
}, 1);
} 

myArr = [5,10]

console.log(product(myArr))





// add(2, 2, result => {
//     console.log(result)
// })

// subtract(10, 5, function(result){
//     console.log(result)
// })

// greeting("Manuel", function(result) {
//     console.log(result)
// })




