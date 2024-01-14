import React,{useContext,useState} from "react";

import axios from "axios";
import { userContext } from "../../App";

const Login=()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handelLogin=()=>{
        {
            axios.post(`http://localhost:5000/users/login`,{email,password}).then((result)=>{

            }).catch((error)=>{
                console.log(error)
            })
        }
    }

    return(
        <>
        <div>Login</div>
        <input type='text' placeholder='Email' onChange={(e)=>{
        setEmail(e.target.value)
            
        }}/>
         <input type='password'             placeholder='Password' onChange={(e)=>  {
        setPassword(e.target.value)
        }}/>
        <button onClick={handelLogin}>Login</button>
        </>

    )
}

export default Login