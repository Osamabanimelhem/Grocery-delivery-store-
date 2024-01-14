const express=require("express")
const { createNewReview, getAllReviwes } = require("../controllers/review")

// create reviewRouter
const reviewRouter=express.Router()

// endpoint for the post request
reviewRouter.post("/",createNewReview)
// endpoint for the get request
reviewRouter.get("/",getAllReviwes)

module.exports=reviewRouter