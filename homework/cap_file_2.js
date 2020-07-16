const fs = require('fs')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input file: ", (inFile)=>{
    rl.question("Output file: ", (outFile)=>{
        fs.readFile(inFile, (error, buffer)=>{
            if (error) {
              console.error("AIN'T NO FILE, SUCKER!!");
              return;
            }
            var contents = buffer.toString();
            var allCaps = contents.toUpperCase();
            fs.writeFile(outFile, allCaps, (error)=>{
              if (error) {
                console.log("THAT DIDN'T WORK, SHAME ON YOUR FAMILY");
                return;
              }
              console.log('File Saved: ', outFile);
            });
        })
        rl.close();
    })
})
