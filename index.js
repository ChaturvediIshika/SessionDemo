const express=require('express');
const app=express();
const session=require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

app.get('/',(req,res)=>{
    res.send('connected');
})

app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count+=1;
    }
    else{
        req.session.count=1;
    }
    res.send(`count=${req.session.count}`);
})

app.listen(5000,()=>{
    console.log("server running");
})