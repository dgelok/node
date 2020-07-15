const fs = require('fs')
const dns = require('dns');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Domain name: ", (domain)=>{
    rl.question("Output file: ", (outFile)=>{
        // retrieve info from domain
        dns.lookup(domain, (error, answer)=>{
            if (error) {
                console.log(`Error in retrieving ${domain}`);
                return;
            }
            
            // write-to-file functionality here
        })
        rl.close();
    })
})