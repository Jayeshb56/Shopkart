const express = require('express');
const app = express();

const mongoose = require('mongoose');



app.use(express.json());

//import all the route
const products = require('./routes/product');


app.use('/api/v1', products) 

module.exports = app