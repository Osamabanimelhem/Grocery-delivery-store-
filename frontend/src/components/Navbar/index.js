import {Link } from "react-router-dom";
const Nav = () => {
    
  return (
    <div className='Nav' style={{ display: "flex", gap: "16px" }}>
        <Link to="/users/register">Register</Link> 
        <Link to="users/login">Login</Link>
    </div>
  )
};

export default Nav