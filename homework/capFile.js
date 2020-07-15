const fs = require('fs')

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Which file do you want to read? ", function(name) {
    fs.readFile(name, (error, buffer)=>{
        if (error) {
            console.log(`ERROR: no such file: ${name}`)
            return;
        }
        console.log(buffer.toString().toUpperCase())
    })
    rl.close();
})



