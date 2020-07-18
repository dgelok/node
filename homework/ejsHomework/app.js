const express = require('express')
const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')


app.listen(77, ()=>{
    console.log("listening on port 77")
})