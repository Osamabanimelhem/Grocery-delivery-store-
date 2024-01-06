const express = require("express");
const cors = require("cors");
require("dotenv").config();
// import database connection
require("./models/db")
// import usersRouter
const usersRouter=require("./routes/users")
// import rolesRouter
const rolesRouter=require("./routes/roles");
// import categoryRouter
const categoryRouter = require("./routes/categories");
// import productRouter
const productRouter = require("./routes/product");
// import cartRouter
const cartRouter = require("./routes/cart");
// import reviewRouter
const reviewRouter = require("./routes/review");



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

// users Router
app.use("/users",usersRouter);
// roles Router
app.use("/roles",rolesRouter)
// categories Router
app.use("/category",categoryRouter)
// product Router
app.use("/product",productRouter)
// cart Router
app.use("/cart",cartRouter)
// review Router
app.use("/review",reviewRouter)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
