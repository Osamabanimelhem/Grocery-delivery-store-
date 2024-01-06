const express=require("express");
const { createNewCategory } = require("../controllers/catagories");

// create category router
const categoryRouter=express.Router();
// endpoint for the post request
categoryRouter.post("/",createNewCategory)

module.exports=categoryRouter