const cartModel=require("../models/cart")
//  1. this function create Cart
const createNewCart=(req,res)=>{
const{userId,product:[{product,quantity}]}=req.body
const newCart=new cartModel({
    userId,
    product:[{product,quantity}]
  
}) 
newCart.save().then((result)=>{
    res.status(200).json({
        success:true,
        message:"Cart Created",
        result:result
    })
}).catch((err)=>{
    res.status(500).json({
        success:false,
        message:"Server Error",
        error:err.message
    })
})

}
//  2. this function get All Cart
const getAllCarts=(req,res)=>{
    cartModel.find({}).then((result)=>{
        res.status(201).json({
            success:true,
            message:"All the carts",
            cart:result,
        })
    }).catch((error)=>{
        res.status(500).json({
            success:false,
            message:"server Error",
            error:error.message
        })
    })
}
//  3. this function delete ById Cart
const deleteCarItemById=(req,res)=>{
    const{id}=req.params
    cartModel.findByIdAndDelete(id).then((result)=>{
        if(!result){
           return res.status(404).json({
               success:false,
               message:`the carItem with id =>${id} not found`,
           })
        }
           res.status(200).json({
           success:true,
           message:`delete carItem by id =>${id}`,
           carItem:result    
           })
       }).catch((error)=>{
        res.status(500).json({
            success:false,
            message:"server Error",
            error:error.message
        })
       })
}

module.exports={createNewCart,getAllCarts,deleteCarItemById}