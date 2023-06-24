const { Schema, model } = require("mongoose");

const felshSchema=Schema({
    title:String,
    description:String,
    term:String,
    definition:String,
    userID:String,
    username:String

})

const FleshcardModel=model("fleshcar",felshSchema)

module.exports={FleshcardModel}