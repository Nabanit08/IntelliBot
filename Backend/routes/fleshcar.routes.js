const express=require("express")
const { auth } = require("../middleware/Auth")
const { FleshcardModel } = require("../model/fleshcard.model")

const fleshRouter=express.Router()

// Check For Authentication Here>😎 //
fleshRouter.use(auth)


// #### Flesh Card Creation Here #####
fleshRouter.post("/create",async(req,res)=>{
    try {
        const newflesh=new FleshcardModel(req.body)
        await newflesh.save()

        res.status(200).json({msg:"FleshCard Create Scuccesfully 😊",data:req.body})

    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})


// #### Get Here ######
fleshRouter.get("/",async(req,res)=>{
   try {
    const {userID}=req.body

    const data=await FleshcardModel.find({userID})
      if(data){
        res.status(200).json({data})
      }else{
        res.status(200).json({msg:"sry Data Not Found😒"})
      }

   } catch (error) {
    res.status(400).json({msg:error.message})
   }
})


// #### Update Here😎 #####
fleshRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    const paticularflesh=await FleshcardModel.findOne({_id:id})
    const userID=paticularflesh.userID
    try {
     if(userID===req.body.userID){
        await FleshcardModel.findByIdAndUpdate({_id:id},req.body)
        const updatedData=await FleshcardModel.findById({_id:id})
        res.status(200).json({msg:"Updated succesfully 😎",updatedData})
     }  
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})

/// ##### DELETE HERE ######
fleshRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    const paticularflesh=await FleshcardModel.findOne({_id:id})
    const userID=paticularflesh.userID
    try {
     if(userID===req.body.userID){
        const DeletedData=await FleshcardModel.findById({_id:id})
        await FleshcardModel.findByIdAndDelete({_id:id})
        res.status(200).json({msg:"Deleted succesfully 😒",DeletedData})
     }  
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})

module.exports={fleshRouter}
