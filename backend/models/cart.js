const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId ,ref:"User"},
    product:[{type:mongoose.Schema.Types.ObjectId ,ref :"Product"}],
    total:{type:Number},
    quantity:{type:Number},
    checkeOut:{type:Boolean}

})
module.exports=mongoose.model("Cart",cartSchema)