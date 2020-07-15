const fs = require('fs')
const dns = require('dns');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Domain name: ", (domain)=>{
    // do stuff
    
    dns.lookup(domain, (error, answer)=>{
        if (error) {
            console.log(`Error in retrieving ${domain}`);
            return;
        }
        console.log(`IP Address: ${answer}`)
    })
    rl.close();
})