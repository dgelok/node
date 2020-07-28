require('dotenv').config();
const express = require('express')
const app = express()

const PORT = process.env.PORT
// public
app.use(express.static('public'))

// ejs and views 
app.set('view engine', 'ejs')
app.set('views', 'views')

// routes
app.use(require('./routes/index'))
app.use(require('./routes/albums'))
app.use(require('./routes/discuss'))
app.use(require('./routes/api'))
app.use(require('./routes/bio'))



app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})