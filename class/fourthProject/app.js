const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>FOURTH home page</h1>")
})

app.get("/contact", (req, res)=>{
    // let name = req.param('name')
    // let lname = req.param('lname')

    let fname = req.query.name;
    let lname = req.query.lname;
    res.send(`<h1>FOURTH home page</h1><p>Hello ${fname} ${lname}!</p>`)
})

app.get('/photo', (req, res)=>{

    res.send(`<img height="100px" src="${req.query.images}">`)
})

app.get("/contact/:fname", (req, res)=>{
    
    let fname = req.params.fname
    res.send(`<h1>FOURTH home page</h1><p>Hello ${fname}!</p>`)
})

app.get("/math/:first/:second", (req, res)=>{
    
    let a = Number(req.params.first)
    let b = Number(req.params.second)
    let c = a + b
    res.send(`<h1>${a} plus ${b} is ${c}</h1>`)
})

// app.get("/aboutus.html", (req, res)=>{
//     res.send("<h1>FOURTH about us page</h1>")
// })
// app.get("/cats", (req, res)=>{
//     res.send("<h1>Kittycats OF DOOM </h1>")
// })
// app.get("/dogs", (req, res)=>{
//     res.send("<h1>Doggos</h1>")
// })
// app.get("/pictures/?", (req, res)=>{
//     res.send("<h1>Doggos</h1>")
// })

app.listen(5000, ()=>{
    console.log("listening on port 5000")
})