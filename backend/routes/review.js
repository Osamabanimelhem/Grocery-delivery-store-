const express=require("express")
const { createNewReview } = require("../controllers/review")

// create reviewRouter
const reviewRouter=express.Router()

// endpoint for the post request
reviewRouter.post("/",createNewReview)

module.exports=reviewRouter