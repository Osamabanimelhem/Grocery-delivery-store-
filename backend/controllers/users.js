const userModel=require("../models/users")


const register=(req,res)=>{
    const {firstName,lastName,email, password, role}=req.body
    const newUser=new userModel({
        firstName,
        lastName,
        email,
        password,
        role
    })
    newUser.save().then((result)=>{
        res.status(201).json({
            success: true,
           message: "Account Created Successfully",
           result:result
           }) 
    }).catch((err)=>{
             res.status(404).json({
            success:false,
            message: "The email already exists",
            error:err
            }) 
    })
}
module.exports={register}