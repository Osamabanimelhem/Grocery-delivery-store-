const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId ,ref:"User"},
    product:[{
        product:{type:mongoose.Schema.Types.ObjectId,ref:"Product"},
        quantity:{type:Number}
    }]
})
module.exports=mongoose.model("Cart",cartSchema)