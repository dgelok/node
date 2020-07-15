// function add(x, y) {
//     var result = x + y;
//     return result;
// }

// function greeting(person) {
// return 'Hola, ' + person + '!';
// }

// function product(numbers) {
// return numbers.reduce(function(a, b) {
//     return a * b;
// }, 1);
// } 


function subtract(x, y, callback) {
    setTimeout(()=>{
            callback(x-y)
    }, 1)

}

subtract(10, 5, function(result){
    console.log(result)
})




