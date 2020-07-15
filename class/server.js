// const http = require('http');

// // create a server
// const server = http.createServer((req, res)=>{

//     // handling incoming requests

//     res.writeHead(200, {'content-type': 'text/html'});

//     res.write('<h1>Hello World!!1!!one!</h1>');

//     res.end();
// })


// // listen for requests

// server.listen(5000)

// console.log("node.js webserver at port 5000 is running...");

// var myGreeting = require('./firstmod')
// console.log(myGreeting.greeting)

// myGreeting.greeting.forEach((val)=>{
//     console.log(val)
// })


var myPerson = require('./person')

myPerson("dan", "gelok")