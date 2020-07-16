const gm = require('gm')
const request = require('request')
const fs = require('fs')


var options = {
    url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    encoding: null
}

request(options, function(error, response, imageData){
    
    var outFile = 'image.png'
    
    fs.writeFile(outFile, imageData, (error)=>{
        if (error) {
          console.error(error.message);
          return;
        }

        // gm(outFile)
        // .resize(240, 240)
        // .write('image2.png', (err)=>{
        //     if (err) {
        //         console.log("oops")
        //     }
        // })

        gm('image.png')
        .resize(240, 240, '!')
        .write('NEWresize.png', function (err) {
        if (!err) console.log('done');
        });
        console.log('File Saved: ');
      })
})

