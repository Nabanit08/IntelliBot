const express=require("express")
const { UserModel } = require("../model/user.model")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require("dotenv").config()

const userRouter=express.Router()


// ####### /users/register #########

userRouter.post("/register",async(req,res)=>{
    try {
        const {name,email,password }=req.body;
        const existingUser = await UserModel.findOne({email});
        if (existingUser) {
          return res.status(200).json({ error: 'User already exists. Please login.' });
        }
        bcrypt.hash(password, 2, async(err, hash)=>{
            if(err){
                res.status(200).json({ message:err});
            }else{
                const user = new UserModel({ name,email,password:hash });
                await user.save();
                res.status(200).json({ message: 'User registered successfully',user});
            }
        })
        
      } catch (error) {
        res.status(400).json({ error:error.message});
      }
})


// ####### /users/login #########

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const User = await UserModel.findOne({email});
        if(User){
            bcrypt.compare(password, User.password, (err, result)=>{
               if(result){
                const userID=User._id
                const username=User.name
              let token =  jwt.sign({userID,username}, process.env.KEY, { expiresIn: '7d' });
              res.status(200).json({ message: 'User Login successfully',token});
               }else{
                res.status(400).json({ msg:"Wrong credential"});
               }
            });
        }else{
            res.status(400).json({ msg:"Wrong credential"});
        }
       
        
    } catch (error) {
        res.status(400).json({ error:error.message});
    }
})




module.exports={userRouter}
