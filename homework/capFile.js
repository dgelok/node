const fs = require('fs')

let text = 'file1.txt'

fs.readFile(text, (error, buffer)=>{
    if (error) {
        console.log(error)
    }
    console.log(buffer.toString().toUpperCase())
})