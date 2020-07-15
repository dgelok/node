const fs = require('fs')
const readline = require("readline");
const http = require('http')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Domain name: ", (domain)=>{
    rl.question("Output file: ", (outFile)=>{
        // retrieve info from domain
        var options = {
            host: domain,
            path: ""
        }

        let callback = function(response) {
            // console.log(response)
            var str = '';

            //append chunks to str
            response.on('data', function (chunk) {
                str += chunk;
            });

            //the whole response has been received
            response.on('end', function () {
                // write-to-file functionality here
                fs.writeFile(outFile, str, (error)=>{
                    if (error) {
                      console.error(error.message);
                      return;
                    }
                    console.log('File Saved: ', outFile);
                  });
            });
        }
        http.request(options, callback).end();
        // c++ is populating a response and passing it to callback
        rl.close();
        })
        
    })
    

// let callback = function(response) {
//     var str = '';
//     //another chunk of data has been received, so append it to `str`
//     response.on('data', function (chunk) {
//         str += chunk;
//     });
//     //the whole response has been received, so we just print it out here
//     response.on('end', function () {
//         fs.writeFile(outFile, str, (error)=>{
//             if (error) {
//               console.error(error.message);
//               return;
//             }
//             console.log('File Saved: ', outFile);
//           });
//     });
// }
