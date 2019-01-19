const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"get in /orders"
    });
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"post in /orders"
    });
});
router.get('/:routerId',(req,res,next)=>{
    res.status(200).json({
        message:req.params.routerId
    });
});
router.delete('/:routerId',(req,res,next)=>{
    res.status(200).json({
        message:req.params.routerId
    });
});
module.exports = router;