const authorization=(text)=>{
    return(req,res,next)=>{
        //console.log(req.token)
        const {permissions} = req.token.role
        console.log(permissions);
        if(!permissions.includes(text)){
            res.status(403).json('unauthorized')
        }else{
            next()
        }
    }
    }
    
    module.exports=authorization