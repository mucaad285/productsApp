const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var productController = require('./Controllers/productController.js');
var usersController = require('./Controllers/usersController.js');


var app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => console.log('server started @ http://127.0.0.1:3000/ '));

app.use('/products', productController);
app.use('/users', usersController);
