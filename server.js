const express =require('express');
const app=express();
const bodyparser = require('body-parser');
const jwt =require('jsonwebtoken');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



const users=require('./users');
const cars=require('./cars');

app.get("/",(req,res)=>{
    res.status(200).json({success:true});
})

app.post("/login",(req,res)=>{
    const user=users.find(us=>us.username===req.body.username);
    if(user){
        if(user.password===req.body.password){
            const token=jwt.sign({userID:user.id},"bigSecret",{expiresIn:"30m"});
            res.status(200).json({token});

        }else{
          
            res.status(401).json({message:'Access denied'})

        }

    }else{
        res.status(401).json({message:'Access denied'})
    }
})

function checktoken(req,res,next){
    const token = req.headers["x-access-token"]
    if(token){
        jwt.verify(token,"bigSecret",(err,decoded)=>{
            if(err){
       
                 res.status(401).json({message:"access denied"});

            }else{
                req.userID=decoded.userID
                next()
            }
        })

    }else{
        res.status(401).json({message:"access denied"});
    }
    
}

app.get("/data",checktoken,(req,res)=>{
    const data=cars.filter(car=>car.UserID===req.userID)
    res.status(200).json({data:data});
})

app.listen(5000,()=>{
    console.log('server runing in prot 5000 ');
})