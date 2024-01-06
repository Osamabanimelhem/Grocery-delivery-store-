const cartModel=require("../models/cart")

const createNewCart=(req,res)=>{
const{userId,product,total,quantity,checkeOut}=req.body
const newCart=new cartModel({
    userId,
    product,
    total,
    quantity,
    checkeOut
}) 
newCart.save().then((result)=>{
    res.status(201).json({
        success:true,
        message:"Cart Created",
        result:result
    }).catch((err)=>[
        res.status(500).json({
            success:false,
            message:"Server Error",
            error:err.message
        })
    ])
})



}
module.exports={createNewCart}