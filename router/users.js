const express = require('express');

const conn = require('../dao/conn');

const crypto = require('crypto');

const router = express.Router();
// 获得路由对象

// router.route('/')


// .get((req,res,next)=>{
//     console.log(req.query);  
//     res.json({'method':'get'}); 
// })
// .post((req,res,next)=>{
//     console.log(req.body);
//     res.json({'method':'post'})
// });     


router.route('/reg')
    .post((req, res, next) => {
        // console.log(req.body);
        let searchUser = `select * from users where name='${req.body.name}'`;
        conn.query(searchUser,(err,results)=>{
            if(err) console.log(err);
            // console.log(results)
            if(results.length) {
                res.json({msg:'存在'})
            }else{
                let md5 = crypto.createHash('md5');

                let passResult = md5.update(req.body.password).digest('hex');
                // console.log(passResult);
        
                let sql = `insert into users(name, password, email, phone) values('${req.body.name}','${passResult}','${req.body.email}','${req.body.phone}')`;
        
                // console.log(sql);
                conn.query(sql, (err, result) => {
                    if (err) console.log(err);
                    if (result.insertId) {
                        res.cookie('name', req.body.name);
                        res.cookie('isLogined', true);
                        res.json({ msg: '注册成功' });
                    }
                });

            }

        });

       

    });

router.route('/log')
    .post((req,res,next) => {

        let md5 = crypto.createHash('md5');

        let passResult = md5.update(req.body.password).digest('hex');
        // console.log(req.cookies);
        let searchUser = `select * from users where name='${req.body.name}' and password='${passResult}'`;
        conn.query(searchUser,(err,results)=>{
            if(err) throw err;
            // console.log(results)
            if(results.length) {

                res.cookie('name', req.body.name);
                res.cookie('isLogined', true);
                res.json('登陆成功');
            
            
            }else{
                res.json('用户名或密码错误');
                

            }

        });


    });
module.exports = router;
// 设置完路由  导出路由