const express=require("express");
const { createNewCategory, getAllCategries, getCategoryByName, getCategoryById, deleteCategoryById } = require("../controllers/catagories");

// create category router
const categoryRouter=express.Router();
// endpoint for the post request
categoryRouter.post("/",createNewCategory)
// endpoint for the get request
categoryRouter.get("/",getAllCategries)
categoryRouter.get("/search_1/:name",getCategoryByName)
categoryRouter.get("/search_2/:id",getCategoryById)
// endpoint for the delete request
categoryRouter.delete("/:id",deleteCategoryById)

module.exports=categoryRouter