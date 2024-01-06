const express=require("express");
const { createNewRole } = require("../controllers/roles");

// create roles router
const rolesRouter = express.Router();
// endpoint for the post request
rolesRouter.post("/",createNewRole)

module.exports=rolesRouter