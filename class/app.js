
const fs = require('fs');

let fileName = './preamble.txt'

fs.readFile(fileName, (error, buffer)=>{
    if(error){
        console.log(error.message);
        return;
    }

    console.log(buffer.toString())
})