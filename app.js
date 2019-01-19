const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const productRoute = require('./api/routes/Product');
const orderRoute = require('./api/routes/Order');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/products',productRoute);
app.use('/orders',orderRoute);

app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((err,req,res,next)=>{
    res.status( err.status || 500 ).json({
        message: err.message
    })
});

module.exports = app;
