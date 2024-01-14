const express=require("express");
const { createNewOrder, getAllOrder } = require("../controllers/order");


// create order Router
const orderRouter=express.Router();

// endpoint for the post request
orderRouter.post("/",createNewOrder)
// endpoint for the get request
orderRouter.get("/",getAllOrder)

module.exports=orderRouter
