const express = require('express');
const conn = require('../dao/conn')
const router = express.Router();


router.route('/getProducts')
.get((req,res,next)=>{
    // console.log(1);
    // res.json({msg:1});
    let sql = 'select * from product';
    conn.query(sql,(err,result)=>{
        if(err) console.log(err);

        res.json(result);

    });


});

router.route('/getItem')
.get((req,res,next)=>{
    // console.log(req.query);
    // res.json({
    //     msg:1
    // });
    let sql = `select * from product where id=${req.query.id}`;

    conn.query(sql,(err,result)=>{
        if(err) console.log(err);
        res.json(result);
    });

});

module.exports=router;