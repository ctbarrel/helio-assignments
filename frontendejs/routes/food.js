const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {

    let foods = {}

    try {
        
        const data = fs.readFileSync(path.join(__dirname, '../data/food.json'), 'utf8')
        foods = JSON.parse(data)    
    } catch (err) {
        console.log(err)
    }

    res.render('food', foods);
  });
  
  module.exports = router;