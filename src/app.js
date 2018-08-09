'use strict';
 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta MongoDB
mongoose.connect('mongodb://thiagobooteste1:thiagobooteste1@ds018568.mlab.com:18568/thiagobooteste1');

//carrega models
const Product = require('./models/product');

//carrega rotas
const indexRoutes = require('./routes/index-routes');
const productsRoutes = require('./routes/product-routes'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 

 

app.use('/', indexRoutes);
app.use('/products', productsRoutes); 


module.exports = app;