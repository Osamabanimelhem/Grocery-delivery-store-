const express=require("express");
const { createNewCart, getAllCarts, deleteCarItemById } = require("../controllers/cart");


// create cart router
const cartRouter=express.Router()
// endpoint for the post request
cartRouter.post("/",createNewCart)
// endpoint for the get request
cartRouter.get("/",getAllCarts)
// endpoint for the delete request
cartRouter.delete("/:id",deleteCarItemById)

module.exports=cartRouter

