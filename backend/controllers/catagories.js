const categoryModel=require("../models/categories")

//  1. this function create Category
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
        })
    }) .catch((err)=>{
            res.status(500).json({
                success:false,
                message:"Server Error",
                error:err.message
            })
            
        })
    
}

//  2. this function get All Categories
const getAllCategries=(req,res)=>{
categoryModel.find({}).then((result)=>{
    res.status(200).json({
        success:true,
        message:"All the categories",
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

//  3. this function get Categories ByName
const getCategoryByName=(req,res)=>{
    const{name}=req.params
   
    categoryModel.find({name:name}).then((result)=>{
        if(!result.length){
            res.status(404).json({
                success:"false",
                message:`the category with name=>${name} not found`
            })
        }else{
        res.status(200).json({
            success:true,
            message:`get categort by name=> ${name}`,
            category:result
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
//  4. this function get Categories ById

const getCategoryById=(req,res)=>{
  const{id}=req.params
    categoryModel.findById(id).then((result)=>{
     if(!result){
        return res.status(404).json({
            success:false,
            message:`the category with id =>${id}not found`,
        })
     }
        res.status(200).json({
        success:true,
        message:`get category by id =>${id}`,
        category:result    
        })
    }).catch((error)=>{
        res.status(500).json({
            success:false,
            message:"server Error",
            error:error.message
        })
    })
}
//  5. this function delete Categories ById
    const deleteCategoryById=(req,res)=>{
        const {id}=req.params
        categoryModel.findByIdAndDelete(id).then((result)=>{
            res.status(200).json({
                success:true,
                message:"Category deleted",

            })
        }).catch((error)=>{
            res.status(500).json({
                success:false,
                message:"server Error",
                error:error
            })
        })
    }
module.exports={createNewCategory,
                getAllCategries,
                getCategoryByName,
                getCategoryById,
                deleteCategoryById}