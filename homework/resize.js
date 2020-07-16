const gm = require('gm')
const http = require('http')
const fs = require('fs'
)
// console.log(gm)
// console.log(http)

var options = {
    url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    encoding: null
}

var outFile = 'image.png'
http.request(options, function(error, response, imageData){
    fs.writeFile(outFile, imageData, (error)=>{
        if (error) {
          console.error(error.message);
          return;
        }
        console.log('File Saved: ');
      })
})