const express=require("express");
const { createNewCart } = require("../controllers/cart");


// create cart router
const cartRouter=express.Router()
// endpoint for the post request
cartRouter.post("/",createNewCart)

module.exports=cartRouter

