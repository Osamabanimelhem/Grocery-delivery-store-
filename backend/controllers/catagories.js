const categoryModel=require("../models/categories")

const createNewCategory=(req,res)=>{
    const {name,description,image}=req.body
    const newCategory=new categoryModel({
        name,
        description,
        image
    })
    newCategory.save().then((result)=>{
        res.status(201).json({
            success:true,
            message:"category created",
            name:result
        }).catch((err)=>{
            res.status(500).json({
                success:false,
                message:"Server Error",
                error:err.message
            })
            
        })
    })
}
module.exports={createNewCategory}