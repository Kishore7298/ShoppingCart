const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"you are in /products get route"
    });
});

router.post('/',(req,res,next)=>{
    const product = {
        productName : req.body.productName,
        productPrice : req.body.productPrice
    }
    res.status(200).json({
        message:"you are in /products post route",
        product : product
    });
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message:id
    })
})

router.delete('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message:id
    })
})
router.patch('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message:id
    })
})
module.exports = router;