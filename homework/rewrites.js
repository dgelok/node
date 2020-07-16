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


