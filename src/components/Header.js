 import {LOGO_URL} from "../utils/constants";
 import {Link} from "react-router-dom";
 import { useState} from "react";
 import useOnlineStatus from "../utils/useOnlineStatus";
const Header =()=>{
  
  let[btnNameReact,setbtnNameReact]=useState("Login")
  const onlineStatus=useOnlineStatus();
  
    return (
      <div className="header">
        <div className="logo-container">
          <img  className="logo"src={LOGO_URL} />
  
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link></li>
            <li>
              <Link to ="/about">About Us</Link></li>
            <li>
              <Link to ="/contact"> Contact US</Link></li>
            <li>cart</li>
            <li>Online Status:{onlineStatus?"✅":"💔"}</li>
            <button 
            className="Login"
            onClick={()=>{
             setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
              }}
              >
                {btnNameReact}
              </button>
          
            
  
  
  
  
          </ul>
  
        </div>
      </div>
    );
  };
  export default Header;