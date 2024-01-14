import {Route,Routes,Link} from "react-router-dom"
import { createContext,useState } from "react";
import "./App.css";
import Register from "./components/Register";
import Nav from "./components/Navbar";
import Login from "./components/Login";
export const userContext=createContext()
function App() {
  const [token, settoken] = useState(""||localStorage.getItem("token"))
  return (
    <userContext.Provider >
    <div className="App">
      <h1>Hello, World!</h1>
      <Nav/>
      <Routes>
        <Route path="/users/register" element={<Register/>}></Route>
        <Route path="/users/login" element={<Login/>}/>
      </Routes>
    </div>
    </userContext.Provider>
  );
}

export default App;
