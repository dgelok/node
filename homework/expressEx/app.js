let express = require('express')
let app = express();
let axios = require('axios')

app.use(express.static('public'))

app.get('/api', (req, res)=>{
    axios.get('https://corona.lmao.ninja/v2/states')
    .then(response =>{
        console.log(response);
        
    })
})

app.get('/', (req, res)=>{
    res.send("<h1 class='bg-yellow'>Hello world!</h1>")
})
app.get('/cats', (req, res)=>{
    res.send("<h1>Meow</h1>")
})
// app.get('/dogs', (req, res)=>{
//     res.send("<h1>Woof</h1>")
// })
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

let data = { data: [
    {
        id: 1,
        name: "Golden Retriever",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.f-kvTCRhxiSNiNXv8K-5rQHaE8%26pid%3DApi&f=1"
    },
    {
        id: 2,
        name: "Boxer",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GfbPprByKN_DB23kd022LQHaHa%26pid%3DApi&f=1"
    },
    {
        id: 3,
        name: "Scottie",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.I4FRHOcYk5OAxZ8-Yh8XfQHaFj%26pid%3DApi&f=1"
    },
    {
        id: 4,
        name: "Rottweiler",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QKRTFLlnN4n32-HTHt4W3wHaFo%26pid%3DApi&f=1"
    },
]}

app.get('/dogs/:num', (req, res)=>{
    let id = parseInt(req.params.num)
    let picURL = data.data[id-1].img
    console.log(picURL)
    res.send(`<h1>${data.data[id-1].name}</h1><img height="200px" src="${picURL}">`)
})



app.listen(5000, ()=>{
    console.log('listening on port 5000')
})