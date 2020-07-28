const express = require('express');
const { response } = require('express');
const router = express.Router();
const dataFile = require('../data/data.json')


router.get('/', (req, res)=>{
    
    let albums = dataFile.albums
    res.render('index.ejs', {
        albums: albums,
        maxlist: albums
    })


})


module.exports = router