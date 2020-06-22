const mongoose = require('mongoose');

var Product = mongoose.model('ProductDB', {
    pro_name: { type: String },
    unitprice: { type: Number },
    pro_type: { type: String },

});


module.exports = { Product };
