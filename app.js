const express = require('express');
const path =require('path');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');


const app = express();

const usersRouter=require('./router/users');
const productRouter=require('./router/product');


let conf={
    port:8888,
    host:'10.31.162.18'


};

// 配置静态web服务
app.use(express.static(path.join(__dirname,'public')));

// 中间路由  从上往下传递
app.use(express.json())
app.use(express.urlencoded({extended:true}));  //post表单数据解析成json

app.use(cookieParser());  //读取设置cookie中间件

app.use('/users',usersRouter);
app.use('/product',productRouter);

app.use(function(req,res,next){
    // console.log(1);
    next(createError(404));
});
app.use(function(err,req,res,next){
    res.status(err.status||500);
    res.redirect('/html/404.html');

})

app.listen(conf.port,conf.host,()=>{
    console.log(`server is running on http://${conf.host}:${conf.port}`);
})