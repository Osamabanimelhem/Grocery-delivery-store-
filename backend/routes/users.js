const express = require("express");
const {register}=require("../controllers/users")

// create users router
const usersRouter = express.Router();

// endpoint for the POST request
usersRouter.post("/register", register);

module.exports = usersRouter;