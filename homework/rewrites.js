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


add = (x,y) => {
    return x + y
}

subtract = (x, y) => {
    return x - y
}


calc = ((x, y, operation) => {
    return calc(x.y)
})