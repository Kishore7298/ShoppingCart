const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const cors = require('cors');
const mongoose = require('mongoose');


const productRoute = require('./api/routes/Product');
const orderRoute = require('./api/routes/Order');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.use(cors);
app.use('/products',productRoute);
app.use('/orders',orderRoute);

const url = "mongodb://kishore:abcd1234@ds261114.mlab.com:61114/switchon"
mongoose.connect(url,{
    useNewUrlParser:true
});

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
