const userModel=require("../models/users")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
// 1. this function return register
const register=(req,res)=>{
    const {firstName,lastName,email, password}=req.body
    const newUser=new userModel({
        firstName,
        lastName,
        email,
        password,
        role:"659ed5292e4d51057ad55d12"
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


  
//  2. this function return login
 const login=(req,res)=>{
    const{email,password}=req.body
    userModel.findOne({email:email.toLowerCase()}).populate("role")
    .then(async(result)=>{
        console.log(result);
        if(!result){
            return res.status(409).json({
                success:false,
                message:"1The email doesn’t exist or the password you’ve entered is incorrect"
            })
            }
        else{
            const isValid=await bcrypt.compare(password,result.password)
            console.log(isValid);

            if(!isValid){
                res.status(409).json({
                    success:false,
                    message:"2The email doesn’t exist or the password you’ve entered is incorrect"
                })
            }else{
                const options={
                    expiresIn: "60m"
                }
                const payload={
                    userId:result_id,
                    role:result.role

                }
                const userToken=jwt.sign(payload,process.env.SECRET,options)
                console.log(userToken);
                return res.json({
                    success:true,
                    message:"Valid login credentials",
                    token:userToken
                })
            }
        }
    }).catch((err)=>{
        res.send(err)
    })
 }

module.exports={register ,login}