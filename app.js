const express = require('express');
const app = express();

const productRoute = require('./api/routes/Product')

app.use('/products',productRoute);

module.exports = app;
