const mongoose = require('mongoose');
const { json } = require('body-parser');

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/products', (err) => {
    if (!err)
        console.log('Mongodb connection succeeded');
    else
        console.log('MongoDB connection Failed:' + JSON.stringify(err, undefined, 2));
});


module.exports = mongoose;