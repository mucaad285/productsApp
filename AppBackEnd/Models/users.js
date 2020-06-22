const mongoose = require('mongoose');

var User = mongoose.model('loginTB', {
    
    email: { type: String },
    password: { type: String },

});

module.exports = { User };
