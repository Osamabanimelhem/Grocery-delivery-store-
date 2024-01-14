const productModel=require("../models/product")
//  1. this function create product
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
        res.status(201).json({
            success:true,
            message:"Product created",
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
//  2. this function get All products
const getAllProducts=(req,res)=>{
    productModel.find({}).then((result)=>{
        res.status(200).json({
            success:true,
            message:"get All products",
            products:result
        })
    }).catch((err=>{
        res.status(500).json({
            success:false,
            message:"server Error",
            error:err
        })
    }))
}
//  3. this function get product ByName
const getProductByName=(req,res)=>{
    const{name}=req.params
    productModel.find({name:name}).then((result)=>{
        if(!result.length){
            res.status(404).json({
                success:"false",
                message:`the product with name=>${name} not found`,

            })
        }else{
        res.status(200).json({
            success:true,
            message:`get product by name=> ${name}`,
            product:result
        })
    }
    }).catch((error)=>{
        res.status(500).json({
            success:false,
            message:"server Error",
            error:error.message
        })
    })
}
//  4. this function get Product ById

const getProductById=(req,res)=>{
    const {id}=req.params
    productModel.findById(id).then((result)=>{
        if(!result){
            res.status(404).json({
                success:false,
                message:`the product with id =>${id}not found`
            })
        }else{
        res.status(200).json({
        success:true,
        message:`get product by id =>${id}`,
        product:result    
        })
    }
    }).catch((error)=>{
        res.status(500).json({
            success:false,
            message:"server Error",
            error:error
        })
    })
}
//  5. this function get Product By CategorId
    const getProductByCategortId=(req,res)=>{
        const {id}=req.params
        productModel.find({category:id}).then((result)=>{
            if(!result.length){
                res.status(404).json({
                    success:false,
                    message:`the product:${id} no catogry id`
                })
            }else{
                res.status(201).json({
                    success:true,
                    message:` product for the category ${id}`,
                    product:result
                })
            }
        }).catch((err)=>{
            res.status(500).json({
                success:false,
                message:"server Error",
                error:err.message
            })
        })
    }
module.exports={createNewProduct,getAllProducts,getProductByName,getProductById,getProductByCategortId}