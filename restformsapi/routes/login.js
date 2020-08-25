const express = require('express');
const router = express.Router();
const db = require(`../data/array`)

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    let userName = req.param("username")
    res.render('main',{username: userName});
});

router.post('/signin', function(req, res, next) {
    
    let user = db.getUser(req.body.username, req.body.password)
    res.render('main', {action: "Found", user});
});

router.post('/signup', function(req, res, next) {
    
    let user = db.addUser(req.body.username, req.body.password)
    res.render('main', {action: "Added", user});
});

router.post('/changepw', function(req, res, next) {
    
    let user = db.changePassword(req.body.username, req.body.oldPassword, req.body.password)
    res.render('main', {action: "Password Changed", user});
});


module.exports = router;
