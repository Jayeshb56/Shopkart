const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors')

const mongoose = require('mongoose');



app.use(express.json());

//import all the route
const products = require('./routes/product');


app.use('/api/v1', products) 
// middleware to handle errors
app.use(errorMiddleware);


module.exports = app