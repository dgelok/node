let express = require('express')
let app = express();

app.get('/', (req, res)=>{
    res.send("<h1>Hello world!</h1>")
})
app.get('/cats', (req, res)=>{
    res.send("<h1>Meow</h1>")
})
app.get('/dogs', (req, res)=>{
    res.send("<h1>Woof</h1>")
})
app.get('/cats_and_dogs', (req, res)=>{
    res.send("<h1>Living together</h1>")
})
app.get('/greet/:name', (req, res)=>{
    res.send(`<h1>Hello ${req.params.name}!</h1>`)
})
app.get('/year/', (req, res)=>{
    var a = parseInt(req.query.age)
    var b = 2020 - a
    res.send(`<h1>You were born in ${b}!</h1>`)
})

app.listen(5000, ()=>{
    console.log('listening on port 5000')
})