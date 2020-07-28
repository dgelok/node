const express = require('express');
const router = express.Router();
const dataFile = require('../data/data.json') 
let albums = dataFile.albums

router.get('/bio', (req, res)=>{

    res.render('bio', {
        albums: albums,
        maxlist: albums
    })
})


module.exports = router