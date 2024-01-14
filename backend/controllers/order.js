const orderModel=require("../models/order")

//  1. this function create order
const createNewOrder=(req,res)=>{
    const{userId,products:[{product,quantity}],date,total}=req.body
    const newOrder= new orderModel({
        userId,
        products:[{product,quantity}] ,
        date,
        total                                      
    })
    newOrder.save().then((result)=>{
        res.status(201).json({
            success:true,
            message:"New Order Created",
            result:result
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Error server",
            error:err.message
        })
    })
}
//  2. this function get All order
const getAllOrder=(req,res)=>{
    orderModel.find({}).then((result)=>{
        res.status(200).json({
            success:true,
            message:"get All Orders",
            order:result,
        })
    }).catch((error)=>{
      res.status(500).json({ 
        success:"false",
        message:"server Error",
        error:error.message
    }) 

    })
}
module.exports={createNewOrder,getAllOrder}