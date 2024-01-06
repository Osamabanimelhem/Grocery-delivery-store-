const mongoose=require("mongoose")

const categorySchema=new mongoose.Schema({
    
    name:{type: String},
    description:{type: String},
    image:{type:String}
})

module.exports=mongoose.model("Catogory",categorySchema)