const express = require('express');
const router = express.Router();
const datafile = require('../data/data.json')
let albums = datafile.albums
const discussfile = require('../data/discussion.json')

router.get('/discuss', (req, res)=>{
    
    res.render('discuss', {
        albums: albums,
        maxlist: albums
    })
})



module.exports = router;
