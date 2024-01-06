const reviewModel=require("../models/reviews")

const createNewReview=(req,res)=>{
const{comment,user}=req.body
const newReview= new reviewModel({
    comment,
    user
})
newReview.save().then((result)=>{
    res.status(201).json({
        success:true,
        message:"review created",
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

module.exports={createNewReview}