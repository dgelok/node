const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const fs = require('fs')

// read discussion.json data
const discussionData = require('../data/discussion.json')

router.get('/api', (req, res)=>{
    
    res.json(discussionData);
})

// write data to JSON file
// read submitted data off of the header file
// router.post()
// have to install body-parser to read data from the header
// body-parser puts body obj on req object
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/api', (req, res) => {
    console.log(req.body)

    discussionData.unshift(req.body);
    let newdata = JSON.stringify(discussionData);
    fs.writeFile("./data/discussion.json", newdata, 'utf-8', (err) => {
        console.log(err)
    })    
    res.json(discussionData)
})



router.delete('/api/:ID', (req, res) => {


    discussionData.splice(req.params.ID, 1);

    let newfile = JSON.stringify(discussionData);
    fs.writeFile('./data/discussion.json', newfile, 'utf-8', (err)=>{
        console.log(err)
    })
    res.json(discussionData)
})
module.exports = router;