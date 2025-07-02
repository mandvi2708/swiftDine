 import {LOGO_URL} from "../utils/constants";
 import {Link} from "react-router-dom";
 import { useState} from "react";
const Header =()=>{
  
  let[btnNameReact,setbtnNameReact]=useState("Login")
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