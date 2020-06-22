const express = require('express');

var router = express.Router();

const { Product } = require('../models/products');
//const products = require('../models/products');

var ObjectId = require('mongoose').Types.ObjectId;

//get all products
router.get('/', (req, res) => {
    Product.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error  .... > ' + JSON.stringify(err, undefined, 2)); }
    });
});

//save products
router.post('/save', (req, res) => {
    var prod = new Product({
        pro_name: req.body.pro_name,
        unitprice: req.body.unitprice,
        pro_type: req.body.pro_type,
        stock: req.body.stock,
    });
    prod.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error .... > ' + JSON.stringify(err, undefined, 2)); }
    });
});

//get product by id 
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Record Found with this given id: ' + req.params.id)

    Product.findById(req.params.id, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error .... > ' + JSON.stringify(err, undefined, 2)); }
    });
});

//update product

router.patch('/updateproducts/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Record Found with this given id: ' + req.params.id)

    Product.findOneAndUpdate({ _id: req.params.id, _proID: req.user_id }, {
        $set: req.body
    }).then(() => {
        res.send({ 'message': 'updated successfully' });
    });
});

//Delete Product
router.delete('/deleteproducts/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Record Found with this given id: ' + req.params.id)

    Product.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error .... > ' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;