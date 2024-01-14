import React ,{useState} from "react"
import axios from "axios"

const Register=()=>{
    const [firstName, setFirstName] =useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

const handelRegister=()=>{
    axios.post(`http://localhost:5000/users/register`,{firstName,lastName,email,password,role}).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
}
return(
    <>
    <div>Register</div>
    <input type="text" placeholder="FirstName" onChange={(e)=>{
        setFirstName(e.target.value)
    }}/>
    <input type="text" placeholder="LastName" onChange={(e)=>{
        setLastName(e.target.value)
    }}/>
    <input type="text" placeholder="Email" onChange={(e)=>{
        setEmail(e.target.value)
    }}/>
    <input type="password" placeholder="Password" onChange={(e)=>{
        setPassword(e.target.value)
    }}/>
    <input type="text" placeholder="Role" onChange={(e)=>{
        setRole(e.target.value)
    }}/>
    <button onClick={handelRegister}>Register</button>
    </>
)
}

export default Register