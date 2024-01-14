const express = require("express");
const {register, login}=require("../controllers/users")

// create users router
const usersRouter = express.Router();

// endpoint for the POST request
usersRouter.post("/register", register);
usersRouter.post("/login",login)
module.exports = usersRouter;