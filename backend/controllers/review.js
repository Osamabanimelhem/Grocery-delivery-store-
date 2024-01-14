const reviewModel=require("../models/reviews")
//  1. this function create review
const createNewReview=(req,res)=>{
const{comment,userId}=req.body
const newReview= new reviewModel({
    comment,
    userId
})
newReview.save().then((result)=>{
    res.status(201).json({
        success:true,
        message:"review created",
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

//  2. this function get all review
const getAllReviwes=(req,res)=>{
    reviewModel.find({}).then((result)=>{
        //console.log(result);
        res.status(200).json({
            success:true,
            message:" get All reviews",
            reviwe:result[0].comment
        })
    }).catch((error)=>{
        res.status(500).json({
            success:false,
            message:"server Error",
            error:error.message
        })
    })
}

module.exports={createNewReview,getAllReviwes}