const jwt=require("jsonwebtoken")
const authentication= async(req,res,next)=>{
    console.log((req.headers.authentication));
    if(req.headers.authentication){
        const token =req.headers.authentication.split(" ").pop()
        console.log(token);
        try {
            const parsedToken= await jwt.verify(token,process.env.SECRET)
            console.log(parsedToken);
            req.token=parsedToken

            next()
        }catch(err){
            res.status(403).json({
                success:false,
                message:"The token is invalid or expired"
            })
        }
      
    }else{
        res.status(403).json({
            success:false,
            message:"Forbidden"
        })
    }
}

module.exports=authentication