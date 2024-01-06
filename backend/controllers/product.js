const productModel=require("../models/product")
const createNewProduct=(req,res)=>{
    const{price,name,image,availability,category}=req.body
    const newProduct=new productModel({
        price,
        name,
        image,
        availability,
        category
    })
    newProduct.save().then((result)=>{
        res.satus(201).json({
            success:true,
            message:"Product created",
            result:result
        }).catch((err)=>{
            res.status(500).json({
                success:false,
                message:"Server Error",
                error:err.message
            })
        })
    })

}

module.exports={createNewProduct}