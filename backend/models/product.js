const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
    price:{type:String} ,
    name:{type:String},
    image:{type:String},
    availability:{type:String},
    category :{type:mongoose.Schema.Types.ObjectId,ref:"Catogory"},
})

module.exports=mongoose.model("Product",productSchema)