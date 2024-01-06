const express=require("express")
const { createNewProduct } = require("../controllers/product")

// create product router
const productRouter=express.Router()

// endpoint for the post request
productRouter.post("/",createNewProduct)

module.exports=productRouter