const express=require("express")
const { createNewProduct, getAllProducts, getProductByName, getProductById, getProductByCategortId } = require("../controllers/product")

// create product router
const productRouter=express.Router()

// endpoint for the post request
productRouter.post("/",createNewProduct)
// endpoint for the get request
productRouter.get("/",getAllProducts)
productRouter.get("/search_1/:name",getProductByName)
productRouter.get("/search_2/:id",getProductById)
productRouter.get("/search_3/:id",getProductByCategortId)
module.exports=productRouter