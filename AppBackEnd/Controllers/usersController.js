const express = require('express');

var router = express.Router();

const { User } = require('../models/users');

var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error  .... > ' + JSON.stringify(err, undefined, 2)); }
    });
});

//save user
router.post('/save', (req, res) => {
    var _user = new User({
        email: req.body.email,
        password: req.body.password
    });
    _user.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error .... > ' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;